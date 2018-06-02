let btn = document.querySelector('#getDog');
let img = document.querySelector('#photo');

btn.addEventListener('click', function () {
  let XHR = new XMLHttpRequest();
  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random')
  XHR.send()

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText).message;

      img.src = data;
    }
  }
});





