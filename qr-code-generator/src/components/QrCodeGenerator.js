import React, { useState } from 'react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState('200x200');
  const [color, setColor] = useState('000000');
  const [format, setFormat] = useState('png');
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  const generateQRCode = () => {
    const apiUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      text
    )}&size=${size}&color=${color}&format=${format}`;

    // Perform API request to generate QR code
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
      <input
        type="text"
        placeholder="Size (e.g., 200x200)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Color (e.g., 000000)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
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
