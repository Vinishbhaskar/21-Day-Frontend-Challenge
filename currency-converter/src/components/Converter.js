import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAPIKey from '../data/apiKey';
import Country_list from '../data/CountryList';


function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  const apiKey = getAPIKey();

  useEffect(() => {
    
    axios
      .get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then((response) => {
        setCurrencies(Object.keys(response.data.conversion_rates));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey]);

  const handleGetExchange = () => {
    setFetchingData(true);
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${amount}`
      )
      .then((response) => {
        setConversionRate(response.data.conversion_rate);
        setConversionResult(amount * response.data.conversion_rate);
        setFetchingData(false);
      })
      .catch((error) => {
        console.log(error);
        setFetchingData(false);
      });
  };

  const getFlagByKey = (key) => {
    return Country_list[key];
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>From:</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <img src={`https://flagsapi.com/${getFlagByKey(baseCurrency)}/flat/64.png`} alt='countryFlag' />
      </div>
      <div>
        <label>To:</label>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <img src={`https://flagsapi.com/${getFlagByKey(targetCurrency)}/flat/64.png`} alt='countryFlag' />
      </div>
      <button onClick={handleGetExchange} disabled={fetchingData}>
        Get Exchange
      </button>
      {fetchingData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            Conversion Rate: {baseCurrency}/{targetCurrency} ={' '}
            {conversionRate.toFixed(4)}
          </p>
          <p>
            Result: {amount} {baseCurrency} = {amount*conversionResult.toFixed(2)}{' '}
            {targetCurrency}
          </p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
