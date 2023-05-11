import React, { useState } from 'react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState('200x200');
  const [color, setColor] = useState('0-0-0');
  const [format, setFormat] = useState('png');
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  const colorOptions = [
  { name: 'Black', value: '0-0-0', colorCode: '#000000' },
  { name: 'Red', value: '255-0-0', colorCode: '#FF0000' },
  { name: 'Green', value: '0-255-0', colorCode: '#00FF00' },
  { name: 'Blue', value: '0-0-255', colorCode: '#0000FF' },
  { name: 'Orange', value: '253-127-32', colorCode: '#FD7F20' }
];


  const sizeOptions = [
    { name: '150x150', value: '150x150' },
    { name: '200x200', value: '200x200' },
    { name: '300x300', value: '300x300' }
  ];

  const formatOptions = [
    { value: 'png', label: 'PNG' },
    { value: 'gif', label: 'GIF' },
    { value: 'jpeg', label: 'JPEG' },
    { value: 'jpg', label: 'JPG' },
    { value: 'svg', label: 'SVG' },
    // { value: 'eps', label: 'EPS' },
  ];
  

  const generateQRCode = () => {
    const apiUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      text
    )}&size=${size}&color=${color}&format=${format}`;

    // Perform API request to generate QR code
    // Use fetch or any other HTTP library of your choice
    // Here's an example using fetch
    fetch(apiUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Store the generated QR code
        setGeneratedQRCode(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.log('Error generating QR code:', error);
      });
  };

  const downloadQRCode = () => {
    if (generatedQRCode) {
      // Create a download link for the QR code
      const downloadLink = document.createElement('a');
      downloadLink.href = generatedQRCode;
      downloadLink.download = `qrcode.${format}`;
      downloadLink.click();
    }
  };

  return (
    <div className="QRCodeGenerator">
    <h1>QR Code Generator</h1>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter URL or Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>

    <div className="size-option-btn">
      {sizeOptions.map((option) => (
        <button
          key={option.value}
          className={size === option.value ? 'selected' : ''}
          onClick={() => setSize(option.value)}
        >
          {option.name}
        </button>
      ))}
    </div>

    <div className="color-option-btn">
        {colorOptions.map((option) => (
        <button
            key={option.value}
            className={color === option.value ? 'selected' : ''}
            style={{ backgroundColor: `#${option.colorCode}` }}
            onClick={() => setColor(option.value)}>
            {option.name}
        </button>
        ))}
    </div>

    <div className="format-option-btn">
        {formatOptions.map((option) => (
        <button
            key={option.value}
            className={format === option.value ? 'selected' : ''}
            onClick={() => setFormat(option.value)} >
            {option.label}
        </button>
        ))}
    </div>

    <div className="generate-button">
      <button onClick={generateQRCode} disabled={!text}>Generate QR Code</button>
    </div>

    {generatedQRCode && (
      <div className="generated-qr-container">
        <div className="generated-qr">
            <img src={generatedQRCode} alt="QR Code" />
        </div>
        <div className="download-button">
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      </div>
    )}
  </div>
  );
}

export default QRCodeGenerator;

