let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
let divElement = document.querySelector('.main');
let elemHeight = divElement.clientHeight;
let navlinkA = document.getElementsByClassName('nav-link');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let navWys = (wysokosc / value);
  heroimg.style.top = 0 - value * 0.2 + 'px';
  heroimgcloud.style.top = 0 - value * 0.1 + 'px';

  main.style.top = wysokosc - (elemHeight / wysokosc) * value + 'px';
  // breakespace.style.height = wysokosc - elemHeight + 'px';
  console.log(navWys);
  
  if (navWys < 3) {
    navbar.style.background = 'rgba(255,255,255,0.9)';
    navbar.classList.add("shadow");
    navlinkA[0].style.color = 'red';
    
    console.log('ciemny nav');
  } else {
    navbar.style.background = 'rgba(255,255,255,0.3)';
    navbar.classList.remove("shadow");
    navlinkA[0].style.color = 'white';
    console.log('biały nav');
    
  }
});
