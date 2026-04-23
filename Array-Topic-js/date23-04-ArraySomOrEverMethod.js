// Array Practice For //

// 1.1️⃣ some() Method
// some() checks whether at least one element in an array passes a condition.

const nums = [10, 20, 25, 40, 30]

let numsResult = nums.some(num => num > 25)
console.log(numsResult);

// 2. Check Admin Exist Yes Or No 

const roles = ["user", "editor", "admin"]

let isAdmin = roles.some(role => role === "admin")
console.log(isAdmin);

// check  Age 18+ Puls Above

const ages = [12, 15, 17, 16, 20, 18]

let checkAge = ages.some(age => age > 18)
console.log(checkAge);

// Task 1: Check Even Number

const evenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let checkEvenNums = evenNums.some(even => even % 2 === 0)
console.log(checkEvenNums);

// Task 3. Check Email Contains

const emails = ["abcgmail.com", "test@yahoo.com", "hello.com"]

let checkEmails = emails.some(em => em.includes("@"))
console.log(checkEmails);


// Task3. Check Failed Student

const marks = [45, 78, 22, 90, 33]

let checkMarks = marks.some(mar => mar < 33)
console.log(checkMarks);

// 2️⃣ every() Method


const salary = [12000, 15000, 19870, 20000]

let checkSalary = salary.every(sal => sal > 11000)
console.log(checkSalary);

// Task 1. Every All Numbers Greater Than 10

const greaterNums = [12, 15, 20, 30, 40]

let checkGreaterNums = greaterNums.every(nums => nums > 10)
console.log(checkGreaterNums);

// Task 2. All Names Start With A

const names = ["Aman", "Ajay", "Ankit"]

let checkNames = names.every(nam => nam[0] === "A")
console.log(checkNames);

// Task 3. All Pricer Under 5000

const unPrices = [1200, 3000, 7000, 4000]

let priCheck = unPrices.every(price => price < 5000)
console.log(priCheck);


//  3️⃣ hasOwnProperty()
// Check Only Key

// Task 1: Check Name Property

const user = {
    name: "Jass",
    age : 22
}

console.log(user.hasOwnProperty("name"));


// Task 2. Check Salary Property

const employee = {
    id: 1,
    department : "IT"
}

let checkEmploye = employee.hasOwnProperty("salary")
console.log(checkEmploye);


// Task 3. Check Brand and Model

const car = {
    brand: "BMW",
    model : "X5"
}

let checkCar = car.hasOwnProperty("brand") && car.hasOwnProperty("model")
console.log(checkCar);



// Task Interview Level

const users = [
    { name: "Billa", active: true },
    { name: "Aman", active: true },
    { name: "Jass", active: false },
    { name: "harry", active: true }
    
]

//  1. Use Some  any inactive user

let  InActiveUser = users.some(user => user.active === false)
console.log(InActiveUser);

//  2. Use every () -> all active users

let activeUser = users.every(user => user.active === true)
console.log(activeUser);


// Check Frist user has Name property

let checkUsers = users.hasOwnProperty("name")
console.log(checkUsers);
