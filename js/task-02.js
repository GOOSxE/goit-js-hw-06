const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// *

const listUrl = document.querySelector('#ingredients')

const newIngredients = ingredients.map(ingredient => {
  const newLiUrl = document.createElement("li");
  newLiUrl.textContent = `${ingredient}`;
  newLiUrl.classList = 'item'

  return newLiUrl
});

listUrl.append(...newIngredients)
// *




