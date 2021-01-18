"use strict";

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mainNavList = document.querySelector('.main-nav__list');

mainNav.classList.remove('main-nav--nojs');


navToggle.addEventListener('click', function() {
  if (mainNavList.classList.contains('main-nav__list--closed')) {
    mainNavList.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
  } else {
    mainNavList.classList.add('main-nav__list--closed');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});
