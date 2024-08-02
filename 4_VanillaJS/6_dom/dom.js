// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {

//     div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>"
// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red';})

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => {elem.style.color = "red"});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = "blue"})

// // const boxEl = document.querySelector('.box');
// // boxEl.addEventListener('click', function() {
// //    console.log("Click!");
// //    boxEl.classList.toggle('active')     
// // })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index){
//     boxEl.classList.add(`order-${index + 1}`);

// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', (event)=>{
//     result.innerHTML+='<div>click</div>';
// });
// div.addEventListener('mousedown', (event)=>{
//     result.innerHTML+='<div>mousedown</div>';
// });
// div.addEventListener('mouseup', (event)=>{
//     result.innerHTML+='<div>mouseup</div>';
// });
// clearbtn.addEventListener('click', (event)=>{
//     result.innerHTML= "";
// })

// function sayHi(name){
//     console.log(`Hi ${name}`)
// }

// const button = document.querySelector('button');

// const handleClick = () => console.log('button click');

// button.onclick = handleClick;

// button.removeEventListener('click', handleClick);

// button.onclick = null;

// button.addEventListener('click', function add(){
//     console.log('click!')
//     button.removeEventListener('click', add);
// } );

// const msg = document.querySelector('.message');

// function showCoords(e){
//     msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`
// }
// document.onclick = showCoords;

// const fruits = document.getElementById('fruits');
// function activate({target}) {
//     if(!target.matches('#fruits > li')) return;
//     [...fruits.children].forEach(fruit => {
//         fruit.classList.toggle('active', fruit === target)
//     })
// }
// fruits.onclick = activate;

// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         button.classList.toggle('active');
//     })
// })
// const box = document.querySelector(".box");
// const initialMousePos = {x: 0, y: 0};
// const offset = {x: 0, y: 0};

// const move = e => {
//     offset.x = e.clientX - initialMousePos.x;
//     offset.y = e.clientY - initialMousePos.y;
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;

// };

// box.addEventListener('mousedown', e => {
//     initialMousePos.x = e.clientX - offset.x;
//     initialMousePos.y = e.clientY - offset.y;

//     document.addEventListener('mousemove', move);
// });

// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move);
// })


// const button = document.querySelector('button');
// button.onclick = function () {
//   console.log('이벤트 핸들러 프로퍼티 방식');
// }
// button.onclick = function () {
//   console.log('이벤트 핸들러 프로퍼티 방식2');
// }
// button.onclick = function () {
//   console.log('이벤트 핸들러 프로퍼티 방식3');
// }
// button.addEventListener('click', function(){
//   console.log('addEventListener1');
// })
// button.addEventListener('click', function(){
//   console.log('addEventListener2');
// })
// button.addEventListener('click', function(){
//   console.log('addEventListener3');
// })
