import './css/styles.css';


function getConversion(currencyCode) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, currencyCode);
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic
function printElements(apiResponse, currencyCode, dollarAmount) {
  const conversionRate = apiResponse.conversion_rates[currencyCode];
  const convertedAmount = dollarAmount * conversionRate;
  document.querySelector('#convertedDollarsDiv').innerText = `The converted amount in ${currencyCode} is ${convertedAmount}.`;
}

