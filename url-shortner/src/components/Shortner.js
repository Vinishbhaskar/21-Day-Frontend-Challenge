import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import ShortenedUrl from './ShortenedUrl';

const Shortener = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (url) => {
    const accessToken = 'ff8fb38b04e62a8229fed86216b99b4e1726a70b'; // Replace with your actual access token
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
      const response = await axios.post(
        apiUrl,
        { long_url: url },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setShortUrl(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="shortener-container">
      <h1>URL Shortener</h1>
      <InputForm onSubmit={handleSubmit} />
      {shortUrl && <ShortenedUrl url={shortUrl} onCopy={handleCopy} />}
      {copied && <p className="copy-message">URL copied to clipboard!</p>}
    </div>
  );
};

export default Shortener;
