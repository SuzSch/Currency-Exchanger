import './css/styles.css';
import CurrencyExcahnger from './currency-exchanger';

function exchangeCurrency(CurrencyCode) {
  CurrencyExcahnger.exchangeCurrency(CurrencyCode)
    .then(function (response) {
      if (response.main) {
        printElements(response, CurrencyCode);
      } else {
        printError(response);
      }
    });
}
console.log(exchangeCurrency(CurrencyCode))