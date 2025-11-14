// function declaration

function addition(x, y) {
    return x + y;
}

let q1 = addition(12, 3);
console.log(q1);

let substraction = (x, y) => x - y;
function sub(fn, x, y) {
    console.log(fn(x, y));
};

sub(substraction, 12, 4);

// Program 3
// Arrow function
let multiplication = (x, y) => x * y;
console.log(multiplication(10, 5));

// Program 5
let info = {
    firstName: "Sakthi",
    lastName: "Sureshbabu",
    display() {
        return this.firstName + this.lastName;
    }
};

console.log(info)

// spread operator
let numbers_A = [111, 222, 333, 444, 555, 666];

function firstThree(a, b, c) {
    return a+b+c;
};
console.log(firstThree(...numbers_A));

// rest operator
function addition(...args) {
    console.log(args);
    let sum = args.reduce((acc, ele) => acc+ele, 0);
    return sum;
}

let val_2 = addition(1, 3, 4, 5, 6, 7, 8, 2, 5, 6, 7, 3, 0, -4, -2, 0);
console.log(val_2);