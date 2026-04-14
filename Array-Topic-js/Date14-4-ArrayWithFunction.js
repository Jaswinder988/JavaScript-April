// 🔰 TASK 1: Function – Sum of Array
 
// 1. Sum Of Array Use Function

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1,3,5,7,8]));


// 2: Function – Find Max Number

function findMax(arr) {
    return Math.max(...arr)
}

console.log(findMax([10, 5, 20, 89, 56]));


// 3. Function Reverse Array  

function reverseArray(arr) {
    return arr.reverse();

}

console.log(reverseArray([1, 3, 5, 6, 7]));


// Function Count Even Numbers

function countEven(arr) {
    return arr.filter(n => n % 2 === 0).length;
}

console.log(countEven([2,54,33,6,7,9,31,656,44,88]));


// Function Remove Duplicates

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates([1,32,43,32,22,44,32,54,65,1,1,1]));



// Function - Square Number

function squreArray(arr) {
    return arr.map(n=> n*n)
}

console.log(squreArray([2,4,5,7,8]));


// Find First Greater Than 10

function findGreater(arr) {
    return arr.find(f => f > 10)
}

console.log(findGreater([104,,5,3,5,10,22,10.9 ,3]));


// Function Sort Array

function sortArray(arr) {
    return arr.sort((a, b) => a - b)
    
}

console.log(sortArray([5,6,2,9,8]));


// Function Flatten  Array

function falttenArray(arr) {
    return arr.flat();
}
console.log(falttenArray([1,[2,3],4]));
