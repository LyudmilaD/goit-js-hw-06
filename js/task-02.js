// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredientsEl = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map(ingredient => {
  const addIngredientEl = document.createElement('li');
  addIngredientEl.textContent = ingredient;
  addIngredientEl.classList.add('item');
  return addIngredientEl;
});

listIngredientsEl.append(...ingredientsEl);
console.log(listIngredientsEl);


