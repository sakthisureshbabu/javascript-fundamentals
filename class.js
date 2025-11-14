class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display a greeting message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person1 =new Person("Sakthi", 24);
const person2 =new Person("Pozhilan", 23);

person1.greet();
person2.greet();