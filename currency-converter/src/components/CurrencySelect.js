import React from 'react';
import CountryFlag from './CountryFlag';

// CurrencySelect component takes in props: label, currency, setCurrency, currencies
function CurrencySelect({ label, currency, setCurrency, currencies }) {
  return (
    <div>
      <label>{label}</label>
      <div className='select-box'>
        <CountryFlag currency={currency} /> {/* Render the CountryFlag component */}
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

export default CurrencySelect;
