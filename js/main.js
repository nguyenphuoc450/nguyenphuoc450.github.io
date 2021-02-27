var slideShow = document.querySelector('.slide-show__container');
var slideShowItems = document.querySelectorAll('.slide-show__item');

//Btn
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');


var counter = 0;
var size = 100;

console.log(slideShowItems.length);

// Button Listeners
nextBtn.addEventListener('click', () => {
    if(counter >= slideShowItems.length -1) {
        counter = 0 ;
        slideShow.style.transform = 'translateX(0%)';
        prevBtn.style.backgroundColor = 'rgba(79, 157, 140, 0.9)';
    }
    else {
        slideShow.style.transition = "transform 0.4s ease-in-out";
        counter++;
        prevBtn.style.backgroundColor = '#1abc9c';
        slideShow.style.transform = 'translateX(' +(-size  * counter) + '%)';
        console.log(counter);
    }
    
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) {
        counter = 0 ;
        slideShow.style.transform = 'translateX(0)';
        prevBtn.style.backgroundColor = 'rgba(79, 157, 140, 0.9)';
    }
    else {
        if( counter === 1 ) {
            prevBtn.style.backgroundColor = 'rgba(79, 157, 140, 0.9)';
        }
        
        slideShow.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slideShow.style.transform = 'translateX(' +(-size  * counter) + '%)';
        console.log(counter);
    }
    
});


// Menu responsive mobile
var iconBar = document.querySelector('.top-nav__bar-icon');
var iconClose = document.querySelector('.menu-mobile__icon-close');
var menuMobile = document.querySelector('.top-nav__menu-mobile');
var mobileOverlay = document.querySelector('.top-nav__menu-mobile-overlay');

iconBar.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(0)';
    mobileOverlay.style.display = 'block';
});

iconClose.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(-100%)';
    mobileOverlay.style.display = 'none';
});

mobileOverlay.addEventListener('click' , () => {
    menuMobile.style.transform = 'translateX(-100%)';
    mobileOverlay.style.display = 'none';
});


// onscroll fixed menu 
window.onscroll = function(){fixedTopNav()};

var topNav = document.querySelector('.top-nav');
var sticky = topNav.offsetTop;

// console.log(sticky);
function fixedTopNav() {
    if(window.pageYOffset > sticky){
        topNav.classList.add('top-nav--on-scroll');
        topNav.style.height = '50px';
    }
    else {
        topNav.classList.remove('top-nav--on-scroll');
        topNav.style.height = '90px';
    }
};