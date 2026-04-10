// outer or Inner functio //

// function outer() {
//     let x = 30;
//     function inner() {
//         console.log("Outer Function Acces :", x);
//     }
//     inner()
// }
// outer()

// this keyword using //

// const user = {
//     name: "Aditya",
//     show: function () {
//         console.log("Hello : ", this.name);

//     }
// }
// user.show()

// declaration function //

// function puls(a, b) {
//     return a + b;
// }
// puls(4, 6)


// Expression Function //

// const multiply = function (x, y) {
//     return x * y;
// }

// multiply(4, 6)

// Arrow Function //

// const decrement = (x, y) => {
//     return x - y;
// }

// decrement(5, 3);

// 🧪 TASKS (Solve )
// 🔥 Task 1 👉 Create : >  Add Functon  , Same Function Convert To arrow

// function add(a, b) {
//     return(a + b)
// }
// console.log(add(5, 6));

// const multiply =  (x, y)=> {
//     return x * y;
// }
// console.log(multiply(6,7));


// 🔥 Task 2  👉 Create: object with method , print name using this

// const fruitsName = {
//     fruit : "Apple"
// }

// function fruitsNamePrint() {
//     console.log("Fruits Name : " , this.fruit);

// }

// fruitsNamePrint.call(fruitsName)

// 🔥 Task 3 👉 Create: calculate(a, b, operation) , pass multiply function

// function calculate(a, b, operation) {
//     return operation(a , b);
// }

// function multiply(x, y) {
//    return (x*y);

// }
// const resultCalculate = calculate(5, 6, multiply)
// console.log(resultCalculate);



// 🔥 Task 4 👉 Create: closure counter increment value each call

// function increment() {
//     let count = 0
//     return function () {
//         count++;
//         return "Counter : " + count;
//     }

// }
// const counterInc = increment()
// console.log(counterInc());

// call back function //

// function makeApiCall( callback) {
//     setTimeout(() => {
//         const user = {
//             name: " harry",
//             email: "harryrai988@gmail.com",
//             channel : "Code Step - By - Step "
//         }
//         callback(user)
//     } ,1000)
// }

// function handledata(data) {
//     console.log(data);

// }
// makeApiCall(handledata)

// 🚀 🔰 LEVEL 1: BASIC (FOUNDATION)

// 🧪 Task 3: Calculator Functions Create 4 functions:
 
// first Puls Function //
 
function add(x,y) {
    return x + y;
}
console.log(add(5, 6));
   

// second Function Subtract //
 
function subtract(a,b) {
    return a - b;
}
console.log(subtract(45, 12));

// Third Function  multiply  //

function multiply(x,y) {
    return x * y;
}
console.log(multiply(56,5));

// Four Function divide //

function divide(a, b) {
    return a / b;
}
console.log(divide(235,8));


// 🧪 Task 4: Greeting with Default Parameter

let greet = function (name = "Guest") {
    return "Hello : " + name
}
console.log(greet("Jass"));

// 🧪 Task 5: Function Conversion

// First Try Squre declaration Function //

function square1(n) {
    return n * n;
}
console.log(square1(4));

// Second Expression Function try

let square2 = function (num) {
    return num * num;
}
console.log(square2(6));

// Third Arrow Function Try

let square3 = (num) => {
    return num * num;
}
console.log(square3(8));

// ⚡ 🔰 LEVEL 2: CALLBACK + HOF

// 🧪 Task 6: Callback Calculator

function caculate(a, b, opp) {
    return opp(a,b)
}

function multiply(x, y) {
    return x * y;
}

function subtract(a, b) {
    return a - b;
}
console.log(caculate(45, 12, multiply));

// 🧪 Task 7: Function Returning Function

//  🔥 🔰 LEVEL 3: CLOSURE (IMPORTANT)

// 🧪 Task 8: Counter Function Call Count + 1 show
function outerCount() {
    let count = 0
    return function () {
        count++;
        return "Count : "+ count
    }
}

const coutner = outerCount()
console.log(coutner());


// 🔥 🔰 LEVEL 4: OBJECT + METHOD + this

// 🧪 Task 8: User Object
function printDetails(callback) {
    const user = {
        name: "Billa",
        age: 25
    }
    callback(user)
}

function userData(user) {
    console.log(user);
    
}
printDetails(userData)

// 🧪 Task 9: call() Method

const user1 = {
    name: "Billa",
    age: 25
}

const user2 = {
    name: "Harry",
    age: 25
}

function userDetails(email) {
    return {
        Name: this.name,
        Age: this.age,
        Email : email
    }
}

// Call Method Use
 
console.log(userDetails.call(user1, "billa454@gmial.com"));

// Apply Method use
console.log(userDetails.apply(user2, ["harry988@gmial.com"]));

// 🚀 🔰 LEVEL 5: RECURSION

// 🧪 Task 10: Factorial

function factorialNum(n) {
    let res = 1;
    for (let i = 0; i < n; i++){
        res *= n
    }
    return res;
}

console.log(factorialNum(4));


//🧪 Task 11: Function Returning Function

function outer(name) {
    
    return function () {
        return " hello : " + name
    }
}
const say = outer("Word")
console.log(say());
 

// 🧪 Task 12: Private variable balance

function bankData() {
    let balance = 0;

    return {
        desposit(amount) {
            return {
                Desposit :  balance += amount
            }
        },
        withdraw(amount) {
            return {
                Withdraw: balance -= amount
            } 
        },
        getBalance() {
            return {
                Balance: balance
            } 
        }
    }
}

const accountData = bankData()

console.log(accountData.desposit(10000));
console.log(accountData.withdraw(3000))

console.log(accountData.getBalance());


//🧪 Task 13: Async Function 👉 Problem fetchData()

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");

        } ,2000)
    })
}

async function fetchData() {
    console.log("Wating 2 sec ....");
    
    const result = await getData();
    console.log(result);
    
}
fetchData()