import React, { useState } from 'react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState('200x200');
  const [color, setColor] = useState('000000');
  const [format, setFormat] = useState('png');
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  const colorOptions = [
    { name: 'Black', value: '0-0-0' },
    { name: 'Red', value: '255-0-0' },
    { name: 'Green', value: '0-255-0' },
    { name: 'Blue', value: '0-0-255' },
    { name: 'Dark Olive Green', value: '85-107-47' }
  ];

  const sizeOptions = [
    { name: '200x200', value: '200x200' },
    { name: '300x300', value: '300x300' },
    { name: '400x400', value: '400x400' }
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
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        {sizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <br />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {colorOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <br />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="png">PNG</option>
        <option value="gif">GIF</option>
        <option value="jpeg">JPEG</option>
        <option value="jpg">JPG</option>
        <option value="svg">SVG</option>
        <option value="eps">EPS</option>
      </select>
      <br />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {generatedQRCode && (
        <>
          <br />
          <br />
          <img src={generatedQRCode} alt="QR Code" />
          <br />
          <br />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </>
      )}
    </div>
  );
}

export default QRCodeGenerator;

