// Currying is used in javascript to break down complex function into smaller more manageable steps.
// It transforms function with mutliple arguments into a series of functions, each taking a single argument.

//1. Function currying
function add(a) {
    return function(b) {
        return a+b;
    }
}

console.log(add(5)(10)); //15

// 2. simplified
const sum = a => b => a+b;
console.log(sum(3)(7));