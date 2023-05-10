import React from 'react';
import CountryList from '../data/CountryList';

// CountryFlag component takes in props: currency
function CountryFlag({ currency }) {
  // Get the country code based on the currency from the CountryList data
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
