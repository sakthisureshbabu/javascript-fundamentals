// 1. Prototype using Object literals and __prot__
// const Parent = {
//     greet: function() {
//         return "Hello from Parent!";
//     }
// }

// const child = {
//     name: "Child Prototype",
//     __proto__: Parent
// }

// console.log(child.greet());

// 2. Prototype using Object.create
// const parent = {
//     greet() {
//         return "Hello from Parent!";
//     }
// };

// const child = Object.create(parent);
// child.name = "Child";
// console.log(child.greet()); // Hello from Parent!
// console.log(child); // { name: 'Child' }

// 3. Function constructor with prototype
// function Parent(name) {
//     this.name = name;
// }

// Parent.prototype.greet = function() {
//     return `Hello from ${this.name}`;
// }

// const alice = new Parent("Alice");
// console.log(alice.greet());

// // 4. Accessing Prototype Properties
// console.log(alice.__proto__ === Parent.prototype);
// console.log(Object.getPrototypeOf(alice) === Parent.prototype);
// console.log(alice.hasOwnProperty('greet')); // false - greet() is a prototype method
// console.log(alice.__proto__.hasOwnProperty('greet')); // true - greet() is a property method of prototype.

// 4. Prototype Chain
// const grandParent = {grand: true};
// const parent = Object.create(grandParent);
// const child = { __proto__: parent };

// console.log(child.grand);

// 6. Prototype using __proto__ and Object.assign()
// Access the name of the child object using method in prototype
const proto = {
    name: "prototype 1",
    getPrototype() {
        return this.name;
    }
}

const child1 = {
    name: "Child 1",
    __proto__: proto
}

const child2 = Object.create(proto);
child2.name = "Child 2";

console.log(child1, "\n", child2);
console.log(child1.getPrototype());
console.log(child2.getPrototype());