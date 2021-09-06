// Selecting Items
const menu = document.querySelector('.nav-btn');
const logo = document.querySelector('.headertitle');
const header = document.querySelector('.header');
const navUl = document.querySelector('.dsk-btn');
const msgIcon = document.getElementById('message-icon');
const ulLinks = document.querySelector('#ulLinks');
const ulLinks2 = document.querySelector('#ulLinks2');
const ulLinks3 = document.querySelector('#ulLinks3');
// Create the arrows
const arrowRight = document.createElement('img');
const arrowRight2 = document.createElement('img');
const arrowRight3 = document.createElement('img');
arrowRight.src = 'template5Images/arrowRight.svg';
arrowRight2.src = 'template5Images/arrowRight.svg';
arrowRight3.src = 'template5Images/arrowRight.svg';

// crate the cancel button
const cancelbtn = document.createElement('img');
cancelbtn.src = 'template5Images/Icon - Cancel.svg';

const open = function open() {
  header.classList.add('header-active');
  logo.classList.add('dis-none');
  menu.classList.add('dis-none');
  navUl.classList.add('navUl');
  msgIcon.classList.add('dis-none');
  arrowRight.classList.add('arrowRight');
  arrowRight2.classList.add('arrowRight');
  arrowRight3.classList.add('arrowRight');
  ulLinks.appendChild(arrowRight);
  ulLinks2.appendChild(arrowRight2);
  ulLinks3.appendChild(arrowRight3);
  ulLinks.classList.add('ulLinks');
  ulLinks2.classList.add('ulLinks');
  ulLinks3.classList.add('ulLinks');
  cancelbtn.classList.add('cancel-btn');
  header.appendChild(cancelbtn);
  setTimeout(function delay (){ header.style.position = "fixed"; }, 1100);
};
const cancel = function open() {
  header.classList.remove('header-active');
  logo.classList.remove('dis-none');
  menu.classList.remove('dis-none');
  navUl.classList.remove('navUl');
  msgIcon.classList.remove('dis-none');
  ulLinks.removeChild(arrowRight);
  ulLinks2.removeChild(arrowRight2);
  ulLinks3.removeChild(arrowRight3);
  ulLinks.classList.remove('ulLinks');
  ulLinks2.classList.remove('ulLinks');
  ulLinks3.classList.remove('ulLinks');
  cancelbtn.classList.remove('cancel-btn');
  header.removeChild(cancelbtn);
  header.style.position ="unset";
};
const unfixHeader = function unfixHeader () {
  header.style.position ="unset";
}
menu.addEventListener('click', open);
cancelbtn.addEventListener('click', cancel);
ulLinks.addEventListener('click',() => {unfixHeader();cancel();});  
ulLinks2.addEventListener('click',() => {unfixHeader();cancel();});  
ulLinks3.addEventListener('click',() => {unfixHeader();cancel();});  
