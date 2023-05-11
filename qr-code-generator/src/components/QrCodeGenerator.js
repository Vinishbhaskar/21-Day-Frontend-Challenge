import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DownloadButton from './DownloadButton';
import GenerateButton from './GenerateButton';
import SelectOption from './SelectOption';

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
    { value: 'png', name: 'PNG' },
    { value: 'gif', name: 'GIF' },
    { value: 'jpeg', name: 'JPEG' },
    { value: 'jpg', name: 'JPG' },
    { value: 'svg', name: 'SVG' },
    // { value: 'eps', label: 'EPS' },
  ];
  

  const generateQRCode = () => {
    if (!text) {
        toast.error('Please enter a URL or text', {
          position: toast.POSITION.TOP_CENTER
        });
        return;
      }

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
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
    <div className="QRCodeGenerator">
    <h1>QR Code Generator </h1>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter URL or Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
    <SelectOption
        options={sizeOptions}
        selectedOption={size}
        setSelectedOption={setSize}
    />

    <SelectOption
        options={colorOptions}
        selectedOption={color}
        setSelectedOption={setColor}
        colorOption
    />

    <SelectOption
        options={formatOptions}
        selectedOption={format}
        setSelectedOption={setFormat}
    />

    <GenerateButton onClick={generateQRCode}  />

    {generatedQRCode && (
      <div className="generated-qr-container">
        <div className="generated-qr">
            <img src={generatedQRCode} alt="QR Code" />
        </div>
        <div className="download-button">
            <DownloadButton onClick={downloadQRCode} />
        </div>
      </div>
    )}
    <ToastContainer position={toast.POSITION.TOP_CENTER} />
  </div>
  );
}

export default QRCodeGenerator;

