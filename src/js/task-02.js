const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');
// console.log(ingredientsList)
for (const ingredient of ingredients){
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsList.appendChild(li);
}