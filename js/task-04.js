// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const countClickEl = document.querySelector('#value');

decBtn.addEventListener('click', onDecBtnClick);
function onDecBtnClick() {
  counterValue -= 1;
  console.log((countClickEl.textContent = counterValue));
}

incBtn.addEventListener('click', onIncBtnClick);
function onIncBtnClick() {
  counterValue += 1;
  console.log((countClickEl.textContent = counterValue));
}
