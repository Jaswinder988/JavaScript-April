
// 1. Logic Operator Tasks ( && || !) Easu Way .

// Task 1. Check If Age Is Greater Than 18 And User Id Card.

let age = 19
let IdCard = "Collage"

if (age > 18 && IdCard === "College") {
    console.log("This is Allowed In College");
    
} else {
    console.log("This Not Student of College"); 
}
// Task 2. Check If UserName is "admin" Or "manager"

let admin = "ravi@123"
let manager = "ramdas@675"

if (admin === "ravikumar@123" || manager === "ramdas@675") {
    console.log("Login Your AdminPanel");
} else {
    console.log("your Not Correct");
    
}

// Task 3. Reverse a Boolean Value Using ! .

//  Medium Level Task

// Task 4. Check if Numver  is Between 10 and 50

let num = 59

if (num > 10 && num < 50) {
    console.log("This Number Allowed");
    
} else {
    console.log("Not Allowed This Number");
    
}
// Task 5. Check if email contains "@gmail." and password length is more than 6 .

let email = "harry855@gmail.com"
let password = "123543"

if (email.includes("@gmail.com") && password.length > 6) {
    console.log("Allowed This User");
    
} else {
    console.log("Not Correct User");
    
}

// Task 6. Check If Marks are above 40 or sports  quota is true.

let number = 30 
let sports = true

if (number > 40 || sports == true) {
    console.log("Allowed Your Sports Man");
} else {
    console.log("NOt Allowed Your Sports Man");
    
}

// Hard Lavel Task

// Task 7. Check if person can vote : age >= And citizen = true.

let ageVote = 18
let citizen = true
if (ageVote >= 18 && citizen === true) {
    console.log("You Can vote Now");
} else {
    console.log("You Can't Vote");
    
}
// task 8. Check If Login allowed : Username correct and password Correct.

let userName = "preet888"
let passwords = "preet@1234"

if (userName === "preet888" && passwords === "preet@1234") {
    console.log("Login Allowed User");
} else {
    console.log("Not Login User");
    
}

// Task 9. Check If Shop discount applies : amount > 5000 or premiun membetr true.

let amount = 5000
let premiumMember = true

if (amount > 2000 || premiumMember === true) {
    console.log("Discount Applies this Person");
} else {
    console.log("Not Discount Applies Shop");
}


// 2. Loop Tasks (for , while , for of )

// Easy Way Task

// Task 1. Print Numbers 1 to 10 .
let numPrint = 10

for (let i = 1; i <= numPrint; i++) {
    console.log(i);
    
}

// Task 2. Print Even Numbers 1 to 20 .

let evenNum = 20

for (let x = 1; x <= 20; x++){
    if (x % 2 === 0) {
        console.log(x); 
    }
} 

// Task 3. Print odd numbers 1 to 15 .

let oddNum = 15 

for (let a = 1; a <= 15 ; a++) {
    if (a % 2 === 1) {
        console.log(a + ": Odd Num");
        
    }
}


// Medium Level Task

// Task 4. Print Table of 7.

let nums2 = 10 
let tableNum = 7
for (let y = 1; y <= 10; y++){
    
    console.log(tableNum * y);
    
}

// Task 5. Find sum Of numbers 1 to 50

let nums3 = 50 
let sumTotal = 0

for (let b = 1; b <= 50; b++){
     sumTotal += b
}
console.log(sumTotal);

// Reverse Loops 20 to 1

let reverseNum = 1

for (let rev = 20; rev >= 1; rev--) {
    console.log(rev);
    
}
// Hard Level Task

// Task 7. Count How Many Even Numbers Betwee  1 to 50 .


let countEven = 0

for (let v = 1; v <= 50; v++){
    if (v % 2 === 0) {
        countEven++; 
    }
}
console.log(countEven);

// Task 8. Print Factorial of 5

let facNum = 1
for (let fac = 5; fac >= 1; fac--){
    facNum *= fac;   
}
console.log(facNum);

//  Task 9. Fibonacci first 10 numbers
let firstNUm = 0 
let secNum = 1 
for (let fib = 1; fib <= 10; fib++){
    console.log(firstNUm);
    
    let fibonacciNum = firstNUm + secNum
    firstNUm = secNum
    secNum = fibonacciNum
}


// 3.  Array Tasks

// Easy Level Task

// Task 1. Create array of 5 fruits  Add, Remove

const friutsName = ["Banana" , "Orange" , "Gava" , "apple" , "PineApple"]

// Task 2. add one item more 
friutsName.push("Graphics")
console.log(friutsName);

// Task 3. Remove Fruits names

friutsName.pop()
console.log(friutsName);

// Medium Level Task

// Task 4. Find Total sum of [10 ,20 ,30 ,40]

let arrLength = [10, 20, 30, 40]
let totalSum = 0

for (let x = 0; x < arrLength.length; x++){
    totalSum += arrLength[x]
}
console.log(totalSum);


// Task 5. Find Largest Numbers of array [1,2,2,6,9,3,5,7]

let arrNums = [1, 2, 2, 6, 9, 3, 5, 7]

let bigNumArr = arrNums[0]

for (let numBig of arrNums) {
    if (numBig > bigNumArr) {
        bigNumArr += numBig   
    }
}
console.log(bigNumArr , "Big Num");


// Task 6. Convert All Names Of  UpperCase

let name = ["ravi", "Ram", "vicky", "sunny"]

let uppCase = name.map(namUpp => namUpp.toUpperCase())
console.log(uppCase);



// Object Tasks

// Easy Level Task

// Task 1. Create Object with name, age, city

let address = {
    name: "Jass",
    age: 20,
    city : "Jalalabad"
}
// Task 2. Print Only Name
  console.log(address.name);
  
// Task 3. Update city value

address.city = "Mohali"
console.log(address.city);


// Medium Level Task

// Task 4. Add New Property "Email"

address.email = "jass343@gmail.com"
console.log(address.email);


// Task 5. Print all keys using loop

let printValues = Object.values(address)

console.log(printValues);
