// number, boolean, String, array, object, DOM
// Map(), set()
// OOPS

// let statusMap = new Map[
//     ['PRE', 'PRESALES'],
//     [true, 'Open'],
//     [false, 'Closed']
// ];

//statusMap.get(ApiValue) ---> Open
//UI

let info = {
    firstName: "Chinmay",
    lastName: "deshpande",
    12:34
};
console.log(info);

// Map - can have any datatype as key unlike object having only string as key/property
// 1st way to define map
// create an object of map
let mapA = new Map();
mapA.set(1, "one");
mapA.set(true, "canDrive");
mapA.set([11, 22, 33], "marks");
mapA.set({fn: "chinmay", ln: "deshpande"}, "information");
console.log(mapA);
console.log(mapA.size);

// 2nd way to define with values
let mapB = new Map([
    [1, 'admin'],
    [2, 'manager'],
    [3, "support"],
    [4, "customer"]
]);

mapB.set(5, "client");
console.log(mapB);

// adding duplicate property
mapB.set(4, "coder");
console.log(mapB);

// Retrieve value using get()
let q1 = mapB.get(2);
console.log(q1);

// has()
let q3 = mapB.has(3);
console.log(q3);

// delete();
mapB.delete(2);
console.log(mapB);

// clear()
// mapB.clear();
// console.log(mapB);

// Map methods
mapB.forEach((value, key) => {
    console.log(value, key);
});

for(let key of mapB.keys()) {
    console.log(key);
};

for(let values of mapB.values()) {
    console.log(values);
};

for(let [key, value] of mapB.entries()) {
    console.log(`${key} -> ${value}`)
};

// Set

let q2 = new Set([11, 22, 44, 33, 11]);
console.log(q2);

// blank set
let setA = new Set();
console.log(setA);

// adding values to set
setA.add("Chinmay");
setA.add("Sarika");
setA.add("Ram");
setA.add("Nithesh");

console.log(setA);

// has() - to verify the value's existence in set
let q4 = setA.has("Nithesh");
console.log(q4);

// delete()
setA.delete("Sarika");
console.log(setA);

// size()
console.log(setA.size);

// clear();
// setA.clear();
// console.log(setA);

setA.forEach(value => {
    console.log(value);
});

// Returns key and value as same
console.log(setA.entries());