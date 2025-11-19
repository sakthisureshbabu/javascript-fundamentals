// 1. Shortcut in replacement of if else condition
// Using && operator
let access = true
access && console.log("It's open");

// Using or operator to check if price value > 0
let price = 0;
console.log(price || "Getting the price");

//2. Using ~~ operator to convert anything into Number
let number = Math.random() * 50;

// Using Math.floor() to round the float to integer
console.log("Math.floor() -", Math.floor(number));

// Using ~~ operator
console.log("Rounding using double bitwise operator -", ~~number);

// Using Math.trunc() to eliminate the deciamals
console.log("Math.trunc() -",Math.trunc(number));

// Using ~~ operator
console.log("Truncating using double bitwise operator -",~~number);

// Random String
console.log("Whitespace -", ~~("Whitespaces"));
console.log("'1'", ~~('1'));

// NaN
console.log("NaN -", ~~(NaN));

// Undefined
console.log("undefined -", ~~(undefined));

//null
console.log("null -", ~~(null));

// 3. Resize or Empty an array using .length
let array = ['a','b','c','d','e','f','g','h'];
console.log(array.length);

// resize using array length
array.length = 4;
console.log(array);

// Reset the array to empty array
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(arr.length);

arr.length = 0;
console.log(arr);

//4. Merging array for large data set without Server overload
let list_1 = ['a', 'b', 'c', 'd', 'e'];
let list_2 = ['f', 'g', 'h', 'i', 'j'];

// Using Array.concat() creates a new array which consume more memory
let list_3 = list_1.concat(list_2);
console.log(list_3);

//5. Using Array.push.apply() will append the second array elements into the first array without causing memory overload
list_1.push.apply(list_1, list_2);
console.log(list_1);

//6. Array filter
const cars = [
  { make: 'Opel', class: 'Regular' },
  { make: 'Bugatti', class: 'Supercar' },
  { make: 'Ferrari', cla4ss: 'Supercar' },
  { make: 'Ford', class: 'Regular' },
  { make: 'Honda', class: 'Regular' },
];

console.log(cars.filter(car => car.class === 'Regular'));

// Using Boolean to filter all null and undefined elements
const vehicles = [
    { make: 'Opel', class: 'Regular' },
    null,
    undefined
];

console.log(vehicles.filter(Boolean));

// 6. Extract Unique values
const cars_list = ['Opel', 'Bugatti', 'Opel', 'Ferrari', 'Ferrari', 'Opel'];
const unique_cars = [...new Set(cars_list)];
console.log(unique_cars);

// 7. Using regular expression to replace string characters
const grammer = "synonym synonym";

console.log(grammer.replace(/syno/, 'anto'));
console.log(grammer.replace(/syno/g, 'anto'));

//8. Add elements inside the new array
let a_1 = [10, 20];
let c_1 = [30, 40, ...a_1, 50, 60];
console.log(c_1);

//9. Copy array elements
const a_4 = [1, 2, 3, 4, 5];
const b_3 = [...a_4];

console.log(b_3);

//10. Concatenate array using spread operator
let a_5 = [1, 2, 3, 4];
let b_4 = [4, 5];

const merge_1 = [...a_5, ...b_4];
console.log(merge_1);