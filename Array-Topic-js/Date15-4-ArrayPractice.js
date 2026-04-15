// Level 1v Basic

// Task 1. Print all Number  Using Array Method

let nums = [1, 2, 3, 4, 5]

let res = nums.forEach((val, index) => {
    console.log(val , index);
    
})


// Task 2. Create new array each number is doubled

// let doubleNum = [2, 3, 4, 5, 4, 3, 5, 6, 4]

// let removedouble = [...doubleNum, Set(doubleNum)]
// console.log(removedouble);


// Task 3  only Even Number

let EvenNum = [2, 4, 3, 5, 4, 6, 7, 8, 9]

for (let i = 0; i < EvenNum.length; i++){
    if (EvenNum[i] % 2 === 0) {
        console.log(EvenNum[i] , "Even Number");
        
    } else {
        console.log("Not Even Num");
        
    }
}

//  Task 4 Check If Banana Exists

let fruit = ["apple", "banana", "mango"]

let CheckFruit = fruit.includes("banana")
console.log(CheckFruit);


// Task 5 Find Index Of "Mango"

let ManFind = ["apple", "banana", "Orange", "mango", "Guava"]

let MangoFind = ManFind.indexOf("mango")
console.log(MangoFind);


//  Level 2 Intermediate

// Task 6 Create New Array With +5 Added To Each Value

let numms = [10, 20, 30, 40]

 numms.push(50)
console.log(numms);

//  Task 7 . get Number Greater Than 20

let numGreater = [10, 20, 30, 40, 43, 12, 3, 23, 43, 23, 65, 86]

let greaterNumber = numGreater.filter(x => x > 20)
console.log(greaterNumber);


// Task 8. Find First Number Greater Than 25

let numFind = [20, 43, 23, 54, 35, 34, 56, 98, 6, 721]

let findNumFirst = numFind.find(num => num > 25)
console.log(findNumFirst);


// Task 9. Calculate sum of all numbers

let sumNum = [3, 65, 76, 34, 35, 7, 4, 7]

let sumTotal = sumNum.reduce((sum, val) => sum + val, 0)
console.log(sumTotal);


// Task 10. Check if number 50 exists

let checkNum = [12, 4, 3, 756, 50, 65, 45, 564, 45]

let numberCheck = checkNum.includes(50)
console.log(numberCheck);

//  Level 3

// Task 11. get Users with Age > 18
let users = [
    { name: "Jass", age: 20 },
    { name: "Bittu", age: 29 },
    { name: "billa", age: 25 },
    { name: "harry", age: 22 },
    {name:"vicky" , age: 18}
    
]
 
let ageCheck = users.filter(user => user.age > 18)
console.log(ageCheck);


// Task 12. Create Array Of Only  Names

let usersName = [
    { name: "Jass", age: 20 },
    { name: "Bittu", age: 29 },
    { name: "billa", age: 25 },
    { name: "harry", age: 22 },
    { name: "vicky", age: 18 }

]

let nameShow = usersName.map(userN => userN.name)
console.log(nameShow);


// Task 13. Find First user with age > 20

let findUserAge = [
    { name: "Harry", age: 19 },
    { name: "Sunny", age: 12 },
    { name: "Billa", age: 25 },
    { name: "Sanju", age: 26 },
    { name: "Ravi", age: 27 },
    { name: "Babbu", age: 20 }
]

let firstFindAge = findUserAge.find(userAge => userAge.age)
console.log(firstFindAge);


// Task 14. check if Any User Age = 17 exists
let checkUserAge = [
    { name: "Harry", age: 19 },
    { name: "Sunny", age: 12 },
    { name: "Billa", age: 25 },
    { name: "Sanju", age: 26 },
    { name: "Ravi", age: 27 },
    { name: "Babbu", age: 20 }
]

let userAgeCheck = checkUserAge.includes(17)
console.log(userAgeCheck);


//   Task 15 Count Total Users using reducde

let checkTotalUser = [
    { name: "Harry", age: 19 },
    { name: "Sunny", age: 12 },
    { name: "Billa", age: 25 },
    { name: "Sanju", age: 26 },
    { name: "Ravi", age: 27 },
    { name: "Babbu", age: 20 }
]

let totalUser = checkTotalUser.reduce((acc, val) => acc + 1, 0)
console.log(totalUser);


//  Level 4 Advanced

// Task 16. Even Numbers -> Square Them

let EvenNumSquare = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < EvenNumSquare.length; i++) {
   
    if (EvenNumSquare[i] % 2 === 0) {
        
console.log("Even Num " , EvenNumSquare[i]);

        let SquareNum = EvenNumSquare[i] *EvenNumSquare[i]
        console.log("Even Num Squ",SquareNum);
    } else {
        console.log("Odd Num ");
        
    }
    
}

//  Task 17. Get Products With Price > 1000

let product = [
    { name: "Shirt", price: 800 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2000 }, 
    { name: "T-Shirt", price: 1100 },
    {name: "Pant" , price: 900}
]

let getProduct = product.filter(pro => pro.price > 1000)
console.log(getProduct);


//  Task 19. Add 10% tax to all Products


let productTax = [
    { name: "Shirt", price: 800 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2000 },
    { name: "T-Shirt", price: 1100 },
    { name: "Pant", price: 900 }
]

let taxCheckPro = productTax.map(pro => {
    return {
        ...pro,
        price: pro.price +  (pro.price *0.10)
    }
})
let taxProduct = taxCheckPro
console.log(taxProduct);


// Task 20. Find Total Price Of All Products

let totalPrice = [
    { name: "Shirt", price: 800 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2000 },
    { name: "T-Shirt", price: 1100 },
    { name: "Pant", price: 900 }
]

let checkTotal = totalPrice.reduce((proPric, val) => proPric + val.price, 0)

console.log(checkTotal);


// Level 5 Interview Level

let num2 = [1, 2, 3, 4, 5, 6, 7, 8]

let results1 = num2.filter(num => num % 2 === 0).map(num => num * 2)

console.log(results1);


// Task 22. check If all numbers are positive

let checkPositive = [1, 2, 3, -2, -3, 2, 4, 6, 7, -8]

let postiveNum = checkPositive.filter(pos => pos > 0)
console.log(postiveNum);
