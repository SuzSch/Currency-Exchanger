import './css/styles.css';
import CurrencyConverter from './currency-exchanger.js';

document.addEventListener('DOMContentLoaded', () => {
  const dollarAmountInput = document.getElementById('dollar-amount');
  const currencyCodeInput = document.getElementById('currency-code');
  const conversionButton = document.getElementById('convert-btn');
  const convertedDollarsDiv = document.getElementById('convertedDollarsDiv');

  conversionButton.addEventListener('click', async () => {
    try {
      const usdAmount = dollarAmountInput.value;
      const currencyCode = currencyCodeInput.value;

      if (isNaN(usdAmount) || usdAmount <= 0) {
        throw new Error('Please enter a valid dollar amount');
      }

      const convertedAmount = await CurrencyConverter.convert(usdAmount, currencyCode);
      convertedDollarsDiv.textContent = `$${usdAmount} US Dollars is equivalent to ${convertedAmount.toFixed(2)} ${currencyCode}`;
    } catch (error) {
      convertedDollarsDiv.textContent = 'Error: ' + error.message;
    }
  });

  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    conversionButton.click();
  });
});
