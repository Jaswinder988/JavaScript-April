//
// 1. Create an array of 5 fruits and print the whole array

// 2. Create an array of 3 numbers and print the  first element

let frist3Num = [12, 34, 54, 35, 35, 54, 65]

print3FristNum = frist3Num.slice(0, 3)
console.log(print3FristNum);



// 3. Create an array of colors and print the last element




//4.  Find the length of this array //

let arr = [3, 4, 6, 7, 8, 4, 9, 10]

console.log(arr.length);

// 5. Change "Apple" to "Mango " .

let frNameChange = ["Apple", "Banana", "Orange"]

frNameChange.splice(0,1,"Mango")
console.log(frNameChange);

// 6. Add "BMW" at the end .

let carNameAdd = ["Thar", "Audi", "Range Rover"]

carNameAdd.push("BMW")
console.log(carNameAdd);

// 7. Add "Start" at beginning:

const point = ["Middle", "End"]

point.unshift("Start")
console.log(point);


// 8. Remove last item:

const nameRem = ["Pen", "Book", "Bag"]

nameRem.pop()
console.log(nameRem);

// 9. Remove the First Element

const fristEleRem = ["Red", "Blue", "Green"]

fristEleRem.shift()
console.log(fristEleRem);


// 10. Check if "Laptop" exists:

let checkName = ["Phone", "Laptop", "Tablet"]

console.log(checkName.includes("Laptop"));

// 11. Loop through array and print all values:

let printVal = [10, 20, 30, 40, 50]

for (val of printVal) {
    console.log(val);
    
}

// 12. Print only even numbers:

const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for(numE of evenNum){
    if (numE % 2 === 0) {
        console.log(numE);
        
    }
}

// 13. Print only odd numbers:

const OddNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (numO of OddNum) {
    if (numO % 2 === 1) {
        console.log(numO);

    }
}

// 14. Find sum of all numbers:

const sumArr = [5, 10, 15, 20]

 resSum = sumArr.reduce((acc, val) => acc + val, 0)
console.log(resSum);


// 15. Find largest number:

const numArr = [12, 43, 68, 23, 88, 32]

largNum = numArr[0]

for (laNum of numArr) {
    if (laNum > largNum) {
        largNum = laNum
        
    }
}
console.log("Largest Num : " , largNum);

// 16. Find smallest number:

const smallNum = [12, 43, 68, 23, 88, 32]

smallsValNum = numArr[0]

for (laNum of smallNum) {
    if (laNum < smallsValNum) {
        smallsValNum = laNum

    }
}
console.log("Small Num : ", smallsValNum);


// 17. Convert To UpperCase

let instaId = ["jass", "aman", "rahul"]

uppCase = instaId.map(idInsta => idInsta.toUpperCase())
console.log(uppCase);


// 18. Count To String Lenght

let arrCount = ["a", "b", "c", "d"]

Countlen = arrCount.reduce((acc, val) => acc + val.length ,0)
console.log(Countlen);


//  19. Remove Duplicate Values

const remDuplicate = [1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 9, 3, 3, 2]

dupSort = [...new Set(remDuplicate)]
console.log(dupSort);


// 20. Find The Second Largest Number

const seclarNum = [10, 20, 40, 60, 20, 80, 75]

let sortedA = seclarNum.sort((a, b) => b - a)

let secondSortNum = sortedA[1]
console.log(secondSortNum);

// 21.  Merge two arrays:
const a = [1, 2, 3]
const b = [4, 5, 6]

mergArr = a.concat(b)
console.log(mergArr);

// 22. Split names by first letter:

const nameSplit = ["Jass", "Aman", "Rohit", "Arjun", "Simran"];

splitVal = nameSplit.map(item => item[0])
console.log(splitVal);


// 23. Sort numbers ascending:

let numAsc = [9, 4, 3, 7, 6, 1, 2, 5, 8]

numAsc.sort()
console.log(numAsc);


// 24. Sort descending:

let numDesc = [9, 4, 3, 7, 6, 1, 2, 5, 8]

numDesc.sort((a, b) => b - a)
console.log(numDesc);
