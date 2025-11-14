//1. Adding multiple array element
// Add elements at the beginning of new array
let a_1 = [10, 20];
let b_1 = [...a_1, 30, 40];

console.log(b_1);

//2. Add elements inside the new array
let c_1 = [30, 40, ...a_1, 50, 60];
console.log(c_1);

//3. Min and max element of array using spread operator
let a_2 = [1,2,3,-1];
console.log(Math.min(...a_2));
console.log(Math.max(...a_2));

//4. Passing array elements in function
function add(x, y, z) {
    return x+y+z
}

let a_3 = [10, 20, 30, 40, 50];
console.log(add(...a_3));

//5. Copy array elements
const a_4 = [1, 2, 3, 4, 5];
const b_3 = [...a_4];

console.log(b_3);

//6. Concatenate array using spread operator
let a_5 = [1, 2, 3, 4];
let b_4 = [4, 5];

const merge_1 = [...a_5, ...b_4];
console.log(merge_1);
