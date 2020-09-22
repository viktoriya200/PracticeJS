// Arrays
const fruits = ['apple', 'orange', 'banana'];
fruits.push('melon');
console.log(fruits);

fruits.unshift('tangarine');
console.log(fruits);

fruits.reverse();
console.log(fruits);

const index = fruits.indexOf('apple');
console.log(index);

const incl = fruits.includes('apple');
console.log(incl);

fruits.splice(0, 2, 'strawberry', 'watermelon');
console.log(fruits);
console.log(fruits.slice(1, 4));

fruits.forEach(function (item, i) {
    console.log(`${item} is on index ${i}`);
})

// Arrays Methods-------------------------------------
// Split, Join, Reverse
const names = 'Nadya, Kate, Oleg, Alexey';
console.log(names.split(', ').reverse().join(', '));

// Map
const upp = fruits.map(function (item) {
    return item.toLocaleUpperCase();
});
console.log(upp);

// Filter
const numbers = [39, 3, 12, 57, 8, 65];
// const someNumbers = numbers.filter(function (item) {
//     return item > 20;
// })
const someNumbers = numbers.filter(item => item > 20);
console.log(someNumbers);

// Reduce
// const sumAl = numbers.reduce(function (sum, item) {
//     return sum + item;
// }, 6);
const sumAl = numbers.reduce((sum, item) => sum + item, 6);
console.log(sumAl);

//Flat
const array = ['a', 'b', ['c', 'd'], 'e', ['f', ['g', 'h']]];
console.log(array.flat(2));

//FlatMap
const framew = ['angular vue', 'react', 'redux node'];
// console.log(framew.map(tech => tech.split(" ")).flat()); // ["angular", "vue", "react", "redux", "node"]
console.log(framew.flatMap(tech => tech.split(" "))); // ["angular", "vue", "react", "redux", "node"]