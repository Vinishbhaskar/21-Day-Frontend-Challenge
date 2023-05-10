import React from 'react';

// ExchangeButton component takes in props: onClick, disabled
function ExchangeButton({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className='button'>
      Get Exchange Rate
    </button>
  );
}

export default ExchangeButton;
