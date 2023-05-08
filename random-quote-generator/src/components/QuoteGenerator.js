import { useState } from 'react';
import getRandomQuote from '../data/quotes';
import QuoteDisplay from './QuoteDisplay';
import { RiFileCopyLine, RiShareLine } from 'react-icons/ri';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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
    // Logic to copy the quote text to the clipboard
    // You can implement this functionality using libraries or native APIs
    // Here, we'll simply log a message to simulate the copy action
    console.log('Quote copied to clipboard!');
  };

  const shareOnSocialMedia = () => {
    // Logic to share the quote on social media
    // You can implement this functionality using social media sharing APIs
    // Here, we'll simply log a message to simulate the share action
    console.log('Quote shared on social media!');
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
            <RiShareLine /> Share
          </button>

          <Button className="generate-button" onClick={generateRandomQuote}>Generate Quote</Button>
        </div>

        
      </div>
    </div>
  );
};

export default QuoteGenerator;
