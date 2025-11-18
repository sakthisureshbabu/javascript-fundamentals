// 11. Tagged Template literals
function highlight(strings, ...values) {
    return strings.reduce((prev, curr, i) => `${prev}${curr}${values[i] || ''}`, '');
}
let price = 10;
console.log(highlight`The price is ${price} dollars.`);

// 12. Convert objects to array
let person = {name: "Alice", age: 25};
let entries = Object.entries(person);
let newPerson = Object.fromEntries(entries);
console.log(entries);
console.log(newPerson);

// 13. Set Object for unique elements
let numbers = [1, 1, 2, 3, 4, 4];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// 14. Dynamic property names
let dynamicKey = 'name';
let person_1 = {[dynamicKey]: "Alice"};
let person_2 = {dynamicKey: "Johnson"};
console.log(person_1);
console.log(person_2);

// 15. Function Currying Using bind()
function multiply(a, b) {
    return a*b;
}

let double = multiply.bind(null, 2);
console.log(double(5));

// 16. Using Array.from() to create Arrays from Array like Objects
// let nodeList = document.querySelectorAll("div");
// let nodeArray = Array.from(nodeList);

// 17. for...of loop for iterable Objects
for(let value of ['a', 'b', 'c']) {
    console.log(value);
}

// 18. Rest Parameter
function sum(...nums) {
    return nums.reduce((acc, curr) => acc+curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 19. Memoization for performance optimization
const memoize = (fn) => {
    const cache = {};
    return(...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
};

// 20. ^ swapping
let a=1, b=2;
a^=b;
b^=a;
a^=b;
console.log(a,b);

// 21. Flattening Array with flat()
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

// 22. Convert to Numbers with Unary plus
let str = "123";
let num = +str;
console.log(typeof(num));

// 23. Template String for HTML fragments
let items = ['apple', 'orannge', 'banana'];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
console.log(html);

// 24. Object.assign() for merging object
let obj1 = {a: 1}, obj2 = {b: 2};
let merged = Object.assign({}, obj1, obj2);
console.log(merged);

// 25. Short-circuiting for default values
// logical operators to assign default values when dealing with potentially undefined or null variables.
//let options = userOptions || defaultOptions;

// 26. Dynamically accessing object properties with bracket operator
let property = "name";
let value = person[property];

// 27. Array.includes() for presence check
const skills = ["python", "javascript", "cloud", "c++"];
console.log(skills.includes("c++"));

// 28. The power of Function.prototype.bind()
const greet = function(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
};
const greetJohn = greet.bind({name: "John"}, "Hello");
console.log(greetJohn("!"));

// 29. Preventing Object Modification
let obj = { name: "Immutable" };
Object.freeze(obj);
obj.name = "Mutable";
console.log(obj);