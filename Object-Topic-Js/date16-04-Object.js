// Java-Script Cho Object data structure hai jo key-values store karan layi hota hai .
// Key -- property da Name
// Values -- data (string , number, function ,...)
// JavaScript vich object create karan de multiple standard methods ne.

// Example For Object >>
const student = {
    name: "Harry", 
    marks: [70, 80, 90],
    totalMarks: function () {
        let sum = 0 

        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i]     
        }
        return sum;
    }
}
console.log(student.totalMarks());


//

const user = {
    name: "Jass",
    greet() {
        console.log(this.name);
    }
};

// 2. Built-in Object Methods

// Check Object Keys 
console.log(Object.keys(user));

// Check Object Values

console.log(Object.values(user));

// Check Key With Values Object 
console.log(Object.entries(user));

// Check GroupBy Object 
Object.groupBy([1, 2, 3, 4], x => x % 2 ? "odd" : "even");

// Array methods inside object

const obj = {
    name: "Vicky",
    nums: [1, 2, 3],
    getSum() {
        return this.nums.reduce((acc , val )=> acc + val  ,0)
    }
}
console.log(obj.getSum());


// 🔷 3. Object Types (Creation Ways)

// 🔸 1. Object Literal
// const obj1 = { name: "Jass" };

const userName = {
    name: "Vicky",
    age: 19 ,
    greet() {
        return {
            Name: this.name,
            Age : this.age
        } 
    }
}
 console.log(userName.greet());
 

// 🔸 2. Constructor Object

const objConstructor = new Object()
objConstructor.name = "Billa"
console.log(objConstructor.name);


function UserEmail(email , age) {
    this.email = email
    this.age = age
}
 
let u1 = new UserEmail("jassi34@gmail.com")
console.log(u1.email);

// 🔸 3. Function Constructor

function User(name) {
    this.name = name
}

let user1 = new User("ram")
console.log(user1.name);

// 🔸 4. Class Object (Modern)

    class Product {
        constructor(name) {
            this.name = name
        }
    }

    let product1 = new Product("Shoes")
console.log(product1.name);
    
// Practice Object Class ::>
class UserN {
    constructor(name, age) {
        this.name = name,
       this.age = age
    }
    greet() {
        return "Hi" + this.name
    }
 }
const nameUser1 = new UserN("Aditya")
console.log(nameUser1.greet());


// 🔸 5. Object.create()

// const nuObj = Object.create(proto)
// console.log(nuObj);


//🔸5.  Object Assign
// Copy by reference (shallow copy)

// const a = { x: 23 }
// const b = { y: 34 }

// const c = Object.assign({}, a, b)
// console.log(c);

//  🔸 6. Object.fromEntries()
// array iterate , object build

// const arr = [["Name", "Jass"], ["Age", 20]]
// const obj1 = Object.fromEntries(arr)
// console.log(obj1);


// Getter & Setters

// Getter/Setter allow controlled access & computed values

const user4 = {
    first: "Jass" ,
    last: "Singh" ,
    
    get fullName() {
        return this.first + " " + this.last
    }
}
console.log(user4.fullName);

console.log(
    Object.defineProperty(user4, "age", {
        value: 22,
        writable: false
    }));


//  🔷 STEP 1: Object Definitions (One Example)

const base = { role: "User" }

const user6 = Object.assign(
    Object.create(base),
    Object.fromEntries([["Name" , "Jass"] , ["Age" ,20]])
)
console.log(user.name, user.role);
 

// 🔷 STEP 3: Object Iteration (One Example)

const number = {
    a: 22,
    b: 45
}

for (let [key, value] of Object.entries(number)) {
    console.log(key ,value);
    
}

// Object Freeze

const objQ = { name: "Jass" };

Object.freeze(obj);

objQ.name = "Ram";

console.log(objQ.name);

// 🔷 STEP 4: Object Prototype (One Example)

function compnayUser(name) {
    this.name = name
}

compnayUser.prototype.sayHi = function () {
    return "Hi" + this.name
}

const comUser = new compnayUser("Jass")
console.log(comUser.sayHi());


// Object Reference
    
let ac = { name: "Jass" }
let bc = a;

bc.name = "Ram"
console.log(ac.name);
