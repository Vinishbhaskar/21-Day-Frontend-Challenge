import React from 'react';

function AmountInput({ amount, setAmount }) {
  return (
    <div>
      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}

export default AmountInput;
