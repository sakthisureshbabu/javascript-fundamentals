// Object Oriented Programming
// how to set the values for class(ES6)
// how to define objects in javascript ---> knowledge
// ES6 - inheritance, polymorphism, encapsulation
// lexical scope, closures, arrow function vs others

// Object literals
let amol = {
    fistName: "Arthur",
    lastName: "Dayne",
    age: 31,
    rollNo: 45
};

let robert = {
    firstName: "Robert",
    lastName: "Baratheon",
    age: 48,
    rollNo: 21
};

console.log(amol);
console.log(robert);

// Class Person

class Person {
    constructor(fName, lName, age, role) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.role = role;
    }

    get() {
        return [this.firstName, this.lastName, this.age, this.role];
    }
}

const king = new Person("Robert", "Baratheon", 48, "King");
const hand = new Person("Eddard", "Stark", "49", "King's hand");

console.log(king.personDetails());
console.log(hand.personDetails());