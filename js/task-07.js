// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и изменяет инлайн - стиль 
// span#text, обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>



const inputBtn = document.querySelector('input#font-size-control');
const textString = document.querySelector('span#text');

inputBtn.addEventListener('input', onInputBtnChange);
textString.style.fontSize = `${inputBtn.value}px`;
function onInputBtnChange(event) {
  textString.style.fontSize = `${inputBtn.value}px`;
}

