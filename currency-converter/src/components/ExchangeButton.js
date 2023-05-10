import React from 'react';

function ExchangeButton({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className='button'>
      Get Exchange Rate
    </button>
  );
}

export default ExchangeButton;
