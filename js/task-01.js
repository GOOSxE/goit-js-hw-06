const categoryItemsUrl = document.querySelectorAll('#categories .item')

console.log(categoryItemsUrl)
console.log(`Number of categories: ${categoryItemsUrl.length}`)

// *

const itemsUrl = document.querySelectorAll('.item')

itemsUrl.forEach( item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.querySelectorAll("li").length}`)
})

