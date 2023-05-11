import React from 'react';
import { FaQrcode } from "react-icons/fa";


const DownloadButton = ({ onClick }) => (
  <div className="download-button">
    <button onClick={onClick}><FaQrcode className='icon'/> Download QR Code</button>
  </div>
);

export default DownloadButton;
