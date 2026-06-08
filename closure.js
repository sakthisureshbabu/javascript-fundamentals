//1. Simple closure
function outerFunction() {
    let greet = "world!!";

    return function() {
        return `Hello ${greet}`;
    }
};

const outer = outerFunction();
console.log(outer());


// 2. Counter closure
function counterClosure() {
    let count = 0;

    return function() {
        return ++count;
    }
}

let count = counterClosure();
console.log(`First Count: ${count()}`);
console.log(`First Count: ${count()}`);
console.log(`First Count: ${count()}`);


// 3. Initialize function
function initializer() {
    let init = false;

    return () => {
        if(!init) {
            init = true;
            return "initialized";
        }
        return "Initializer function is already called, not initializing";
    }
}

const init = initializer();
console.log(init());
console.log(init());


// 4. Function factory
function greet(greeting) {
    return (name) => `${greeting} ${name}`;
}

const greeting = greet("Welcome");
console.log(greeting("home!!"));
console.log(greeting("John!!"));


// 5. Event handler
// function setUpButton(buttonId) {
//     const buttonElement = document.getElementById(buttonId);
//     let count = 0;
//     buttonElement.addEventListener('click', () => {
//         count++;
//     });
// }

// // Assuming an element button with id='myButton' exists

//6. Closure and IIFE
//(Immediately Invoked Function Expressions) use closures to encapsulate data within a function, keeping it private and preventing access from the outside, which helps create self-contained modules.
const counter = (function () {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        reset: function() {
            count = 0;
            console.log("Counter reset");
        }
    }
})();

counter.increment();
counter.increment();
counter.reset();

//7. SetTimeout and closure
function createTimer() {
    for(let i=1; i<=3; i++) {
        setTimeout(() => {
            console.log(`${i} sec`);
        }, i*1000);
    }
}

createTimer();

//7. Closure with keyword
function Person(name) {
    this.name = name;

    this.sayName = () => console.log(this.name);

    setTimeout(function () {
        console.log(this.name);
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); // Fix with bind
}

const person = new Person("Jake");
person.sayName();