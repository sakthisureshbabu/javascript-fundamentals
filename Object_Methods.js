// 1. Object.create() - Create object with specified prototype
// const proto = { getPrototype() { return "proto" } };
// const obj = Object.create(proto);
// obj.name = "Object 1";
// console.log(obj);
// console.log(obj.getPrototype());

// 2. Object.assign() - Copies enumerable properties from one or more source objects to a target object
// const target = { a: 1};
// const src1 = { b: 2};
// const src2 = { c: 3, b: 4 };
// const returnedTarget = Object.assign(target, src1, src2);
// console.log(returnedTarget); // { a: 1, b: 4, c: 3 }

// 3. Object.defineProperty() - Adds or modifies a property on an object with specific descriptors like writable, enumerable, configurable
// const obj = {};
// Object.defineProperty(obj, 'prop', {
//     value: 42,
//     writable: false
// });

// console.log(obj.prop);
// obj.prop = 72;
// console.log(obj.prop); // Still 42, as writable is false

// 4. Object.keys() - Returns an array of an object's own enumerable property names
// const agent = { code: 'B2Z', agency: '405', name: 'James Bond', weapon_skill: true, weapon_type: 'pistol' };
// console.log(Object.keys(agent));

// 5. Object.values() - Returns an array of object's own enumerable property values
// console.log(Object.values(agent));

// 6. Object.entries() - Returns an array of key-value pair of enumerable properties
// console.log(Object.entries(agent));

// 7. Object.freeze() - Freezes an object, preventing modification to existing properties.
// const obj = { prop: 42 };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);

// 8. Object.getPrototypeOf() - Returns the prototype of the specified object
// const proto = { greeting() {
//     console.log("Hi");
// }};
// const obj = Object.create(proto);
// console.log(Object.getPrototypeOf(obj) === proto);

// 9. Object.hasOwn() - Returns a boolean indicating whether the object has the specified property as its own property.
// const obj = { prop: "prop1", getter() { return prop }};
// console.log(Object.hasOwn(obj, 'getter'));

// 10. Object.is() - Compares two values for equality, handling special cases like NaN.
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(0, -0));

// 11. Object.getOwnPropertyNames - Returns an array of Property names/keys of object
co