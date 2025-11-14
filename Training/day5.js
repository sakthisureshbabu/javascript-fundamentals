// Objects

let info = ["chinmay", "deshpande", 34, 55];
let info2 = {
    firstName: info[0],
    lastName: info[1],
    age: info[2],
    rollNo: info[3]
};

console.log(info2);

// retrieve // dot notation and bracket notation
console.log(info2.firstName);
console.log(info2['firstName']);

// update   // dot notation and bracket notation
info2.firstName = "Tanmya";
console.log(info2.firstName);
info2['firstName'] = "Chinmay";
console.log(info2.firstName);
// add      // dot notation and bracket notation
info2.city = 'Pune';
info2.language = 'Marati';
console.log(info2);

// delete   // dot notation and bracket notation
delete info2.city;
console.log(info2);

// loop over
let vehicle = {
    color: "red",
    type: "Sedan",
    passing: "Pune"  
};

for(let key in vehicle) {
    console.log(vehicle[key]);
}

for(let x of Object.keys(vehicle)) {
    console.log(x);
}

for(let x of Object.values(vehicle)) {
    console.log(x);
}

for(let x of Object.entries(vehicle)) {
    console.log(x);
}

console.log(vehicle.hasOwnProperty('color'));