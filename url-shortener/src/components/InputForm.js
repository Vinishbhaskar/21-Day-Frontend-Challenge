import React, { useState } from 'react';

function InputForm({ onSubmit }){
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="url-input"
        value={url}
        onChange={handleChange}
        placeholder="Enter URL"
      />
      <button type="submit" className="submit-button">Shorten</button>
    </form>
  );
};

export default InputForm;
