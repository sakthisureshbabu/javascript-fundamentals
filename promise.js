// 1. Promise to check if the number is even or not
// let checkEven = new Promise((res, rej) => {
//     let number = 5;
//     if(number % 2 === 0)
//         res('The number is even!!');
//     else
//         rej('The number is odd!!');
// });

// checkEven.then(res => console.log(res)).catch(err => console.error(err));

// 2. Promise.all()
// Promise.all([
//     Promise.resolve("Task 1 Completed"),
//     Promise.resolve("Task 2 Completed"),
//     Promise.reject("Task 3 failed")
// ]).then(res => console.log(res)).catch(err => console.log(err));

// 3. 