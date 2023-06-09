import { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';
import getAPIKey from '../data/apiKey';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import ExchangeButton from './ExchangeButton';
import ConversionResult from './ConversionResult';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
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

  const handleCurrencySwap = () => {
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);

    // Recalculate the conversion result after swapping currencies
    setConversionResult(conversionResult / conversionRate);
    setConversionRate(1 / conversionRate);
  };
  const ExchangeResult = amount * conversionResult.toFixed(2);

  return (
    <div className="card">
      <h2>Currency Converter</h2>
      <div className="form">
        <AmountInput amount={amount} setAmount={setAmount} className="input" />
        <div className="drop-list">
          <CurrencySelect
            label="From:"
            currency={baseCurrency}
            setCurrency={setBaseCurrency}
            currencies={currencies}
          />
          <FaExchangeAlt className="icon" onClick={handleCurrencySwap} />
          <CurrencySelect
            label="To:"
            currency={targetCurrency}
            setCurrency={setTargetCurrency}
            currencies={currencies}
          />
        </div>
        {fetchingData ? (
          <p>Loading...</p>
        ) : (
          <ConversionResult
            baseCurrency={baseCurrency}
            targetCurrency={targetCurrency}
            conversionRate={conversionRate}
            conversionResult={conversionResult}
          />
        )}
        <div className="exchange-result">
        {ExchangeResult === 0  ? <p>{amount} {baseCurrency} = ____</p>:
          <p>
            {amount} {baseCurrency} = {ExchangeResult}{' '}
            {targetCurrency}
          </p>
        }
        </div>
        <ExchangeButton
          className="button"
          onClick={handleGetExchange}
          disabled={fetchingData}
        />
      </div>
    </div>
  );
}

export default CurrencyConverter;
