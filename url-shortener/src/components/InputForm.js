import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InputForm({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(url)) {
      toast.error('Invalid URL format');
      return;
    }

    onSubmit(url);
    setUrl('');
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="url-input"
          value={url}
          onChange={handleChange}
          placeholder="Enter URL"
        />
        <button type="submit" className="submit-button">
          Shorten
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default InputForm;
