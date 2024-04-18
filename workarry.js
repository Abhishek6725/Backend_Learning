let fruits = ["apple", "banana", "orange", "grapes"];
//Accessing elements
// console.log(fruits[0]);
// console.log(fruits[3]);
//Adding elements to the end
fruits.push("kiwi");
console.log(fruits);
// Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits);
// //removing last elements
// let removedLast = fruits.pop(fruits[4]);
// //removing first elements
// let removedFirst = fruits.shift(fruits[2]);
// for (let i= 0 ; i < fruits.length ; i++) {
//     console.log(fruits[i]);
// }
let indexOfOrange = fruits.indexOf("Orange");
for (let i= 0 ; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

// Slicing an array
let citrus = fruits.slice(1, 3);
console.log(citrus);

//splicing an array (modifying original array)
let removed = fruits.splice(1,2,"pear", "melon");
//Concatenating arrays
let moreFruits = ["grapefruits", "pineapple"];
let allFruits = fruits.concat(moreFruits);