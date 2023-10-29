'use strict';

// default variables
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobileNavContainer');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');


openNav.addEventListener('click', function(){
    navBar.style.display = 'none';
    mobileNav.style.display = 'flex';
    openNav.classList.toggle('displayNone');
    closeNav.classList.toggle('displayNone');
})

closeNav.addEventListener('click', function(){
    navBar.style.display = 'flex';
    mobileNav.style.display = 'none';
    closeNav.classList.toggle('displayNone');
    openNav.classList.toggle('displayNone');
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


