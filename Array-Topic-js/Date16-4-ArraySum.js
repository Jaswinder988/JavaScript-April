// 🔰 LEVEL 1 (Basic – Warm Up)

// 🔹 Task 1 Print All Elements using Array method

let num = [1, 2, 3, 4, 5, 6]

 num.forEach((val, index) => {
    console.log(val , index);
    
 })

// 🔹 Task 2. 👉 Create new array where each number is +10

let eachNum = [2, 5, 4, 10, 14, 4, 65, 13, 5, 4]

let numEachCount = eachNum.filter(num => num > 10)
console.log(numEachCount);


// 🔹 Task 3 Get only odd numbers

let oddNum = [3, 2, 45, 3, 7, 9, 5, 48, 10, 12, 66]

let getOddNum = oddNum.filter(odd => odd % 2 === 1)
console.log("Odd Number " ,getOddNum);


//  🔹 Task 4 👉 Check if "grapes" exists

let fruits = ["apple", "mango", "orange"]

let checkExistNum = fruits.includes("grapes")
console.log(checkExistNum);


// 🧪 LEVEL 2 (Logic Building)

// 🔹 Task 5  👉 Find first number greater than 25

let numsFind = [10, 20, 4, 30, 40]

let findMatchNum = numsFind.find(num => num > 25)
console.log(findMatchNum);


//  🔹 Task 6 👉 Find index of value 30

let findIndexVal = [20, 30, 40, 50,60, 70, 80, 90, 10]

let checkIndexVal = findIndexVal.indexOf(10)
console.log(checkIndexVal);


// 🔹 Task 7  👉 Calculate sum of all numbers

let calculationNum = [30,4,34,6,4,8,53]

let totalCalculation = calculationNum.reduce((acc, val) => acc + val, 0)
console.log(totalCalculation);

// 🔹 Task 8  👉 Multiply all numbers using reduce

let multiplayNum = [2, 5, 5, 9, 1, 2]

let totalMultiplay = multiplayNum.reduce((mul, val) => mul * val)
console.log(totalMultiplay);


// 🧪 LEVEL 3 (Objects + Real Use)

// 🔹 Task 9 👉 Get users with age ≥ 18

let users = [
    { name: "Jass", age: 22 },
    { name: "Aman", age: 17 },
    { name: "Ravi", age: 25 }
];

let checkAge = users.filter(check => check.age > 18)
console.log(checkAge);


// 🔹 Task 10  👉 Create new array of only user names

let usersName = [
    { name: "Bittu" },
    { name: "harry" },
    { name: "vicky" }, 
    {name: "Raman"}
]

usersName.forEach((val, index) => {
    console.log("User-Name :", val.name , "Index-Point ", index);
    
})


// 🔥 LEVEL 4 (Advanced)

// 🔹 Task 11 // 👉 Even numbers → square them

let numsEven = [1, 2, 3, 4, 5, 6, 33, 44, 66, 12, 14];

for (let i = 0; i < numsEven.length; i++) {
   
    if (numsEven[i] % 2 === 0) {
        console.log("Even", numsEven[i]);
        
        let squareNum = numsEven[i] * numsEven[i]
        console.log("Even--Square : " ,squareNum);
        
    }
}


// 🔹 Task 12 👉 Task: price > 1000 add 10 % tax return new array

let products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2000 }
];

let taxCheck = products.map(proTax =>  {
    return {
        ...proTax,
        Price: proTax.price >1000 + (proTax.price * 0.10)
       
     }
 })

let productTax = taxCheck
 console.log(productTax);
 

 //