// 1. forEach
// const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(val => console.log(val));

// 2. map
// const arr = [1, 2, 3, 4, 5]
// const doubled = arr.map(val => val * 2);
// console.log(doubled);

// 3. filter()
// const arr = [10, 44, 6, 15, 46, 33, 93, 12];
// const two_div = arr.filter(ele => ele > 20);
// console.log(two_div);

// 4. reduce()
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// 5. find() - find the first element that satisfy the condition
// const arr = [5, 12, 8, 130, 44];
// const found = arr.find(num => num > 10);
// console.log(found);

// 6. some() - checks if atleast one element passes the test.
// const arr = [1, 2, 3 , 4, 5, 6];
// const result = arr.some(num => num % 2 === 0);
// console.log(result);

// 7. every() - check if all the element satisfy the condition.
// const arr = [2, 4, 6, 8, 10];
// const result = arr.every(num => num % 2 === 0);
// console.log(result);

// 8. slice() - creates a shallow copy of a portion of an array
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const part = arr.slice(1, 3);
// console.log(part);

// 9. splice() - changes the contents by removing or replacing elements.
// const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 2, 'f', 'g');
// console.log(arr);

// 10. push() - Adds elements to the end of an array and returns the new length.W
// const arr = [1, 2];
// arr.push(3);
// console.log(arr);

// 11. pop() - Removes the last element from the array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.pop());

// 12. join() - joins all elements into a string separated by a specified separtor.
// const arr = ['hello', 'world'];
// const str = arr.join(' ');
// console.log(str);

// 13. flatMap() - maps each element of array and flattens the result of new array
const arr = [1, 2, 3, 4, 5];
const flatten = arr.flatMap(num => [num, num*2]);
console.log(flatten);