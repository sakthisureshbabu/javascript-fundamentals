// 1. Using for...in loop
// for (let key in person) { console.log(`${key}: ${person[key]}`) };

// 2. Using Object.keys()
// for (let key of Object.keys(person)) { console.log(`${key}: ${person[key]}`) }

// 3. Using Object.values() to get values
// for (let value of Object.values(person)) { console.log(value) };

// 4. Using Object.entries()
// for (let [key, value] of Object.entries(person)) { console.log(`${key}: ${value}`)};

// 5. Using Object.getOwnPropertyNames()
// Object.getOwnPropertyNames(person).forEach(key => { console.log(`${key}: ${person[key]}`) });

// 6. Using Object.entries in forEach()
// Object.entries(person).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// 7. Using Object.keys in forEach()
// Object.keys(person).forEach(key => {
//     console.log(`${key}: ${person[key]}`);
// });