import React from 'react';

const DownloadButton = ({ onClick }) => (
  <div className="download-button">
    <button onClick={onClick}>Download QR Code</button>
  </div>
);

export default DownloadButton;
