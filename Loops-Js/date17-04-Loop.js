// JavaScript Loops — for, forEach, for...of, for...in

// 🔷 1. for Loop
// Traditional loop jithe 3 parts hunde : start , condition , Update

// 🔶 Solved Task

for (let i = 0; i <= 5; i++){
    console.log(i);
    
}

// Practice Task For Loop (for)

// Task 1 Print 10 to 1

for (let x = 10; x >= 1; x--){
    console.log(x);
    
}

// Task 2 : Print even numbers 2 to 20.

for (let y = 1; y <= 20; y++){
    if (y % 2 === 0) {
        console.log(y);
        
    }
}

// Task 3: Sum of numbers 1 to 5.

let sum = 0

for (let s = 1; s <= 5; s++){
    sum += s;
    console.log(sum);
    
}

//  🔷 2. forEach() Loop 🔶 Solved Task
// forEach() array method hai jo har element te callback run karda.

const nums = [10, 20, 30]

nums.forEach(function (num){
    console.log(num);
    
})

// Practice Task Loops (forEach)

const fruits = ["apple", "banana", "mango"]

fruits.forEach(function (name) {
    console.log(name);
    
});

// Task 2: Print index + value.

const products = ["Shoes", "Watch", "Shirt", "T-Shirt", "Pant"]

products.forEach(function (key, value) {
    console.log(key , value);
    
})

// Task 3: Add all numbers

const addNum = [5, 10, 15]

let numTotal = 0;
addNum.forEach(function (value) {
    numTotal += value
    
})

console.log(numTotal);


// 🔷 3. for...of
// Iterable values nu one by one dinda.
//  For of ... values iterate karda

// for...of use: Arrays , Strings , Maps , Sets

// 🔶 Solved Task

const colors = ["red", "green", "blue"]

for (let color of colors) {
    console.log(color);
    
}

// Task 1: Print all values.

const nums1 = [1, 2, 3]

for (let number of nums1) {
    console.log(number);
    
}
 
//  Task 2: Print each letter.

const word = "Hello" 
 
for (let letter of word) {
    console.log(letter);
    
}

// Task 3 : Sum array values[5, 5, 5]

const sumArray = [5, 5, 5, 5]

let totalVal = 0;
for (let sum of sumArray) {
    totalVal += sum
    
}
console.log(totalVal);


// 🔷 4. for...in  🔶 Definition
//  Object di keys/property names iterate karda.
// for in ... keys / indexes iterate karda

// for...in use: Objects , Object keys

// 🔶 Solved Task
const user6 = {
    Name: "Jass",
    Age : 20 
}

for (let key in user6) {
    console.log(key, user6[key]);
    
}

// Task 1  Print keys only.

const car2 = {
    barnd: "BMW",
    year : 2025
}

for (let key in car2) {
    console.log(key);
    
}
// Task 2 : Print Only Values
const carName1 = {
    barnd: "BWM",
    year: 2026
}

for (let key in carName1) {
    console.log(carName1[key]);

}
// // Task 2 :  Print keys Or Values .

const carNames = {
    barnd: "Audi",
    year : 2026
}

for (let key in carNames) {
    console.log(key , carNames[key]);
    
}






