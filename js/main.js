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

// popup detail project start
const cardInfos = [
  {
    title: 'Multi - Post stories',
    img: 'template5Images/Snapshoot-PopupMobile.svg',
    imgDesktop: 'template5Images/Snapshoot-Modal-Desktop.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    lang1: 'html',
    lang2: 'Ruby on rails',
    lang3: 'css',
  },
  {
    title: 'My Portfolio Page',
    img: 'template5Images/card1-bg.jpg',
    imgDesktop: 'template5Images/card1-bg.jpg',
    para: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    lang1: 'html',
    lang2: 'React',
    lang3: 'scss',
  },
  {
    title: 'Navigation',
    img: 'template5Images/navigation-card3.jpg',
    imgDesktop: 'template5Images/navigation-card3.jpg',
    para: 'Here is the future,from now on you can navigate all day and for free. Contact us for more informations.',
    lang1: 'html',
    lang2: 'Javascript',
    lang3: 'css',
  },
  {
    title: 'About me',
    img: 'template5Images/aboutme.jpg',
    imgDesktop: 'template5Images/aboutme.jpg',
    para: 'Hello I’m a software developer! I can help you build your dream project .If you would like that, don’t hestiate to contact me.',
    lang1: 'html',
    lang2: 'python',
    lang3: 'c++',
  },
];
const button = document.querySelectorAll('.btn2');
const main = document.querySelector('.main');
const footer = document.getElementById('footer');
// cancelIcon Object
const cancelIconInfos = {
  src: 'template5Images/Icon-Cancel.svg',
  alt: 'cancelIcon',
};
const card1 = cardInfos[0];
// should be used later
// const card2 = cardInfos[1];
// const card3 = cardInfos[2];
// const card4 = cardInfos[3];
const Modalsection = document.createElement('section');
Modalsection.classList.add('dis-none');
Modalsection.innerHTML = `
<div class="snapchoot-modal"><img src=${card1.img} alt="snapchoot-modal"></div>
<div class="snapchoot-modal-desktop"><img src=${card1.imgDesktop} class="w-100 desktopPopupImg" alt="snapchoot-modal"></div>
<p class="modal-para-mobile">${card1.para}</p>
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
     <li class="ul-lang">${card1.lang1}</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
     <li class="ul-lang">${card1.lang2}</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
     <li class="ul-lang">${card1.lang3}</li>
     <img src="template5Images/devider-langUl.png" class="devider-langUl" alt="devider">
 </div>
 <div class="modal-buttons">
 <button class="seeLive">See Live <img src="template5Images/Icon.png" alt="seelive"></button>
 <button class="seeSource">See Source <img src="template5Images/Icon-GitHub.png" alt="seelive"></button>
</div>
<div id="overlay"></div>`;
const modalHeader = document.createElement('div');
modalHeader.innerHTML = `<h6 class="mps">${card1.title}</h6>`;
// start modalsection2

const cancelIcon = document.createElement('img');
cancelIcon.src = cancelIconInfos.src;
cancelIcon.alt = cancelIconInfos.alt;
const Modalopen = () => {
  header.classList.add('dis-none');
  main.classList.add('dis-none');
  footer.classList.add('dis-none');
  document.body.append(Modalsection);
  Modalsection.insertBefore(modalHeader, Modalsection.firstChild);
  modalHeader.classList.add('modal-header');
  Modalsection.classList.remove('dis-none');
  Modalsection.classList.add('modal');
  modalHeader.appendChild(cancelIcon);
  cancelIcon.classList.add('cancelIcon');
};
const Modalclose = () => {
  header.classList.remove('dis-none');
  main.classList.remove('dis-none');
  footer.classList.remove('dis-none');
  Modalsection.classList.add('dis-none');
};
button.forEach((btn) => {
  btn.addEventListener('click', Modalopen);
});
cancelIcon.addEventListener('click', Modalclose);
const formEmail = document.getElementById('email');
const lowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

formEmail.addEventListener('keyup', () => {
  if (formEmail.validity.typeMismatch) {
    formEmail.setCustomValidity('Please Enter an email!');
  } else {
    formEmail.setCustomValidity('');
  }

  if (!lowerCase(formEmail.value)) {
    formEmail.setCustomValidity('Use lower case only please!');
  }
});

formEmail.addEventListener('keyup', () => {
  if (formEmail.validity.valid) {
    formEmail.style.border = '2px solid green';
    formEmail.style.borderRadius = '5px';
  } else {
    formEmail.style.border = '3px solid red';
    formEmail.style.borderRadius = '7px';
  }
});
