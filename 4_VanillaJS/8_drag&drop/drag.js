// function func(event){
//   let text = event.target.value;

// }

// const item = document.querySelector('.item');
// item.addEventListener('dragstart', (e)=>{
//   console.log('드래그 시작!', e);
// });
// item.addEventListener('drag', (e) => {
//   console.log('드래그하면 나와라', e);
// })


// const container = document.querySelector('.container');
// const container2 = document.querySelector('.container2');
// container2.addEventListener('dragenter', e => {
//   console.log('박스 영역에 최초 진입!', e);
// })
// container2.addEventListener('dragleave', e => {
//   console.log('드래그가 떠났습니다', e);
// })
// container2.addEventListener('dragover', e => {
//   console.log('여기 있어!', e);
//   e.preventDefault();  //!!
// })
// container2.addEventListener('drop', e => {
//   console.log('1번 박스 영역에 드롭', e);
// })

// document.getElementById('appendChildBtn').onclick = function(){
//   const parent = document.getElementById('parent');
//   const newElement = document.createElement('div');
//   newElement.textContent = "New Child";
//   parent.appendChild(newElement);
// }
// document.getElementById('insertBeforeBtn').onclick = function(){
//   const parentEl = document.getElementById('parent');
//   const newEl = document.createElement('div');
//   newEl.textContent = "New Child ㅎㅎ";
//   const reference = document.getElementById('reference');
//   parentEl.insertBefore(newEl, reference);
// }

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable)=>{
  draggable.addEventListener("dragstart", ()=>{
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', ()=>{
    draggable.classList.remove('dragging');
  })
})

containers.forEach((container)=>{
  container.addEventListener('dragover', (e)=>{
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector('.dragging');
    if(afterElement  === undefined){
      container.appendChild(draggable);
    }else{
      container.insertBefore(draggable, afterElement);
    }
  })
})

function getDragAfterElement(container, x){
  const draggableElements = [
    ...container.querySelectorAll('.draggable:not(.dragging)')
  ];
  return draggableElements.reduce((child)=>{
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if(offset < 0 && offset > Close){
      return {offset : offset, element : child};
    }else{
      return closest;
    }
  }, {offset:Number.NEGATIVE_INFINITY})
}
