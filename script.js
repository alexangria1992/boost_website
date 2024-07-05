let resizeTimer;

const navTrigger = document.querySelector('#navTrigger');
// console.log(navTrigger);

// select nav
const nav = document.querySelector('#nav');
// console.log(nav);

const navCloseBtn = document.querySelector('#navCloseBtn');
// console.log(navCloseBtn);

// select header
const header = document.querySelector('#header');

//add a click event to the nav trigger
navTrigger.addEventListener('click', (e) => {
  //toggle the "is-open" class on the nav element to open and close the menu
  nav.classList.toggle('is-open');
});

//add a click event to the close icon

navCloseBtn.addEventListener('click', () => {
  nav.classList.remove('is-open');
});

//add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // get the current vertical position
  const scrollY = window.scrollY;
  //   console.log(scrollY);

  //add or remove the active class fromt he header based on the scroll position
  scrollY > 50
    ? header.classList.add('is-active')
    : header.classList.remove('is-active');
});

//stop animation
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
