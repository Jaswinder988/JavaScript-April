// what is Array or Define Array //



//  A JavaScript Array is a special object used to store multiple values in a single variable.
//   These values can be of any type(number, string, object, function, etc.).


//  1. List of items Array

let product = ["Shirt", "Shoes", "Watch", "HeadPhone"]

//  2. API data handling  Array

let user = [
    { name: "Vicky", age: 28 },
    { name: "Harry", age: 29 }
]

// Array Method Example 

// 1. Check  Array Index Element  //

console.log(product[1]);

// 2. Check Array Total Element length

console.log(product.length);

// 1. push () ( Add To End)

let arr = [2, 4, 2, 1, 8, 6, 2]

arr.push(7)

console.log(arr);

// practice :  1 
let fruits = ["apple", "banana", "orange"]
fruits.push("mango")
console.log(fruits);

let nums = [20, 40, 50]

nums.push(70, 80, 90)
console.log(nums);


// 2. pop () (Remove Last value)

let numRemove = [244, 523, 652, 243, 123, 676]

numRemove.pop()
console.log(numRemove);

// practice //

let score = [34, 54, 23]

score.pop()
console.log(score);

let colors = ["red", "blue", "green "]

colors.pop()
console.log(colors);

//  3. Shift() ( Remove First Value)
 
let arr2 = [10,20,40, 43]

arr2.shift();
console.log(arr2);


// practice
 
let num1 = [1, 2, 43, 5]

num1.shift()
console.log(num1);

let names = ["ram" , "harry" , "Vicky" , "Sunny" , "Billa "]

names.shift()
console.log(names);


// UnShift ()  ( Add at Start value )

let arr3 = [2, 3, 4, 5]

arr3.unshift(1)
console.log(arr3);

// pratice

let nums2 = [3, 4, 6, 3, 56, 4,]

nums2.unshift(1, 2)
console.log(nums2);

let fruitsName = ["banana ", "Mango", "Orange"]

fruitsName.unshift("apple")
console.log("UnShift" , fruitsName);


// 5. Splice ()

let arr4 = [1, 2, 3, 4, 5, 6, 7]

arr4.splice(1, 3, "X")
console.log(arr4);


// practice

let num5 = [10, 20, 30, 40, 50, 60, 70, 80]

num5.splice(0, 2, "Score")
console.log("Splice", num5);



// 6. Slice ()  (Copy Array Value)

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr5.slice(1, 3)

console.log(newArr);

let num6 = [1, 2, 4, 5, 6, 8, 5, 23, 5]

let newNum6 = num6.slice(2, 6)
console.log("Slice", newNum6);


// 7. Concat () (Join Arrays)

let a = [1, 2, 3]
let b = [4, 5, 6]

let result = a.concat(b)
console.log("Concat",result);

// pratice

let fruits1 = ["apple", "banana", "Orange"]
let fruits2 = ["Guava" , "PineApple"]

let fruitsJoin = fruits1.concat(fruits2)
console.log(fruitsJoin);


// Removes duplicates + keeps order

let num7 = [1, 2, 4, 5, 6, 8, 5, 23, 53, 65, 33, 33, 33];

let uniqueArr = [...new Set(num7)]
console.log(uniqueArr);


// Array Method Using

// 1. forEach (only Loop - No return )

let num2 = [1, 2, 4, 5, 6, 7, 8,]

num2.forEach((val, index) => {
    console.log(val ,index);
    
})

let eachNum = [1, 2, 4, 5, 6]

eachNum.forEach((val , index)=> {
    console.log(val *2 ,index);
    
})

// 2. Map (New Aray Create ,callback retrun value store)

let arr8 = [1, 3, 4, 56, 7, 88, 8]

let results = arr8.map(x => x * 2)

console.log(results);



// 3. Filter (Condition Check Or Results Show , new Array , )

let count = [1, 2, 3, 4, 65, 6, 7, 8]
 
let counting = count.filter(y => y % 2 === 0)
console.log(counting);

// Practice

let nums4 = [5, 13, 53, 20, 10]

let numgreateThan = nums4.filter(greaterThan => greaterThan > 10)
console.log(numgreateThan);




// 4. Reduce (Combine value , accumulator , loop run )

let userId = [11,33,44,66,88]

let totalID = userId.reduce((acc, val) => acc + val, 0)
console.log(totalID);


// 5. Find (First Match value , First true return )

let accId = [121, 343, 133, 5432, 32, 42]

let matchId = accId.find(x => x > 151)
console.log(matchId);

// Practice

let numFind = [3, 7, 12, 18]

let matchFind = numFind.find(f => f > 10)
console.log(matchFind);



// 6. Includes (Check Value Exist )

let account = [12122, 13234, 756545, 645435, 3534, 25354, 3563634]

console.log(account.includes(25354));


// pratice

let fruitsIn = ["appple", "banana", "mango"]

console.log(fruitsIn.includes("mango"));


