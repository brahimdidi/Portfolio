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

// create the cancel button
const cancelbtn = document.createElement('img');
cancelbtn.src = 'template5Images/Icon-Cancel.svg';
// start open function
const open = () => {
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
  setTimeout(() => { header.style.position = 'fixed'; }, 1100);
};
const cancel = () => {
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
  header.style.position = 'unset';
};
const unfixHeader = () => {
  header.style.position = 'unset';
};
menu.addEventListener('click', open);
cancelbtn.addEventListener('click', cancel);
ulLinks.addEventListener('click', () => { unfixHeader(); cancel(); });
ulLinks2.addEventListener('click', () => { unfixHeader(); cancel(); });
ulLinks3.addEventListener('click', () => { unfixHeader(); cancel(); });

//popup detail project start
const button = document.querySelectorAll('.btn2');
const Modal = document.getElementById('Modal');
const main = document.querySelector('.main');
const footer = document.getElementById('footer');
// cancelIcon Object
const cancelIconInfos = {
  src : "template5Images/Icon-Cancel.svg",
  alt : "cancelIcon"
}
const Modalsection = document.createElement('section');
Modalsection.classList.add('dis-none');
Modalsection.innerHTML = `
<div class="snapchoot-modal"><img src="template5Images/Snapshoot-PopupMobile.svg" alt="snapchoot-modal"></div>
<div class="snapchoot-modal-desktop"><img src="template5Images/Snapshoot-Modal-Desktop.png" alt="snapchoot-modal"></div>
<p class="modal-para-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry
. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum
 is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown 
 printer took a galley of type veris lapoa todoe.</p>
 <p class="modal-para-desktop">Lorem Ipsum is simply dummy text of the printing and typesetting industry
     . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
       the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scramble.</p>
 <div class="modal-ul">
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
     <li class="ul-lang">html</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
     <li class="ul-lang">Ruby On rails</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
     <li class="ul-lang">css</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
 </div>
 <div class="modal-buttons">
 <button class="seeLive">See Live <img src="template5Images/Icon.png" alt="seelive"></button>
 <button class="seeSource">See Source <img src="template5Images/Icon-GitHub.png" alt="seelive"></button>
</div>
<div id="overlay"></div>`
const modalHeader = document.createElement('div')
modalHeader.innerHTML=`<h6 class="mps">Multi - Post stories</h6>`
const cancelIcon = document.createElement('img');
cancelIcon.src = cancelIconInfos.src;
cancelIcon.alt = cancelIconInfos.alt;
const Modalopen = () => {
  header.classList.add('dis-none');
  main.classList.add('dis-none');
  footer.classList.add('dis-none');
  document.body.append(Modalsection);
  Modalsection.insertBefore(modalHeader, Modalsection.firstChild);
  modalHeader.classList.add('modal-header')
  Modalsection.classList.remove('dis-none');
  Modalsection.classList.add('modal');
  modalHeader.appendChild(cancelIcon);
  cancelIcon.classList.add('cancelIcon');
}
const Modalclose = () => {
  header.classList.remove('dis-none');
  main.classList.remove('dis-none');
  footer.classList.remove('dis-none');
  Modalsection.classList.add('dis-none');
}
button.forEach(btn => {
 btn.addEventListener('click',Modalopen);
});
cancelIcon.addEventListener('click',Modalclose);
