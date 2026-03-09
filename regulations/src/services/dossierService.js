import { indexedDBService } from './indexedDBService';
import { createExtractorFromData } from 'node-unrar-js/esm/index.esm';

const ARCHIVE_BATCH_SIZE = 25;

const normalizeArchivePath = (path = '') =>
  path.replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+$/, '').trim();

const getRootFolderName = (paths) => {
  if (!paths || paths.length === 0) return 'Empty Dossier';

  const firstPath = paths[0];
  const rootFolder = firstPath.split('/')[0];
  const hasCommonRoot = paths.every(
    (path) => path.startsWith(`${rootFolder}/`) || path === rootFolder
  );

  return hasCommonRoot ? rootFolder : 'Dossier Files';
};

const getMimeType = (path) => {
  const ext = path.toLowerCase().split('.').pop();
  const mimeTypes = {
    pdf: 'application/pdf',
    txt: 'text/plain',
    html: 'text/html',
    htm: 'text/html',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    xml: 'application/xml',
    json: 'application/json'
  };
  return mimeTypes[ext || ''] || 'application/octet-stream';
};

const buildArchiveTree = (entries, rootName) => {
  const root = {
    name: rootName,
    path: '',
    type: 'folder',
    children: []
  };

  entries.forEach(({ path, isDirectory }) => {
    const normalizedPath = normalizeArchivePath(path);
    if (!normalizedPath) return;

    const parts = normalizedPath.split('/').filter((part) => part.trim() !== '');
    let currentNode = root;

    for (let i = 0; i < parts.length; i += 1) {
      const part = parts[i];
      const isLastPart = i === parts.length - 1;
      const isFile = !isDirectory && isLastPart;
      const nodePath = parts.slice(0, i + 1).join('/');

      let existing = currentNode.children?.find((child) => child.path === nodePath);
      if (!existing) {
        existing = {
          name: part,
          path: nodePath,
          type: isFile ? 'file' : 'folder',
          children: isFile ? undefined : []
        };
        currentNode.children?.push(existing);
      }

      currentNode = existing;
    }
  });

  return root;
};

class DossierService {
  constructor() {
    this.worker = null;
    this.currentDossierId = null;
    this.activeRequests = new Map();
    this.requestTimeouts = new Map();
  }

  // Debounced request handler
  async debouncedRequest(key, requestFn, delay = 300) {
    // Cancel existing timeout for this key
    if (this.requestTimeouts.has(key)) {
      clearTimeout(this.requestTimeouts.get(key));
    }

    // Return existing promise if request is already active
    if (this.activeRequests.has(key)) {
      return this.activeRequests.get(key);
    }

    // Create new debounced request
    const promise = new Promise((resolve, reject) => {
      const timeoutId = setTimeout(async () => {
        try {
          const result = await requestFn();
          this.activeRequests.delete(key);
          this.requestTimeouts.delete(key);
          resolve(result);
        } catch (error) {
          this.activeRequests.delete(key);
          this.requestTimeouts.delete(key);
          reject(error);
        }
      }, delay);

      this.requestTimeouts.set(key, timeoutId);
    });

    this.activeRequests.set(key, promise);
    return promise;
  }

