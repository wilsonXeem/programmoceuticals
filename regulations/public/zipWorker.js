// Web Worker for ZIP processing with ZIP64-friendly streaming
let zipLibLoaded = false;

function ensureZipLib() {
  if (zipLibLoaded && self.zip && self.zip.ZipReader) return;

  try {
    importScripts('/zip.min.js');
    if (self.zip && typeof self.zip.configure === 'function') {
      self.zip.configure({
        useWebWorkers: false,
        useCompressionStream: true
      });
    }
  } catch (error) {
    throw new Error(`Failed to load ZIP processing library: ${error.message}`);
  }

  if (self.zip && self.zip.ZipReader) {
    zipLibLoaded = true;
    return;
  }

  throw new Error('ZIP processing library loaded but ZipReader is unavailable');
}

async function getSourceBlob(file, fileUrl) {
  if (file instanceof Blob) {
    return file;
  }

  if (fileUrl) {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to read ZIP blob URL (${response.status})`);
    }
    return response.blob();
  }

  throw new Error('No ZIP file provided');
}

function normalizePath(path) {
  return (path || '').replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+$/, '');
}

self.onmessage = async function (e) {
  const { type, data } = e.data;

  if (type !== 'PROCESS_ZIP') return;

  const { file, fileUrl, workerId } = data;

  try {
    ensureZipLib();

    const source = await getSourceBlob(file, fileUrl);
    const zipReader = new zip.ZipReader(new zip.BlobReader(source), { useWebWorkers: false });
    const rawEntries = await zipReader.getEntries();

    const entries = rawEntries
      .map((entry) => {
        const normalizedPath = normalizePath(entry.filename);
        return {
          entry,
          path: normalizedPath,
          isDirectory: Boolean(entry.directory)
        };
      })
      .filter((item) => item.path);

    const allPaths = entries.map((item) => item.path);
    const rootName = getRootFolderName(allPaths);

    const root = {
      name: rootName,
      path: '',
      type: 'folder',
      children: []
    };

    // Build file tree before streaming blobs
    for (const { path, isDirectory } of entries) {
      const parts = path.split('/').filter((part) => part.trim() !== '');
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
    }

    self.postMessage({
      type: 'TREE_READY',
      workerId,
      data: { name: rootName, root }
    });

    const fileEntries = entries
      .filter((item) => !item.isDirectory)
      .map((item) => ({
        ...item,
        size: item.entry.uncompressedSize || 0
      }));

    const LARGE_FILE_THRESHOLD = 256 * 1024;
    const HUGE_FILE_THRESHOLD = 2 * 1024 * 1024;

    const smallFiles = [];
    const largeFiles = [];
    const hugeFiles = [];
    const pdfFiles = [];

    for (const item of fileEntries) {
      if (item.path.toLowerCase().endsWith('.pdf')) {
        pdfFiles.push(item);
      } else if (item.size > HUGE_FILE_THRESHOLD) {
        hugeFiles.push(item);
      } else if (item.size > LARGE_FILE_THRESHOLD) {
        largeFiles.push(item);
      } else {
        smallFiles.push(item);
      }
    }

    pdfFiles.sort((a, b) => a.size - b.size);

    const totalFiles = fileEntries.length;
    let processedCount = 0;
    let totalProcessedBytes = 0;

    const processEntryBatch = async (items, batchSize, batchType) => {
      for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const batchData = [];

        for (const item of batch) {
          try {
            const relativePath = item.path;
            const mimeType = getMimeType(relativePath);
            let lastReported = -1;

            const blob = await item.entry.getData(new zip.BlobWriter(mimeType), {
              onprogress: (index, max) => {
                if (!max) return;
                const percent = Math.round((index / max) * 100);
                const step = batchType === 'huge' ? 10 : 5;
                if (percent >= lastReported + step || percent === 100) {
                  lastReported = percent;
                  self.postMessage({
                    type: 'FILE_PROGRESS',
                    workerId,
                    data: {
                      path: relativePath,
                      progress: percent,
                      size: item.size,
                      type: batchType
                    }
                  });
                }
              }
            });

            batchData.push({
              path: relativePath,
              blob,
              size: blob.size,
              type: mimeType
            });

            totalProcessedBytes += blob.size;
            processedCount += 1;
          } catch (entryError) {
            processedCount += 1;
            self.postMessage({
              type: 'FILE_PROGRESS',
              workerId,
              data: {
                path: item.path,
                progress: 100,
                size: item.size,
                type: 'skipped'
              }
            });
            console.warn(`Failed to process ${item.path}:`, entryError);
          }
        }

        self.postMessage({
          type: 'BATCH_PROCESSED',
          workerId,
          data: {
            files: batchData,
            progress: totalFiles > 0 ? (processedCount / totalFiles) * 100 : 100,
            processed: processedCount,
            total: totalFiles,
            batchType
          }
        });

        const yieldTime = batchType === 'huge' ? 20 : batchType === 'large' ? 10 : 3;
        await new Promise((resolve) => setTimeout(resolve, yieldTime));
      }
    };

    await processEntryBatch(pdfFiles, 5, 'pdf');
    await processEntryBatch(smallFiles, 50, 'small');
    await processEntryBatch(largeFiles, 10, 'large');
    await processEntryBatch(hugeFiles, 1, 'huge');

    await zipReader.close();

    self.postMessage({
      type: 'ZIP_PROCESSED',
      workerId,
      data: {
        dossier: { name: rootName, root },
        totalFiles,
        totalSize: totalProcessedBytes
      }
    });
  } catch (error) {
    self.postMessage({
      type: 'ERROR',
      workerId,
      error: error?.message || String(error)
    });
  }
};

function getRootFolderName(paths) {
  if (paths.length === 0) return 'Empty Dossier';

  const firstPath = paths[0];
  const rootFolder = firstPath.split('/')[0];
  const hasCommonRoot = paths.every(
    (path) => path.startsWith(`${rootFolder}/`) || path === rootFolder
  );

  return hasCommonRoot ? rootFolder : 'Dossier Files';
}

function getMimeType(path) {
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
}
