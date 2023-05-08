import React from 'react';

const QuoteDisplay = ({ quote }) => {
  const { text, author } = quote;

  return (
    <div className="quote">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default QuoteDisplay;
