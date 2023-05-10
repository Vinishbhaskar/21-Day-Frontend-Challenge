import React from 'react';

// ConversionResult component takes in props: baseCurrency, targetCurrency, conversionRate, conversionResult, and amount
function ConversionResult({ baseCurrency, targetCurrency, conversionRate, conversionResult, amount }) {
  return (
    <div className='exchange-rate'>
      <p>
        Conversion Rate ({baseCurrency}/{targetCurrency}):{' '}
        {conversionRate.toFixed(4)}
      </p>
    </div>
  );
}

export default ConversionResult;
