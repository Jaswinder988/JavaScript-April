function userName(user) {
    return "User Name : " +user
}
console.log(userName("Aditya"));

//

console.log(calculate(5,7));  // frist

function calculate(x, y) {
    return x * y;
}

//

const user = {
    name: "Jassi",
    email: "jaswinderPbo5@gmail.com",
    course : "Web-Developer"
}

function userDetails() {
    return {
        Name: this.name,
        Email: this.email,
        Course : this.course
    }
}

console.log(userDetails.call(user));

// factroial Number

function square(n) {
    return n * n;
}
console.log(square(5));

//

function coutner() {
    let count = 0; 
    return function () {
        count++;
        return "Count..."+ count
    }
}

const countNum = coutner()
console.log(countNum()); // Count..1
console.log(countNum()); // Count..2
console.log(countNum()); // Count ..3
console.log(countNum()); // Count ..4 
console.log(countNum()); // Coutn ..5

//  Factroial Number //

function factroialNum(fac) {
    let num = 1;
    for (let i = 1; i <=fac; i++){
        num *= i;
    }
    return num;
}

console.log(factroialNum(5));
  






