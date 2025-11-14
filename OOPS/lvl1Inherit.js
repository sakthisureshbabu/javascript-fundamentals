class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const pet = new Dog('Buddy');
pet.speak();
pet.bark();