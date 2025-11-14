// const grandParent = {
//     grantMethod() {
//         console.log("grandParent Method");
//     }
// }

// const parent = Object.create(grandParent);
// parent.parentMethod = function() {
//     console.log("parent Method");
// }

// const child = Object.create(parent);
// child.childMethod = function() {
//     console.log("child Method");
// }

// child.childMethod();
// child.parentMethod();
// child.grantMethod();
// console.log(Object.getPrototypeOf(grandParent) === Object.prototype);

// const ObjectPrototype = {
//     name: "Object"
// }

// const child = Object.create(ObjectPrototype);
// const grandChild = Object.create(child);

// console.log(Object.getPrototypeOf(ObjectPrototype));
// console.log(Object.prototype);