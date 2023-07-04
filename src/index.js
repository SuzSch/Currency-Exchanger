import './css/styles.css';
import CurrencyConverter from './currency-exchanger';

function convertCurrency() {
  const dollarAmountInput = document.getElementById('dollar-amount');
  const currencyCodeInput = document.getElementById('currency-code');
  const convertedDollarsDiv = document.getElementById('convertedDollarsDiv');

  try {
    const usdAmount = dollarAmountInput.value;
    if (isNaN(usdAmount)) {
      throw new Error('Invalid dollar amount');
    }




  }}