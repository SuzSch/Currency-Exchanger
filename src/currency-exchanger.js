import './css/styles.css';
class CurrencyConverter {
  static async convert(usdAmount, rate) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const data = await response.json();


      if (data.result === 'error') {
        throw new Error(data['error-type']);
      }
      const exchangeRate = data.conversion_rates[rate];
      if (!exchangeRate) {
        throw new Error(`Invalid currency code:`);

      }
      const convertedAmount = usdAmount * exchangeRate;
      return convertedAmount;
    } catch (error) {
      throw new Error('Failed to get exchange rates');
    }
  }
}
export default CurrencyConverter;