// 1. [1, 2, [3, 4], 5] - convert this into a single dimensional array
// let arr = [1, 2, [3, 4], 5];
// console.log(arr.flatMap(ele => Array.isArray(ele) ? ele : [ele]));

// 2. [1, 2, 3, 4, 5] - return an array of elements not divisible by 2 and multiplied by 10.
const arr =  [1, 2, 3, 4, 5];
console.log(arr.flatMap(ele => ele % 2 === 0 ? [] : [ele * 10]));