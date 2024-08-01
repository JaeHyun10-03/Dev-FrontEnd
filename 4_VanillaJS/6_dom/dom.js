// let div = document.querySelector('div');
// function changeContent() {
//   div.outerHTML = '<h1>DOM API</h1>';
// }

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', (event) => {
//   result.innerHTML += '<div>click</div>';
// });
// div.addEventListener('mousedown', (event) => {
//   result.innerHTML += '<div>mousedown</div>';
// });
// div.addEventListener('mouseup', (event) => {
//   result.innerHTML += '<div>mouseup</div>';
// });
// clearbtn.addEventListener('click', (event) => {
//   result.innerHTML = '';
// });

// const button = document.querySelector('button');

// const handleClick = () => console.log('button Click');

// button.onclick = handleClick;

// button.removeEventListener('click', handleClick);

// button.onclick = null;

// button.addEventListener('click', function add() {
//   console.log('click!');
//   button.removeEventListener('click', add);
// });

// const buttons = document.querySelectorAll('.check');

// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     button.classList.toggle('active');
//   });
// });

// $checkbox.addEventListener('click', (event) => {
//   const parentNode = event.target.parentNode;
//   console.log(parentNode);
//   parentNode = `<del>${parentNode}</del>`;
// });

// const box = document.querySelector('.box');
// const initialMousePos = { x: 0, y: 0 };
// const offset = { x: 0, y: 0 };

// const move = (e) => {};

// document.addEventListener('click', (e) => {
//   const newX = e.clientX;
//   const newY = e.clientY;
//   // initialMousePos.x = e.clientX - offset.x;
//   // initialMousePos.y = e.clientY - offset.y;
//   // offset.x = e.clientX - initialMousePos.x;
//   // offset.y = e.clientY - initialMousePos.y;
//   offset.x = newX;
//   offset.y = newY;
//   box.style.transform = `translate3d(${offset.x}px, ${offset.y}px 0)`;
// });

// document.addEventListener('mouseup', () => {
//   document.removeEventListener('mousemove', move);
// });
