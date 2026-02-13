import React, { createContext, useContext, useState, useEffect } from 'react';
import { dossierService } from '../services/dossierService';
import { backgroundProcessor } from '../services/backgroundProcessor';

const DossierContext = createContext();

export const DossierProvider = ({ children }) => {
  const [dossier, setDossier] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCached = async () => {
      const cached = await dossierService.getCachedDossier();
      if (cached) {
        setDossier(cached);
        // Start background tasks after dossier loads
        backgroundProcessor.preloadComponents();
        backgroundProcessor.cleanupOldCache();
      }
    };
    loadCached();
  }, []);

  const uploadDossier = async (fileOrFiles, onProgress) => {
    setLoading(true);
    try {
      let dossierData;
      if (Array.isArray(fileOrFiles)) {
        // Folder upload
        dossierData = await dossierService.parseFolder(fileOrFiles, onProgress);
      } else {
        // ZIP file upload
        dossierData = await dossierService.parseZipFile(fileOrFiles, onProgress);
      }
      setDossier(dossierData);
      
      // Start background processing after successful upload
      if (dossierData?.root?.children) {
        const allFiles = [];
        const traverse = (node) => {
          if (node.type === 'file') allFiles.push(node);
          if (node.children) node.children.forEach(traverse);
        };
        dossierData.root.children.forEach(traverse);
        
        backgroundProcessor.indexFiles(allFiles);
        backgroundProcessor.warmCache(allFiles.slice(0, 20).map(f => f.path));
        backgroundProcessor.prepareReportData(dossierData);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Upload error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const addFiles = async (files, onProgress) => {
    setLoading(true);
    try {
      // Create a simple file structure for individual files
      const fileNodes = files.map((file, index) => ({
        name: file.name,
        path: `uploaded_files/${file.name}`,
        type: 'file',
        size: file.size,
        file: file
      }));

      if (dossier) {
        // Add to existing dossier
        const updatedDossier = {
          ...dossier,
          root: {
            ...dossier.root,
            children: [
              ...(dossier.root.children || []),
              {
                name: 'Uploaded Files',
                type: 'folder',
                children: fileNodes
              }
            ]
          }
        };
        setDossier(updatedDossier);
        await dossierService.cacheDossier(updatedDossier);
      } else {
        // Create new dossier with uploaded files
        const newDossier = {
          name: `Uploaded Files (${files.length} files)`,
          root: {
            name: 'root',
            type: 'folder',
            children: [{
              name: 'Uploaded Files',
              type: 'folder', 
              children: fileNodes
            }]
          },
          isFileUpload: true
        };
        setDossier(newDossier);
        await dossierService.cacheDossier(newDossier);
      }

      // Store file blobs for later access
      for (const file of files) {
        await dossierService.storeFileBlob(`uploaded_files/${file.name}`, file);
      }

      return { success: true };
    } catch (error) {
      console.error('Add files error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const clearDossier = () => {
    dossierService.clearDossier();
    setDossier(null);
    
    // Clear all review page tabs and state for all dossiers
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('review-openTabs-') || key.startsWith('review-activeTabIndex-')) {
        localStorage.removeItem(key);
      }
    });
  };

  const getFileBlob = (path) => {
    return dossierService.getFileBlob(path);
  };

  return (
    <DossierContext.Provider value={{
      dossier,
      setDossier,
      loading,
      uploadDossier,
      addFiles,
      clearDossier,
      getFileBlob,
      backgroundStatus: backgroundProcessor.getStatus()
    }}>
      {children}
    </DossierContext.Provider>
  );
};

export const useDossier = () => {
  const context = useContext(DossierContext);
  if (!context) {
    throw new Error('useDossier must be used within a DossierProvider');
  }
  return context;
};
