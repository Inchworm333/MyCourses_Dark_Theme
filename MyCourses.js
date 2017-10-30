// ==UserScript==
// @name         MyCourses Delete 'How to find'
// @namespace    github.com/Inchworm333/MyCourses_Dark_Theme
// @version      0.1
// @description  Delete the 'how to find courses' element
// @author       Inchworm333
// @match        https://mycourses.rit.edu/d2l/home
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var elems = document.getElementsByClassName('d2l-widget');
var arr;

Array.from(elems).forEach(v => v.getAttribute('aria-labelledby').startsWith('d2l_1_0_') ? arr = v : v);

arr.remove();
})();
