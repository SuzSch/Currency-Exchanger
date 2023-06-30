export default class CurrencyExcahnger {
  static async exchangeCurrency(currencyCode) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/842945dd411e8c2a12f72133/latest/USD
      `);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.error - type}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}