// every()
let numA = [22, 33, 44, 55, 66, 12];
console.log(numA.every(num => num >= 10));


// concat
let q11 = [11, 22, 33]
let q22 = [44, 55, 66];
let q33 = q22.concat(q22);
console.log(q33);

// splice()
let cities = ['pune', 'bangalore', 'mumbai', 'chennai', 'london'];
cities.splice(1, 2);
console.log(cities);

// slice()
cities = ['pune', 'bangalore', 'mumbai', 'chennai', 'london'];
console.log(cities.slice(2));
console.log(cities.slice(1, 4));
console.log(cities.slice(1, -1));
console.log(cities.slice(-4, -1));

// reverse()
let cities_1 = [...cities];
cities_1.reverse();
console.log(cities);
console.log(cities_1);

// fill()
let numberT = [11, 22, 33, 44, 55, 66, 77];
let q77 = numberT.fill("@", 1, 4);
console.log(q77);