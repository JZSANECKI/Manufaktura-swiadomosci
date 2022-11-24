let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
let divElement = document.querySelector('.main');
let logo = document.querySelector('.logo');
let elemHeight = divElement.clientHeight;
let navlinkA = document.getElementsByClassName('nav-link');


window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let navWys = (wysokosc / value);
  heroimg.style.top = 0 - value * 0.3 + 'px';
  heroimgcloud.style.top = 0 - value * 0.1 + 'px';
quotes.style.filter = "blur(" + (1/(wysokosc / (50* value))) +"px)"
  main.style.top = wysokosc - (elemHeight / wysokosc) * value + 'px';
  // breakespace.style.height = wysokosc - elemHeight + 'px';
  
  
  if (navWys < 3) {
    navbar.style.background = 'rgba(255,255,255,0.9)';
    
    // navbar.classList.add("shadow");
    navlinkA[0].style.color = 'black';
    navlinkA[0].onmouseover = function(){navlinkA[0].style.color = 'gray'};
    navlinkA[0].onmouseout = function(){navlinkA[0].style.color = 'black'};
    navlinkA[1].style.color = 'black';
    
    navlinkA[1].onmouseover = function(){navlinkA[1].style.color = 'gray'};
    navlinkA[1].onmouseout = function(){navlinkA[1].style.color = 'black'};
    navlinkA[2].style.color = 'black';
    
    navlinkA[2].onmouseover = function(){navlinkA[2].style.color = 'gray'};
    navlinkA[2].onmouseout = function(){navlinkA[2].style.color = 'black'};
    navlinkA[3].style.color = 'black';
    
    navlinkA[3].onmouseover = function(){navlinkA[3].style.color = 'gray'};
    navlinkA[3].onmouseout = function(){navlinkA[3].style.color = 'black'};
    navlinkA[4].style.color = 'black';
    
    navlinkA[4].onmouseover = function(){navlinkA[4].style.color = 'gray'};
    navlinkA[4].onmouseout = function(){navlinkA[4].style.color = 'black'};
    
    logo.style.backgroundImage =  'url(http://serwer2223309.home.pl/paralax/img/logoMSczarne.svg)';
    console.log('ciemny nav');
  } else {
    navbar.style.background = 'rgba(255,255,255,0.2)';
    // navbar.classList.remove("shadow");
    
    navbarNavAltMarkup.style.backgroundColor = 'rbga(0.0.0.0.8)';
    navlinkA[0].style.color = 'white';
    navlinkA[0].onmouseover = function(){navlinkA[0].style.color = 'lightgray'};
    navlinkA[0].onmouseout = function(){navlinkA[0].style.color = 'white'};
    navlinkA[1].style.color = 'white';
    navlinkA[1].onmouseover = function(){navlinkA[1].style.color = 'lightgray'};
    navlinkA[1].onmouseout = function(){navlinkA[1].style.color = 'white'};
    navlinkA[2].style.color = 'white';
    navlinkA[2].onmouseover = function(){navlinkA[2].style.color = 'lightgray'};
    navlinkA[2].onmouseout = function(){navlinkA[2].style.color = 'white'};
    navlinkA[3].style.color = 'white';
    navlinkA[3].onmouseover = function(){navlinkA[3].style.color = 'lightgray'};
    navlinkA[3].onmouseout = function(){navlinkA[3].style.color = 'white'};
    navlinkA[4].style.color = 'white';
    navlinkA[4].onmouseover = function(){navlinkA[4].style.color = 'lightgray'};
    navlinkA[4].onmouseout = function(){navlinkA[4].style.color = 'white'};

    logo.style.backgroundImage =  'url(http://serwer2223309.home.pl/paralax/img/logoMSbiale.svg)';
    console.log('biały nav');
    
  }
});
