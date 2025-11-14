class Vehicle {
    constructor(number, type) {
        if(!number || typeof number !== 'string') {
            throw new Error('Vehicle must have a valid registration number.');
        }
        this.number = number;
        this.type = type;
    }

    // Increment method
    start() {
        console.log(`Vehicle ${this.number} of type ${this.type} is starting.`);
    }

    // Static method
    static compareType(v1, v2) {
        return v1.type = v2.type;
    }
}

// Child class
class Car extends Vehicle {
    constructor(number, brand, speed) {
        super(number, 'Car');
        this.brand = brand;
        this.speed = speed;
    }

    // Overriding instance method
    start() {
        super.start();
        console.log(`Car ${this.number} (${this.brand}) accelerates to ${this.speed}`);
    }

    // New method only for Car
    accelerate(increment) {
        this.speed += increment;
        console.log(`Car ${this.number}: New speed is ${this.speed} km/h.`);
    }
}

// Create vehicles
const v1 = new Vehicle("KA05AB1234", "Truck");
const c1 = new Vehicle("KA05CD5678", "Toyota", 80);
const c2 = new Vehicle("KA05EF2468", "hONDA", 65);

// Use instance and static method
v1.start();
c1.start();
c2.start();

// Accelerate the cars
c1.accelerate(20);
c2.accelerate(35);


// Static method usage and property validation
console.log(Vehicle.compareType(c1, c2));
console.log(Vehicle.compareType(c1, v1));