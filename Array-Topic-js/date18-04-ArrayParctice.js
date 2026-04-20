//
// Find The Sum Of Array  🔹 Array Method Tasks

// Task 1: map()  .. Use map() to convert this array into uppercase:

let fruits = ["apple" , "banana" , "orange"]

let uppCase = fruits.map(upcase => upcase.toUpperCase())
console.log(uppCase);


// ask 2: filter() .. Use filter() to get numbers greater than 10:

let num = [5, 10, 12, 8, 20, 3]

let greaterNum = num.filter(num => num > 10)
console.log(greaterNum);


//  Task 3: reduce() .. Use reduce() to find total sum:

let num1 = [10, 20, 30, 40]

let totalNum = num1.reduce((acc, num) => acc + num, 0)
console.log(totalNum);


// Task 4: find() .. Use find() to get first even number:

let evenNum = [4, 7, 9, 12, 14]

let getEvenNum = evenNum.find(evenN => evenN % 2 === 1)
console.log(getEvenNum);


// Task 5: includes() .. Check if "php" exists:

let lang = ["html", "css", "js", "php"] 

let checkLang = lang.includes("php")
console.log(checkLang);

//  Task 9.  reverse () Num

// let nameRe = ["red", "green", "blue"]

// let revNum =nameRe.reverse("")

// Task 10. sort num

let numSort = [40, 10, 5, 25]

numSort.sort((a, b) => a - b)
console.log(numSort);


// some check

const nums = [2, 34, 6, 8, 7, 12, 9]
 
const result = nums.some(num)