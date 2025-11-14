//1. Simple closure
// function outerFunction() {
//     let greet = "world!!";

//     return function innerFunction() {
//         return `Hello ${greet}`;
//     }
// }

// outer = outerFunction();
// console.log(outer());

// 2. Counter closure
// function counterClosure() {
//     let count = 0;

//     return counter = () => {
//         return ++count;
//     }
// }

// let count = counterClosure();
// console.log(`First Count: ${count()}`);
// console.log(`First Count: ${count()}`);
// console.log(`First Count: ${count()}`);

// 3. Initialize function
// function initializer() {
//     let init = false;

//     return () => {
//         if (!init) {
//             init = true;
//             return "initialized";
//         }
//         return "Initializer function is already called, not initializing";
//     }
// }

// init = initializer();
// console.log(init());
// console.log(init());

// 4. Function factory
// function greet(greeting) {
//     return function(name) {
//         return `${greeting}, ${name}`;
//     }
// }

// greeting = greet("Welcome");
// console.log(greeting("home!!"));
// console.log(greeting("John"));

// 5. Event handler
function setUpButton(buttonId) {
    const buttonElement = document.getElementById(buttonId);
    let count = 0;
    buttonElement.addEventListener('click', () => {
        count++;
        console.log(`Button clicked ${count} times`);
    });
}

// Assuming an element button with id='myButton' exists
setUpButton('myButton');