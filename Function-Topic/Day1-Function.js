function calculate(a, b) {
    return a * b;
}
console.log(calculate(5, 6))

// Level 1 : Core Basics //
// 🧪 Task 1: Even / Odd Checker

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even... " + num
    } else {
        return "Odd... " + num
    }
}

console.log(checkEvenOdd(7));

// 🧪 Task 2: Maximum of Three Numbers

const findMaxNum = function (a, b, c) {
    if (a > b && a > c) {
        console.log("Largest Number :", a);

    } else if (b > c && b > a) {
        console.log("Largest Number :", b);
    }
    else {
        console.log("Largest Number :", c);
    }
}
findMaxNum(9, 7, 3)

// 🧪 Task 3: String Length Counter

function getLength(str) {
    let len = "";
    for (let i = 0; i < str.length; i++) {

        len += i;
    }
    return len
}

console.log(getLength("Aditya"));

//  ⚡ 🔰 LEVEL 2: PARAMETERS & RETURN

// 🧪 Task 4: Default Parameter

function nameCheckDefault(name = "Guest No") {
    return {
        Welcome: name
    }
}
console.log(nameCheckDefault());

// 🧪 Task 6: Sum of Unlimited Numbers

function sumAll(a, b, c) {
    return a + b + c
}

console.log(sumAll(6, 7, 8,));


// 🧪 Task 7: Function Inside Function

// function outer(a, b) {

//     return function () {
//         return a * b;
//     }
// }

// const calculate = outer(6, 7);
// console.log(calculate());

// 🔥 🔰 LEVEL 3: CALLBACK + HIGHER ORDER

// 🧪 Task 8: Custom Calculator

function calculator(a, b, opperation) {
    return opperation(a, b)
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
console.log(calculator(12, 8, subtract));

//  Check Password 

function creataePassword() {
    let password = "4242";

    return function checkPass(input) {
        if (input === password) {
            return "Correct Password ✅";
        } else {
            return "Wrong Password ❌";
        }
    };
}

const checkPass = (creataePassword());
console.log(checkPass("4232"));