  async parseFolder(files, onProgress) {
    try {
      if (!files || files.length === 0) {
        throw new Error('No files provided');
      }
      
      const root = { type: 'folder', name: 'root', children: [] };
      const fileData = [];
      
      onProgress?.(10);
      
      for (let i = 0; i < files.length; i++) {
        try {
          const file = files[i];
          if (!file) {
            console.log(`Skipping null file at index ${i}`);
            continue;
          }
          
          console.log(`Processing file ${i}:`, {
            name: file.name,
            size: file.size,
            type: file.type,
            webkitRelativePath: file.webkitRelativePath
          });
          
          const path =
            file.webkitRelativePath ||
            file.relativePath ||
            file.__relativePath ||
            file.name ||
            `file_${i}`;
          const pathParts = path.split('/').filter(part => part.length > 0);
          
          if (pathParts.length === 0) continue;
          
          // Build tree structure
          let currentNode = root;
          let currentPath = '';
          for (let j = 0; j < pathParts.length - 1; j++) {
            const folderName = pathParts[j];
            if (!currentNode.children) currentNode.children = [];
            
            let folder = currentNode.children.find(child => child.name === folderName && child.type === 'folder');
            if (!folder) {
              const folderPath = currentPath ? `${currentPath}/${folderName}` : folderName;
              folder = { type: 'folder', name: folderName, path: folderPath, children: [] };
              currentNode.children.push(folder);
            }
            currentNode = folder;
            currentPath = currentNode.path || currentPath;
          }
          
          // Add file to tree
          const fileName = pathParts[pathParts.length - 1];
          if (!currentNode.children) currentNode.children = [];
          
          if (file) {
            const fileSize = (typeof file.size === 'number') ? file.size : 0;
            const filePath = path;
            currentNode.children.push({
              type: 'file',
              name: fileName,
              path: filePath,
              size: fileSize
            });
            
            // Store file data
            fileData.push({
              path: path,
              blob: file,
              size: fileSize,
              type: file.type
            });
          } else {
            console.warn(`Skipping undefined file for path: ${path}`);
          }
          
        } catch (fileError) {
          console.error(`Error processing file ${i}:`, fileError);
          continue;
        }
        
        const progress = 10 + (i / files.length) * 80;
        onProgress?.(progress);
      }
      
      const dossier = {
        name: files[0]?.webkitRelativePath?.split('/')[0] || 'Dossier',
        root: root,
        uploadDate: new Date().toISOString()
      };
      
      this.currentDossierId = await indexedDBService.saveDossier(dossier, fileData);
      onProgress?.(100);
      return dossier;
      
    } catch (error) {
      console.error('Folder processing error:', error);
      throw new Error(`Folder processing failed: ${error.message}`);
    }
  }

  async parseArchiveFile(file, onProgress) {
    const lowerName = (file?.name || '').toLowerCase();
    if (lowerName.endsWith('.rar')) {
      return this.parseRarFile(file, onProgress);
    }

    return this.parseZipFile(file, onProgress);
  }

  async parseRarFile(file, onProgress) {
    const formatRarError = (errorOrMessage) => {
      const rawMessage =
        typeof errorOrMessage === 'string'
          ? errorOrMessage
          : errorOrMessage?.message || 'RAR processing failed';

      if (/notreadableerror|requested file could not be read/i.test(rawMessage)) {
        return `Could not read the selected RAR file. Re-select a local copy and try again. Details: ${rawMessage}`;
      }

      if (/ERAR_BAD_ARCHIVE|ERAR_BAD_DATA|ERAR_UNKNOWN_FORMAT|File is not RAR archive/i.test(rawMessage)) {
        return `The archive appears unsupported or corrupted. Please verify the RAR file and try again. Details: ${rawMessage}`;
      }

      if (/ERAR_MISSING_PASSWORD|ERAR_BAD_PASSWORD/i.test(rawMessage)) {
        return `This RAR archive is password-protected or has an invalid password and cannot be processed. Details: ${rawMessage}`;
      }

      return rawMessage;
    };

    try {
      if (!file) {
        throw new Error('No archive file provided');
      }

      // Ensure browser can still access the selected file handle
      await file.slice(0, 1).arrayBuffer();

      const [archiveData, wasmBinary] = await Promise.all([
        file.arrayBuffer(),
        fetch('/unrar.wasm').then(async (response) => {
          if (!response.ok) {
            throw new Error(`Failed to load RAR engine (${response.status})`);
          }
          return response.arrayBuffer();
        })
      ]);

      const extractor = await createExtractorFromData({
        data: archiveData,
        wasmBinary
      });

      const fileList = extractor.getFileList();
      const headers = Array.from(fileList.fileHeaders || []);

      const entries = headers
        .map((header) => ({
          path: normalizeArchivePath(header.name),
          isDirectory: Boolean(header.flags?.directory),
          size: Number(header.unpSize || 0)
        }))
        .filter((entry) => entry.path);

      const allPaths = entries.map((entry) => entry.path);
      const rootName = getRootFolderName(allPaths);
      const root = buildArchiveTree(entries, rootName);
      const dossier = { name: rootName, root };

      const fileEntries = entries.filter((entry) => !entry.isDirectory);
      const totalFiles = fileEntries.length;

      const dossierId = await indexedDBService.createDossier(dossier);
      this.currentDossierId = dossierId;

      onProgress?.({ type: 'tree_ready', dossier });

      if (totalFiles === 0) {
        onProgress?.({
          type: 'batch_progress',
          progress: 100,
          processed: 0,
          total: 0,
          filesReady: 0,
          stage: 'complete'
        });
        return dossier;
      }

      const pathIndex = {};
      let processedFiles = 0;

      const fileHeaders = headers.filter(
        (header) => !header.flags?.directory && normalizeArchivePath(header.name)
      );

      for (let i = 0; i < fileHeaders.length; i += 10) {
        const batchHeaders = fileHeaders.slice(i, i + 10);
        const extracted = extractor.extract({
          files: batchHeaders.map((header) => header.name)
        });

        const batchFiles = [];
        for (const arcFile of extracted.files) {
          const header = arcFile.fileHeader;
          const normalizedPath = normalizeArchivePath(header.name);

          if (!normalizedPath || header.flags?.directory) {
            continue;
          }

          const extraction = arcFile.extraction;
          if (extraction && extraction.byteLength >= 0) {
            const mimeType = getMimeType(normalizedPath);
            const blob = new Blob([extraction], { type: mimeType });

            batchFiles.push({
              path: normalizedPath,
              blob,
              size: blob.size,
              type: mimeType
            });
            pathIndex[normalizedPath.toLowerCase()] = normalizedPath;
          }

          processedFiles += 1;
        }

        if (batchFiles.length > 0) {
          await indexedDBService.appendFilesToDossier(dossierId, batchFiles, {
            compress: false,
            batchSize: ARCHIVE_BATCH_SIZE
          });
        }

        onProgress?.({
          type: 'batch_progress',
          progress: Math.min(99, Math.round((processedFiles / totalFiles) * 100)),
          processed: processedFiles,
          total: totalFiles,
          filesReady: processedFiles,
          stage: 'saving'
        });
      }

      await indexedDBService.savePathIndex(dossierId, pathIndex);

      onProgress?.({
        type: 'batch_progress',
        progress: 100,
        processed: totalFiles,
        total: totalFiles,
        filesReady: totalFiles,
        stage: 'complete'
      });

      return dossier;
    } catch (error) {
      throw new Error(formatRarError(error));
    }
  }

