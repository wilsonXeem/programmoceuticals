import React from 'react';

const SimplePDFViewer = ({ fileUrl, height = "600px" }) => {
  return (
    <iframe
      src={fileUrl}
      style={{
        width: "100%",
        height: height,
        border: "none"
      }}
      title="PDF Viewer"
    />
  );
};

export default SimplePDFViewer;
