let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
let logo = document.querySelector('.logo');
let navlinkA = document.getElementsByClassName('nav-link');


window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let navWys = (wysokosc / value);
 
  
  
  if (navWys < 3) {
    navbar.style.background = 'rgba(255,255,255,0.9)';
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
