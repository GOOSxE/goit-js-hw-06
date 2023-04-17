const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// *

const newArray = [];

ingredients.forEach(ingredient => {
  const newLiUrl = document.createElement("li");
  newLiUrl.textContent = `${ingredient}`;
  newLiUrl.classList = 'item'
  newArray.push(newLiUrl);
});
// console.log(newArray)
// *

const listUrl = document.querySelector('#ingredients')

for (const item of newArray) {
  listUrl.append(item)
}
