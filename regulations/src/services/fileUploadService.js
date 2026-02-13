export const fileUploadService = {
  // Validate file type and size
  validateFile: (file, maxSize = 10 * 1024 * 1024) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`File type ${file.type} not supported`);
    }

    if (file.size > maxSize) {
      throw new Error(`File size exceeds ${maxSize / 1024 / 1024}MB limit`);
    }

    return true;
  },

  // Convert file to base64
  fileToBase64: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  // Process multiple files
  processFiles: async (files) => {
    const results = [];
    
    for (const file of Array.from(files)) {
      try {
        fileUploadService.validateFile(file);
        const data = await fileUploadService.fileToBase64(file);
        
        results.push({
          id: Date.now() + Math.random(),
          name: file.name,
          size: file.size,
          type: file.type,
          data,
          uploadDate: new Date().toISOString()
        });
      } catch (error) {
        results.push({
          error: error.message,
          fileName: file.name
        });
      }
    }
    
    return results;
  },

  // Format file size
  formatFileSize: (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  // Download file from base64
  downloadFile: (attachment) => {
    const a = document.createElement('a');
    a.href = attachment.data;
    a.download = attachment.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};