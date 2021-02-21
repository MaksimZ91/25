import "../scss/main.scss";
import {handelScroll} from './scrolly';
import {collaps} from './collaps';

function pageLoaded() {
  collaps();
  handelScroll();
 }
document.addEventListener("DOMContentLoaded", pageLoaded);
