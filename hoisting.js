// 1. Variable hoisting with var
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

// 2. Variable hoisting with let and const
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // 10

// 3. Function declaration hoisting
sayHello(); // Output: Hello
function sayHello() {
    console.log("Hello");
}