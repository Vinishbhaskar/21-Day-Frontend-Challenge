import React from 'react';
import CountryList from '../data/CountryList';

function CountryFlag({ currency }) {
  const countryCode = CountryList[currency];

  return (
    <img
      src={`https://flagsapi.com/${countryCode}/flat/64.png`}
      alt="countryFlag"
      className="country-flag"
    />
  );
}

export default CountryFlag;
