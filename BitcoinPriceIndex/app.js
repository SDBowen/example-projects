const updateButton = document.getElementById('updateButton');
const price = document.getElementById('price');

// Cointbase API call
function getUpdatedPrice() {
  const XHR = new XMLHttpRequest();
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();

  XHR.onreadystatechange = () => {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const data = JSON.parse(XHR.responseText);

      price.innerHTML = `USD$ ${data.bpi.USD.rate_float}`;
    }
  };
}

// Add event listener
updateButton.addEventListener('click', getUpdatedPrice);
