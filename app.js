let value = prompt('What flavors of froyo do you want?')

const flavors = value.replace(/ /g, '').split(",")

console.log(flavors)

let count = {}
// loops through flavors and count how many times each flavor appears
flavors.forEach((flavor) =>{
    count[flavor] = (count[flavor] || 0) + 1
})

console.log(count)





