import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import ShortenedUrl from './ShortenedUrl';
import URLHistory from './UrlHistory';

const Shortener = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [urlHistory, setUrlHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('urlHistory');
    if (storedHistory) {
      setUrlHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleClearHistory = () => {
    setUrlHistory([]);
    localStorage.removeItem('urlHistory');
  };

  const handleSubmit = async (url) => {
    const accessToken = 'ff8fb38b04e62a8229fed86216b99b4e1726a70b'; // Replace with your actual access token
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

    try {
      const response = await axios.post(
        apiUrl,
        { long_url: formattedUrl },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const shortenedUrl = response.data.link;
      setShortUrl(shortenedUrl);

      const historyItem = {
        originalUrl: url,
        shortUrl: shortenedUrl,
        createdAt: new Date().toISOString(),
      };
      
      const updatedHistory = [historyItem, ...urlHistory];
      setUrlHistory(updatedHistory);
      localStorage.setItem('urlHistory', JSON.stringify(updatedHistory));
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

      {urlHistory.length > 0 && <URLHistory history={urlHistory} onClearHistory={handleClearHistory} />}
    </div>
  );
};

export default Shortener;
