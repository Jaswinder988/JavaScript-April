
// Beginnder lavel

// Task 1. Get All Names

const users = [
    { id: 1, name: "Jass" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Ravi" }
]

let userName = users.map(getName => getName.name)
console.log(userName);

// Task 2: Get all prices

const products = [
    { id: 1, title: "Shoes", price: 1200 },
    { id: 2, title: "Watch", price: 2500 },
    { id: 3, title: "Bag", price: 1800 }
]

let proPrice = products.map(getPrice => getPrice.price)
console.log(proPrice);


// Task 3: Find total age

const students = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 22 },
    { name: "John", age: 21 }
]

let totlaAge = students.reduce((acc, val) => acc + val.age, 0)
console.log(totlaAge);

// Task 4: Filter active users

const usersAc = [
    { name: "A ", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
]

let userActiveFil = usersAc.filter(filtActive => filtActive.active === true)
console.log(userActiveFil);


// Task 5. Find User Id = 2

const usersID = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Sham" }
];

let findUserId = usersID.find(findUsId => findUsId.id === 2)
console.log(findUserId);

// Medium Level

// task 6. Add New Property status : "Avilable" to every product

const items = [
    { name: "Phone" },
    { name: "Laptop" }
]

for (let val of items) {

    val.status = "Available"
    console.log(val);

}

// Task 7: Sort products by ;price low to high.

const productPri = [
    { name: "TV", price: 4000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
]

let priceLowToHigh = productPri.sort((a, b) => a.price - b.price)
console.log(priceLowToHigh);


// Task 8: Count total active users.

const usersCount = [
    { active: true },
    { active: false },
    { active: true },
    { active: true }
]

let userActive = usersCount.reduce((acc, val) => acc + (val.active === true), 0)
console.log(userActive);


// Task 9. Get Only Titles Where Stock

const book = [
    { title: "JS", stock: 5 },
    { title: "PHP", stock: 0 },
    { title: "React", stock: 3 }
]

let titleStock = book.filter(titstock => titstock.stock > 0)
console.log(titleStock);


// Task 10. Increase All Salaries by 10%

const employees = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 15000 }
];


let inncreSalary = employees.map(emp => ({
    ...emp,
    SalaryInncrease: emp.salary * 1.10
}))
console.log(inncreSalary);


// Task 11. Group  Users By  Role
 
const userRole = [
    { name: "Jass", role: "admin" },
    { name: "Aman", role: "User" },
    {name:"Ravi" , role : "admin"}
]

let groupUsers = userRole.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
}, {})

console.log(groupUsers);


