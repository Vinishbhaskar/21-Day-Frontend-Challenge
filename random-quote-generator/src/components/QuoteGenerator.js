import { useState } from 'react';
import getRandomQuote from '../data/quotes';
import QuoteDisplay from './QuoteDisplay';

import { RiFileCopyLine } from 'react-icons/ri';
import { FaQuoteLeft, FaQuoteRight,FaTwitter } from 'react-icons/fa';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  const generateRandomQuote = () => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
  };

  const Button = ({ children, onClick }) => (
    <button className="generate-button" onClick={onClick}>
      {children}
    </button>
  );

  const copyToClipboard = () => {

    const quoteText = `${quote.text} - ${quote.author}`;
    navigator.clipboard.writeText(quoteText)
    
  };

  const shareOnSocialMedia = () => {

    const textToShare = `"${quote.text}" - ${quote.author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
    window.open(twitterUrl, '_blank');
  
  };

  return (
    <div className="quote-generator">
      <div className="card">
      
        <h1 className="title">Random Quote Generator</h1>

        <div className="quote-wrapper">
            <FaQuoteLeft className="quote-icon-left" />
            <QuoteDisplay quote={quote} />
            <FaQuoteRight className="quote-icon-right" />
        </div>
        
        <div className="quote-actions">
          <button className="action-button" onClick={copyToClipboard}>
            <RiFileCopyLine /> Copy
          </button>

          <button className="action-button" onClick={shareOnSocialMedia}>
            <FaTwitter /> Share
          </button>
          
          <Button className="generate-button" onClick={generateRandomQuote}>Generate Quote</Button>
        </div> 
      </div>
    </div>
  );
};

export default QuoteGenerator;
