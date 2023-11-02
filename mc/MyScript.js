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
    displayCardInfo();
  }
});

function displayCardInfo() {

  
  logTable.innerHTML = "";
  for (const card of cardsArr) {
    var translatedName = cardTranslations[card.id];
    var date = card.date;
    console.log(`Translated Name: ${translatedName}, Date: ${date}`);
    const newRow = logTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = translatedName;
    cell2.innerHTML = date;
  }
  
}

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
  '2c': '2 спатия',
  '2d': '2 каро',
  '2h': '2 купа',
  '2s': '2 пика',
  '3c': '3 спатия',
  '3d': '3 каро',
  '3h': '3 купа',
  '3s': '3 пика',
  '4c': '4 спатия',
  '4d': '4 каро',
  '4h': '4 купа',
  '4s': '4 пика',
  '5c': '5 спатия',
  '5d': '5 каро',
  '5h': '5 купа',
  '5s': '5 пика',
  '6c': '6 спатия',
  '6d': '6 каро',
  '6h': '6 купа',
  '6s': '6 пика',
  '7c': '7 спатия',
  '7d': '7 каро',
  '7h': '7 купа',
  '7s': '7 пика',
  '8c': '8 спатия',
  '8d': '8 каро',
  '8h': '8 купа',
  '8s': '8 пика',
  '9c': '9 спатия',
  '9d': '9 каро',
  '9h': '9 купа',
  '9s': '9 пика',
  '10c': '10 спатия',
  '10d': '10 каро',
  '10h': '10 купа',
  '10s': '10 пика',
  'jc': 'Вале спатия',
  'jd': 'Вале каро',
  'jh': 'Вале купа',
  'js': 'Вале пика',
  'qc': 'Дама спатия',
  'qd': 'Дама каро',
  'qh': 'Дама купа',
  'qs': 'Дама пика',
  'kc': 'Поп спатия',
  'kd': 'Поп каро',
  'kh': 'Поп купа',
  'ks': 'Поп пика',
  'ac': 'Асо спатия',
  'ad': 'Асо каро',
  'ah': 'Асо купа',
  'as': 'Асо пика'
};