//  🔷 1. Object.keys() → keys
// Check Object Key name

const users = {
    name: "Jass",
    age: 20,
    city: "Panipat"
}

console.log(Object.keys(users));


//  Practice Task Keys Object

const product = {
    title: "Shoes",
    price: 999,
    stock : 5
}

console.log(Object.keys(product));


// 🔷 2. Object.values() → values
// Check Object values data 

const user2 = {
    name: "vicky",
    age: 25, 
    city : "Firozpur"
}

console.log(Object.values(user2));

// Practice Solve Object value

const car = {
    brand: "BMW",
    model: "X5",
    year : 2025
}

console.log(Object.values(car));


// 🔷 3. Object.entries() → key-value
// entries convert to key - value Nested Array

const user3 = {
    name: "billa",
    age: 25,
    city : "Firozpur"
}

console.log(Object.entries(user3));

// Practice Object Entries

const book = {
    title: "Js Guide" ,
    price : 500
}

console.log(Object.entries(book));


//  🔷 4. Object.assign() → copy / merge
// 👉 Merge both objects.

const a = { name: "Sanju" }
const b = { age: 22 };

const result = Object.assign({}, a, b)

console.log(result);


//  🔷 5. Object.freeze() → lock
// NO Add , Update , Remove values Only Read values
const user4 = {
    name: "Vicky"
};

Object.freeze(user4);

user4.name = "Ram"
console.log(user4.name);

// Practice Object Freeze

const settings = {
     theme : "dark"
}
 
Object.freeze(settings)

settings.theme = "light"
console.log(settings.theme);


// 🔷 6. Object.seal() → partial lock
// Only Update Values For Object 
const user5 = {
    name : "Ajay"
}

Object.seal(user5)

user5.name = "Ajay Vilasra"
user5.age = 23
console.log(user5);

// Practice For Object Seal

const carName = {
    brand : "Audi"
}

Object.seal(carName)

carName.brand = "Thar"
carName.model = 2025

console.log(carName);


// 🔷 7. Object.create() → prototype

const person = {
    greet() {
        return "Hello Word";
    }
}

const userPerson = Object.create(person)
console.log(userPerson.greet());

// Practice For Object create Method
 
const animal = {
    sound() {
        return "Bark";
    }
}

const animalCreate = Object.create(animal)
console.log(animalCreate.sound());


//  🔷 8. Object.fromEntries() → array to object

const arr = [
    ["Name", "Jass"],
    ["Age" , 20]
]

console.log(Object.fromEntries(arr));


// Practice For Object Method FromEntries

const data = [
    ["Title", "Laptop"],
    ["Price", 40000],
    ["Model" , "Core15 :> Genration ..11th"]
]

console.log(Object.fromEntries(data));


