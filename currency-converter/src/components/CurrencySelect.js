import React from 'react';
import CountryFlag from './CountryFlag';

function CurrencySelect({ label, currency, setCurrency, currencies }) {
  return (
    <div>
      <label>{label}</label>
      <div className='select-box'>
      <CountryFlag currency={currency} />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}

export default CurrencySelect
