let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
let divElement = document.querySelector('.main');
let elemHeight = divElement.clientHeight;

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let navWys = wysokosc / value;
  heroimg.style.top = 0 - value * 0.3 + 'px';
  heroimgcloud.style.top = 0 - value * 0.1 + 'px';
  quotes.style.filter = 'blur(' + 1 / (wysokosc / (50 * value)) + 'px)';
  main.style.top = wysokosc - (elemHeight / wysokosc) * value + 'px';
  // breakespace.style.height = wysokosc - elemHeight + 'px';
});
