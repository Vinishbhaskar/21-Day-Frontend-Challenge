import React from 'react';
import { FaQrcode } from "react-icons/fa";

const GenerateButton = ({ onClick, disabled }) => (
  <div className="generate-button">
    <button onClick={onClick} disabled={disabled}>
    <FaQrcode className='icon'/> Generate QR Code
    </button>
  </div>
);

export default GenerateButton;
