const draggableElements = document.querySelectorAll('.draggable');

let cardsArr = [];

let isDragging = false;
let currentElement = null;
let x = 0;
let y = 0;
let z = 1;
draggableElements.forEach((element) => {
  element.addEventListener('mousedown', startDrag);
});

function startDrag(e) {
  isDragging = true;
  currentElement = this;
  x = e.clientX - currentElement.getBoundingClientRect().left;
  y = e.clientY - currentElement.getBoundingClientRect().top;
  z++;
  currentElement.style.zIndex = z;
  currentElement.style.cursor = 'grabbing';
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const milliSeconds = String(e.timeStamp).split('.')[0].slice(-3).padStart(3, '0');
  const time = `${hours}:${minutes}:${milliSeconds}`;
  cardsArr.push({
    id:currentElement.id,
    date:time
  });

  e.preventDefault();
  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', endDrag);
}

function dragElement(e) {
  if (isDragging) {
    currentElement.style.left = e.clientX - x + 'px';
    currentElement.style.top = e.clientY - y + 'px';
  }
}

function endDrag() {
  isDragging = false;
  currentElement.style.cursor = 'grab';
  currentElement = null;
  document.removeEventListener('mousemove', dragElement);
  document.removeEventListener('mouseup', endDrag);
}