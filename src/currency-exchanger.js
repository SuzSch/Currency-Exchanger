import './css/styles.css';
export default CurrencyConverter;

class CurrencyConverter {
  static async convert(usdAmount, targetCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/process.env.API_KEY/latest/USD`);
      const data = await response.json();

      if (data.result === 'error') {
        throw new Error(data['error-type']);
      }

      const exchangeRate = data.conversion_rates[targetCurrency];
      if (!exchangeRate) {
        throw new Error('Invalid target currency');
      }

      const convertedAmount = usdAmount * exchangeRate;
      return convertedAmount;
    } catch (error) {
      throw new Error('Failed to fetch exchange rates');
    }
  }
}



