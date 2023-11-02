const draggableElements = document.querySelectorAll('.draggable');
let visible = false;
let cardsArr = [];

let isDragging = false;
let currentElement = null;
let x = 0;
let y = 0;
let z = 1;
draggableElements.forEach((element) => {
  element.addEventListener('mousedown', startDrag);
});

document.addEventListener('keydown', function(event){
  if (event.key === 'f'){
    generateDivs();
    printData();
  }
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



const cardTranslations = {
  '2 спатия': '2c',
  '2 каро': '2d',
  '2 купа': '2h',
  '2 пика': '2s',
  '3 спатия': '3c',
  '3 каро': '3d',
  '3 купа': '3h',
  '3 пика': '3s',
  '4 спатия': '4c',
  '4 каро': '4d',
  '4 купа': '4h',
  '4 пика': '4s',
  '5 спатия': '5c',
  '5 каро': '5d',
  '5 купа': '5h',
  '5 пика': '5s',
  '6 спатия': '6c',
  '6 каро': '6d',
  '6 купа': '6h',
  '6 пика': '6s',
  '7 спатия': '7c',
  '7 каро': '7d',
  '7 купа': '7h',
  '7 пика': '7s',
  '8 спатия': '8c',
  '8 каро': '8d',
  '8 купа': '8h',
  '8 пика': '8s',
  '9 спатия': '9c',
  '9 каро': '9d',
  '9 купа': '9h',
  '9 пика': '9s',
  '10 спатия': '10c',
  '10 каро': '10d',
  '10 купа': '10h',
  '10 пика': '10s',
  'Вале спатия': 'jc',
  'Вале каро': 'jd',
  'Вале купа': 'jh',
  'Вале пика': 'js',
  'Дама спатия': 'qc',
  'Дама каро': 'qd',
  'Дама купа': 'qh',
  'Дама пика': 'qs',
  'Поп спатия': 'kc',
  'Поп каро': 'kd',
  'Поп купа': 'kh',
  'Поп пика': 'ks',
  'Асо спатия': 'ac',
  'Асо каро': 'ad',
  'Асо купа': 'ah',
  'Асо пика': 'as',
};