  async parseZipFile(file, onProgress) {
    return new Promise((resolve, reject) => {
      let objectUrl = null;
      let isSettled = false;
      let treeStructure = null;
      let filesPersisted = 0;
      let zipDossierId = null;
      const pathIndex = {};
      let batchWriteChain = Promise.resolve();
      let handleMessage = null;
      let totalFiles = 0;
      let extractedFiles = 0;

      const emitZipProgress = () => {
        if (!totalFiles) return;

        const extractionRatio = extractedFiles / totalFiles;
        const storageRatio = filesPersisted / totalFiles;
        const weightedProgress = Math.min(
          99,
          Math.round((extractionRatio * 0.4 + storageRatio * 0.6) * 100)
        );

        onProgress?.({
          type: 'batch_progress',
          progress: weightedProgress,
          processed: filesPersisted,
          total: totalFiles,
          filesReady: filesPersisted,
          stage: 'saving'
        });
      };

      const cleanupObjectUrl = () => {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
          objectUrl = null;
        }
      };

      const formatZipError = (errorOrMessage) => {
        const rawMessage =
          typeof errorOrMessage === 'string'
            ? errorOrMessage
            : errorOrMessage?.message || 'ZIP processing failed';

        if (/notreadableerror|requested file could not be read/i.test(rawMessage)) {
          return `Could not read the selected ZIP file. Re-select a local copy (not a cloud placeholder or restricted path) and try again. For very large dossiers, use Folder Upload mode. Details: ${rawMessage}`;
        }

        if (/end of central directory|corrupt|zip64|invalid zip/i.test(rawMessage)) {
          return `The ZIP appears unsupported or corrupted (common with some very large/ZIP64 archives). Re-create the ZIP with ZIP64 enabled, or use Folder Upload mode. Details: ${rawMessage}`;
        }

        return rawMessage;
      };

      const fail = (errorOrMessage) => {
        if (isSettled) return;
        isSettled = true;
        if (handleMessage) {
          this.worker?.removeEventListener('message', handleMessage);
        }
        cleanupObjectUrl();
        const message = formatZipError(errorOrMessage);
        reject(new Error(message));
      };

      const succeed = (dossier) => {
        if (isSettled) return;
        isSettled = true;
        if (handleMessage) {
          this.worker?.removeEventListener('message', handleMessage);
        }
        cleanupObjectUrl();
        resolve(dossier);
      };

      // Create worker if not exists
      if (!this.worker) {
        this.worker = new Worker('/zipWorker.js');
      }
      
      const workerId = Date.now().toString();

      handleMessage = async (e) => {
        const { type, workerId: responseWorkerId, data, progress, error } = e.data;
        
        if (isSettled) return;
        if (responseWorkerId !== workerId) return;
        
        if (type === 'PROGRESS') {
          onProgress?.(progress);
        } else if (type === 'TREE_READY') {
          try {
            treeStructure = data;
            zipDossierId = await indexedDBService.createDossier(data);
            this.currentDossierId = zipDossierId;
            onProgress?.({ type: 'tree_ready', dossier: data });
          } catch (dbError) {
            fail(`Storage error: ${dbError.message}`);
          }
        } else if (type === 'BATCH_PROCESSED') {
          const batchFiles = data.files || [];
          totalFiles = data.total || totalFiles;
          extractedFiles = data.processed || extractedFiles;

          if (!zipDossierId && treeStructure) {
            try {
              zipDossierId = await indexedDBService.createDossier(treeStructure);
              this.currentDossierId = zipDossierId;
            } catch (dbError) {
              fail(`Storage error: ${dbError.message}`);
              return;
            }
          }

          if (zipDossierId && batchFiles.length > 0) {
            batchWriteChain = batchWriteChain.then(async () => {
              await indexedDBService.appendFilesToDossier(zipDossierId, batchFiles, {
                compress: false,
                batchSize: ARCHIVE_BATCH_SIZE
              });
              for (const fileEntry of batchFiles) {
                if (fileEntry?.path) {
                  pathIndex[fileEntry.path.toLowerCase()] = fileEntry.path;
                }
              }
              filesPersisted += batchFiles.length;

              emitZipProgress();
            });
          }

          emitZipProgress();
        } else if (type === 'FILE_PROGRESS') {
          // Individual large file progress
          onProgress?.({
            type: 'file_progress',
            file: data.path,
            progress: data.progress
          });
        } else if (type === 'ZIP_PROCESSED') {
          try {
            const dossier = treeStructure || data.dossier;
            if (!zipDossierId) {
              zipDossierId = await indexedDBService.createDossier(dossier);
              this.currentDossierId = zipDossierId;
            }

            await batchWriteChain;
            await indexedDBService.savePathIndex(zipDossierId, pathIndex);
            onProgress?.({
              type: 'batch_progress',
              progress: 100,
              processed: totalFiles || filesPersisted,
              total: totalFiles || filesPersisted,
              filesReady: filesPersisted,
              stage: 'complete'
            });
            succeed(dossier);
          } catch (dbError) {
            fail(`Storage error: ${dbError.message}`);
          }
        } else if (type === 'ERROR') {
          fail(error);
        }
      };
      
      this.worker.addEventListener('message', handleMessage);
      
      // Quick readability check before handing over to worker
      file
        .slice(0, 1)
        .arrayBuffer()
        .then(() => {
          objectUrl = URL.createObjectURL(file);

          // Send file to worker
          this.worker.postMessage({
            type: 'PROCESS_ZIP',
            data: { file, fileUrl: objectUrl, workerId }
          });
        })
        .catch((readError) => {
          fail(readError);
        });

    });
  }

  async getCachedDossier() {
    return await indexedDBService.getCachedDossier();
  }

  async clearDossier() {
    // Cancel all pending requests
    this.requestTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    this.requestTimeouts.clear();
    this.activeRequests.clear();
    
    await indexedDBService.clearDossier();
    this.currentDossierId = null;
  }

  async getFileBlob(path) {
    const requestKey = `file-${path}`;
    return this.debouncedRequest(requestKey, () => indexedDBService.getFileBlob(path), 100);
  }

  async storeFileBlob(path, file) {
    return await indexedDBService.storeFileBlob(path, file);
  }

  async cacheDossier(dossier) {
    return await indexedDBService.cacheDossier(dossier);
  }

  async findFileByPattern(pattern) {
    const requestKey = `pattern-${pattern}`;
    return this.debouncedRequest(requestKey, () => indexedDBService.findFileByPattern(pattern), 200);
  }


}

export const dossierService = new DossierService();
