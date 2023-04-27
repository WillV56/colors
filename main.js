// basic remote fetch example

document.addEventListener('DOMContentLoaded', init);

function init() {
  fetch("https://www.colr.org/json/colors/random/7")
  .then(response => response.json()) 
  .then(data => {
    const myColors = [];
    data.colors.forEach(item => {
    myColors.push("#" + item.hex);
    });
    let block1 = document.querySelector('.dark');
    let block2 = document.querySelector('.mid');
    let block3 = document.querySelector('.light');

    block1.style.backgroundColor = myColors[3];
    block2.style.backgroundColor = myColors[6];
    block3.style.backgroundColor = myColors[2];
   
  }).catch(err => {
    console.error('oops', err.message);
  });
}