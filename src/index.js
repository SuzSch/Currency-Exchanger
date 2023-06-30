import './css/styles.css';


function getConversion(currencyCode) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/process.env.API_KEY/latest/US
]`;

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
function printElements(apiResponse, currencyCode) {
  document.querySelector('#showResponse').innerText = `The exchage rate in ${currencyCode} is ${apiResponse.conversion_rates}.`;
}

