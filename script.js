let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
let divElement = document.querySelector(".main");
let elemHeight = divElement.clientHeight;
window.addEventListener('scroll', function () {
  let value = window.scrollY;

  heroimg.style.top = 0 - value *0.2+ 'px';
  heroimgcloud.style.top = 0 - value * 0.1 + 'px';
  
  main.style.top =  wysokosc - ((elemHeight/wysokosc) * value)  + 'px';
// breakespace.style.height = wysokosc - elemHeight + 'px';
console.log (elemHeight);
});