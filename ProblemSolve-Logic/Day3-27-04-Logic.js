// JavaScript Practice Tasks //

// 🔹 Task 1: Even or Odd Checker
//      Create a function checkNumber(num)

function checkNumber(num) {

    if (num % 2 === 0) {
        console.log("This Even Number");
    } else {
        console.log("This Odd Number");
    }
}
checkNumber(6)

// 🔹 Task 2: Biggest Number
//        Create function findMax(a,b)


let findMax = function (a, b) {
    if (a > b) {
        return a + " : is Big value A"
    } else {
        return b + " : is Big value B"
    }
}

let biggerNum = findMax(6, 5)
console.log(biggerNum);


//🔹 Task 3: Positive, Negative, Zero

function checkValue(num) {
    if (num > 0) {
        console.log("Number is Postive ", num);
    } else if (num < 0) {
        console.log("Number is Negative", num);
    } else {
        console.log("Number is Zero");

    }
}

checkValue(1)

// 🔹 Task 4: Array Sum
//      create function sumArray(arr)

function sumArray(arr) {
    let element = 0
    for (let x = 0; x < arr.length; x++) {
        element += arr[x];
    }
    console.log(element);

}
sumArray([10, 20, 30])


//🔹 Task 5: Array Max Number
//      create function maxArray (arr)

function maxArray(arr) {

    let maxValue = arr[0]
    for (let checkMax of arr) {
        if (checkMax > maxValue) {
            maxValue = checkMax
        }
    }
    console.log(maxValue, "Big Value");

}
maxArray([2, 8, 5, 1])


// 🔹 Task 6: Reverse Array
//     create function reverseArray (arr)

function reverseArray(arr) {
    let revArr = arr.reverse()
    console.log(revArr);
}

reverseArray([1, 2, 3, 4])


// 🔹 Task 7: Count Even Numbers
//      create function countEven (arr)

function countEven(arr) {
    let counNumber = 0
    for (let checkEven of arr) {
        if (checkEven % 2 === 0) {

            counNumber++;
        }
    }
    console.log(counNumber);

}

countEven([1, 2, 3, 4, 5, 6, 7, 8])


//  🔹 Task 8: Object Full Name

function fullname(user) {
    console.log(user.firstname + " " + user.lastName);

}
fullname({ firstname: "Jass", lastName: "Singh" })


// 🔹 Task 9: Login Check
//     Create function login(username, password)

function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Success"
    } else {
        return "Invalid Login"
    }
}

let checkLogin = login("admin", "1234")
console.log(checkLogin);


// 🔹 Task 10: Calculator Function
//       create function calc (a,b,op)

function calc(a, b, opp) {
    return opp(a, b)
}

function plus(x, y) {
    return x + y
}

function minus(x, y) {
    return x - y

}

function mult(x, y) {
    return x * y

}

function div(x, y) {
    return x / y

}

let calculate = calc(7, 8, minus)
console.log(calculate);


// 🔹 Task 11: Create Student Object
//     create function create Student()

function createStudnet() {
    return {
        name: "Vicky",
        age: 19,
        city : "Jalalabad"
    }
}

const dataStudent = createStudnet()
console.log(dataStudent);

// 🔹 Task 12: Product Function

function createProduct(name, price) {
    return {
        Product: name, 
        Price : price
    }
}

const showProduct = createProduct("Laptop HP", 34000)
console.log(showProduct);



//  🔹 Task 13: Pass or Fail
//          create function

function stundentResult(name, marks) {
    return {
        Name: name,
        Marks: marks,
        Result: marks >=300 ? "Pass" : "Fail"
    }
}

const resultData = stundentResult("Harry", 450)
console.log(resultData);


//  🔹 Task 14: Vote Check
//      create functon

function voteCheck(name, age) {
    return {
        Name: name,
        Age: age,
        checkVote : age >18 ? "Yes" : "No"
    }
}

const voteData = voteCheck("Ravi", 22)
console.log(voteData);

// 🔹 Task 15: Merge Objects
//      create function

function mergeObj(obj1, obj2) {
    return { ...obj1 , ...obj2}
}

const data1 = {
    name: "Preet",
    age: 20 ,
    city : "jalalabad"
}

const data2 = {
    name: "Billa",
    age: 23, 
    city : "Jalalabad"
}

const mergeData = mergeObj(data1, data2)
console.log(mergeData);

