import React from 'react';

const GenerateButton = ({ onClick, disabled }) => (
  <div className="generate-button">
    <button onClick={onClick} disabled={disabled}>
      Generate QR Code
    </button>
  </div>
);

export default GenerateButton;
