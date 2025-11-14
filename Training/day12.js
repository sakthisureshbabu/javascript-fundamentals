// polymorphism
// class Main {
//     // overloading and overriding
//     public static void main(String[] args) {
//         System.out.println("overloading");
//         addition(1, 2);
//         addition(1, 2, 3);
//         addition(1, 2, 3, 4);
//     }
    
//     public static void addition(int x, int y) {
//         System.out.println(x+y);
//     }
    
//     public static void addition(int x, int y, int z) {
//         System.out.println(x+y+z);
//     }
    
//     public static void addition(int a, int b, int c, int d) {
//         System.out.println(a+b+c+d);
//     }
// }

class Calculator {
    addition(a=undefined, b=undefined, c=undefined, d=undefined) {
        if(a !== undefined && b !== undefined && c!== undefined && d !== undefined) {
            console.log(a+b+c+d);
        }
        else if(a !== undefined && b !== undefined && c !== undefined){
            console.log(a+b+c);
        } 
        else if(a !== undefined && b !== undefined) {
            console.log(a+b);
        }
    }
}

let calc = new Calculator();
calc.addition(1, 2);
calc.addition(1, 2, 3);
calc.addition(1, 2, 3, 4);

// overloading --> same class, same method, different signature.
// overriding --> different class same method name, has a relation.

class worldBank {
    save() {
        console.log("world bank save method");
    }
    loan() {
        console.log("world bank loan method");
    }
};

class SBI extends worldBank {
    save() {
        console.log("sbi bank save method");
    }
    loan() {
        console.log("sbi bank loan method");
    }
}

let sbi_chennai = new SBI();
sbi_chennai.loan();
sbi_chennai.save();

// Duck typing

class Human {
    talk() {
        console.log("Hi Hello");
    }
}

class Cat {
    talk() {
        console.log("meow meow");
    }
}

class Duck {
    talk() {
        console.log("quack quack");
    }
}

// function
function call_talk(obj) {
    obj.talk();
};

let human = new Human();
let cat = new Cat();
let duck = new Duck();

call_talk(human);
call_talk(cat);
call_talk(duck);

// Encapsulation

class BankAcc {
    #balance = 0;
    deposit(amt) {
        this.#balance += amt;
    }

    withdrawl(amt) {
        if(amt > this.#balance) {
            return "Insufficient bank balance";
        }
        else {
            this.#balance -= amt;
            return amt;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let Salary = new BankAcc();
Salary.deposit(1000);
console.log(Salary.withdrawl(10001));
console.log(Salary.getBalance());

// Abstraction

class Car {
    startCar() {
        this.#igniteEngine();
        console.log("Car Started");
    }

    // abstract method
    #igniteEngine() {
        console.log("Engine started");
    }
}

let car = new Car();
car.startCar();