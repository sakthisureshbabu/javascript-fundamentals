//1. Convert any value to a boolean
let truthyValue = !!1;
let falsyValue = !!0;
console.log(truthyValue, falsyValue);

// 2. Default function parameters
function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet("David"));

// 3. Ternary operator
let price = 100;
let message = price > 50 ? "Expensive" : "Cheap";

console.log(message);

// 4. Template literals
let item = "Coffee";
let cost = 15;
console.log(`One ${item} cost $${price}.`);


// 5. Destructuring Assignment
let [x, y] = [1, 2];
let {name, age} = {name: "Alice", age: 50};
console.log(x, y, name, age);

// 6. Spread operator
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(originalArray);
console.log(clonedArray);

// 7. short-circuit evaluation
let isValid = true;
isValid && console.log("Valid");

// 8. Optional chaining
let user = {name: "John", address: {city: "New York"}};
let user_1 = {name: "James", address: {}};
console.log(user?.address?.city);
console.log(user_1?.address?.city);

// 9. Nullish Coalescing Operator
let username = null;
console.log(username ?? "Guest");

// 10. Elegant way to handle array
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);

// Filter
const evens = numbers.filter(x => x%2 === 0);

// Reduce
const sum = numbers.reduce((acc, val) => acc+val , 0)
console.log(doubled);
console.log(evens);
console.log(sum);