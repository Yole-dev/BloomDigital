'use strict';

// default variables
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobileNavContainer');
const subMobileNav = document.querySelector('.mobileNav');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');


openNav.addEventListener('click', function(){
    navBar.style.display = 'none';
    mobileNav.style.display = 'flex';
    openNav.classList.toggle('displayNone');
    closeNav.classList.toggle('displayNone');
    subMobileNav.style.animationDirection = 'normal';
})

closeNav.addEventListener('click', function(){
    navBar.style.display = 'flex';
    mobileNav.style.display = 'none';
    closeNav.classList.toggle('displayNone');
    openNav.classList.toggle('displayNone');
    subMobileNav.style.animationDirection = 'reverse';
})

const mobileChevronDown = document.querySelector('.mobileChevronDown');
const mobileChevronUp = document.querySelector('.mobileChevronUp');
const mobileSubNav = document.querySelector('.mobileSubNav');

mobileChevronDown.addEventListener('click', function(){
    mobileChevronUp.classList.toggle('displayNone');
    mobileChevronDown.classList.toggle('displayNone');
    mobileSubNav.style.display = 'flex';
})

mobileChevronUp.addEventListener('click', function(){
    mobileChevronUp.classList.toggle('displayNone');
    mobileChevronDown.classList.toggle('displayNone');
    mobileSubNav.style.display = 'none';
})


const desktopChevronDown = document.querySelector('.desktopChevronDown');
const desktopChevronUp = document.querySelector('.desktopChevronUp');
const desktopSubNav = document.querySelector('.desktopSubNav');

desktopChevronDown.addEventListener('click', function(){
    desktopChevronUp.classList.toggle('displayNone');
    desktopChevronDown.classList.toggle('displayNone');
    desktopSubNav.style.display = 'flex';
})

desktopChevronUp.addEventListener('click', function(){
    desktopChevronUp.classList.toggle('displayNone');
    desktopChevronDown.classList.toggle('displayNone');
    desktopSubNav.style.display = 'none';
})



// script for page loader

const loader = document.querySelector('.pageLoader');

window.addEventListener('load', function(){
    loader.classList.add('pageLoaderHidden');
    loader.addEventListener('transitioned', function(){
        document.body.removeChild(loader);
    })
})

// script for page on scroll transitions

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})
const elements = document.querySelectorAll('.animate');
elements.forEach((el) => observer.observe(el));