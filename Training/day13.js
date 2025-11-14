let a = 10;
console.log(a);

a = 100;
console.log(a);

var b = 1000;
console.log(b);
b = 2000;
console.log(b);

const h = 1000;
console.log(h);

// h = 100;
// console.log(h);

// scope
// let is block scoped
// const is block scoped
// var is function scoped

// {
//     let q11 = 10;
//     console.log(q11);
// }

// console.log(q11);

// Program 1
let q12 = 10;
{
    let q12 = 100;
    console.log(q12);
}
console.log(q12);

// Program 2
{
    const q14 = 9999;
    console.log(q14);
}
// console.log(q14);

const q15 = 888;
{
    const q15 = 999;
    console.log(q15);
}
console.log(q15);

// Program 3
var var_ = 1000;
function Calculate_1() {
    var var_ = 899;
    console.log(var_);
}
Calculate_1();
console.log(var_);

// Program 4
var s = 1000;
function calculate_2() {
    s = 999;
    console.log(s);
}
console.log(s);
calculate_2();
console.log(s);