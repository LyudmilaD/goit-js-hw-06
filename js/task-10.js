// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const controlsContainer = document.querySelector('#controls');
const inputBtn = controlsContainer.firstElementChild;
const boxesContainer = document.querySelector('#boxes');

let sizeBoxes = 30;

createBtn.addEventListener('click', createBoxes);
const shapeEl = document.createElement('div');

function createBoxes() {
  const amountBoxes = inputBtn.value;

  for (let i = 0; i < amountBoxes; i++) {
    sizeBoxes += 10;
    const shapeEl = document.createElement('div');
    shapeEl.style.backgroundColor = getRandomHexColor();
    shapeEl.style.width = `${sizeBoxes}px`;
    shapeEl.style.height = `${sizeBoxes}px`;
    boxesContainer.appendChild(shapeEl);
    inputBtn.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.remove();
  return;
}

