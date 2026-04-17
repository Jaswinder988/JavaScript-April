// Object Keys , values , Add , Update , Delete

// let userDetails = {
//     name: "anil",
//     age: 29, 
//     city: "Mohali Sector 89" ,
//     address: {
//         houseNo: 3335 ,
//         city : "Sas Nagar Mohali"
//     }
// }

//  let key = "age"           // dynamic
// console.log(userDetails.address);


// update  object
// userDetails.name = "Anil Sidhu";

// console.log(userDetails.name);

// add
// userDetails.email = "anilSidhu23@gmail.com"
// console.log(userDetails.email);


// delete Object
//


// object Loop

// for (let key in userDetails) {
//     console.log(key);
// }

//  Object Method

// let userDetails = {
//     name: "Jassi",
//     age: 20,
//     city: "Jalalabad" ,
//     greet: function () {
//         return `Hello user ${this.name} How are You`;
        
//     },
//     hello: function (from) {
//         return ` ${this.greet()} , Im Belong To , ${from}`
//     }
// }

// console.log(userDetails.hello("Mohali"));


//  Disply  and add Object  Data WIth Ui

let companyUser = {
    Name: "Anil Sidhu", 
    Email: "anilsidhu43@gmail.com",
    City : "delhi"
}

function displayObjectData() {
    let userE = document.getElementById("user-ul")
    userE.innerHTML = "";
    for (let key in companyUser) {
        userE.innerHTML += `
        <li><b>${key} : </b> ${companyUser[key]} </li>
        `
    }
}

function addNewdata() {
    let key = document.getElementById("key").value
    let value = document.getElementById("values").value

    console.log(key , value);

    companyUser[key] = value
    displayObjectData();
}
displayObjectData();

// Array Of Object

const users = [
    { id: 1, name: "Jass", age: 22 },
    { id: 2, name: "Anil", age: 25 },
    { id: 3, name: "Ravi", age: 28 }
];

console.log(users);

for (let user of users) {
    console.log(user);
    
}


