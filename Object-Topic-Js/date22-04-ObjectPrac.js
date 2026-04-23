
// JavaScript Object Methods Tasks //

//  1: Create an object student with properties: name, age, course.Print all keys of object.

const studnent = {
    name: "Harry",
    age: 24,
    course: "BCA"
}

// Task 1 Print Only Keys 
let stuPrintKey = Object.keys(studnent)
console.log(stuPrintKey);

// Task 2. Print Only Values

let studValuesPrint = Object.values(studnent)
console.log(studValuesPrint);


// 3: Create object user with id, username, email. Print keys and values using Object.entries().

const user = {
    id: 234,
    UserName: "Aditya",
    Email: "aditya343@gmail.com"
}

let prinUserData = Object.entries(user)
console.log(prinUserData);

// Task 4: Check if object employee has property "salary".

const employee = {
    name: "Ali",
    department: "IT"
}

let empCheck = Object.hasOwn(employee, "department")
console.log(empCheck);

// Task 5 . Count total number of properties on object

// const mobile = {
//     brand: "Samsung",
//     Model: "S24",
//     Color : "Black"
// }

// Task 6 Merage Two Object Using Method

const obj1 = { name: "Jass" }
const obj2 = { age: 22 }

let merageObj = Object.assign(obj1, obj2)
console.log(merageObj);

// Task 7 Convert Object Into Array Of Keys

const product = {
    id: 1,
    title: "Shoes",
    Price: 1200
}

let conveArrKeys = Object.keys(product)
console.log(conveArrKeys);

// Task 8. Convert Object into Array Of Values

const laptop = {
    brand: "HP",
    ram: "12Gb",
    price: 35000
}

let convertArryVal = Object.values(laptop)

console.log(convertArryVal);


// Task 9. Loop Through Object Using Object.entries() and Print.

let person = {
    name : "John",
    age: 25,
    city: "Delhi"
}

for (let [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
    
}

// task 10 Create Copy oF Object Update one Value
const user1 = {
    name: "Rahul",
    age : 20
}

Object.seal(user1)

user1.name = "Billa"
console.log(user1);


// Task 11. Freeze Object and try to update property

const bank = {
    name: "HDFC",
    branch : "Panipat"
}

Object.freeze(bank)
bank.branch = "Mohali"
console.log(bank.branch);


// Task 12:  Seal Object and Try add new , delete old, exis Update

const car = {
    name: "Audi",
    brand: "2023",
    color: "Black"
}

Object.seal(car)
 

car.Email = "carWWW.com/web@gmail.com"


car.color = "Whitle"
 

delete car["brnad"]

console.log(car);


// Task 13. Find if all values are string type .

const data = {
    name: "TV",
    brand: "LG",
    color : "Black"
}

// Task 14. Convert Object Into Nested Array

const person = {
    name: "Aman",
    age : 19 
}

// 15. Create Function That Returns Keys Count of Any Object 