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

const chevronDown = document.querySelector('.chevronDown');
const chevronUp = document.querySelector('.chevronUp');
const subNav = document.querySelector('.subNav');

chevronDown.addEventListener('click', function(){
    chevronUp.classList.toggle('displayNone');
    chevronDown.classList.toggle('displayNone');
    subNav.style.display = 'flex';
})

chevronUp.addEventListener('click', function(){
    chevronUp.classList.toggle('displayNone');
    chevronDown.classList.toggle('displayNone');
    subNav.style.display = 'none';
})
