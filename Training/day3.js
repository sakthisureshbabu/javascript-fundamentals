// Arrays
let names = ['chinmay', 'sarika', 'poorva', 'ram', 'Janu'];
let numbers = [11, 22, 33, 44, 55];

console.log(names[0]);
console.log(names[1]);

names[0] = "tanmya";
console.log(names);
console.log(names.length);

// last index
console.log(names.length-1);

// Program 3
for(let i=0; i<names.length; i++) {
    console.log(names[i]);
}

let i7 = 1;
while(i7 < names.length) {
    console.log(names[i7]);
    i7++;
}

// methods
// program 5
let flowers = ['rose', 'lilly', 'sunflower', 'jasmine'];
flowers.forEach(ele => {
    console.log(ele);
});
flowers.push("lotus");
flowers.unshift("mogra");
console.log(flowers);

console.log(flowers.pop());
console.log(flowers.shift());
console.log(flowers);

// program 6
console.log(flowers.includes("rose"));
console.log(flowers.indexOf("rose"));
console.log(flowers.indexOf("Rose"));

// program 7
console.log(flowers.at(3));

// program 8
// map()
let birthYear = [2000, 2001, 2002, 2003]
let ages = birthYear.map(year => 2025-year);
console.log(ages);

// program 9
let numbersA = [11, 22, 33, 44, 55];
let modified = numbersA.map((el, index) => el+10);
console.log(numbersA);

// program 10
let marks = [89, 34, 55, 66, 77, 88];
let above75 = marks.filter(mark => mark >= 75);
console.log(above75);

// program 11
let numC = [11, 22, 33];
let sum = numC.reduce((acc, num) => acc+num,0);
console.log(sum);

// program 12
let cities2 = ["nagpur", "chandrapur", "chennai"];
cities2.forEach(city => console.log("welcome "+city));