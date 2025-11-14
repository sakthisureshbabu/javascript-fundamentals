// 1. for loop
//for (let i=0; i<=5; i++) { console.log(i) };

// 2. while loop
// let i = 0;
// while (i<5) {
//     console.log(++i);
// }

// 3. do...while loop
// let i=0;
// do {
//     console.log(++i);
// }while(i<5)

// 4. for...in loop - iterates over enumerable properties of an object
// const obj = {name: 'Optimus Prime', role: 'Leader', age: '14 million years', planet: 'Cybetron'};
// for (let key in obj) { console.log(`${key}: ${obj[key]}`); }

// 5. for...of loop
const arr = [10, 20, 30, 40, 50];
for(let value of arr) { console.log(value); }