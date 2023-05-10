import React from 'react';

// AmountInput component takes in `amount` and `setAmount` as props
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
