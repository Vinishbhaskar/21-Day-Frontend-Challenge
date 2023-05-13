import React from 'react';

const ShortenedUrl = ({ url, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    onCopy();
  };

  return (
    <div className="shortened-url">
      <p>Shortened URL: {url}</p>
      <button className="copy-button-shorten" onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default ShortenedUrl;
