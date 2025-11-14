// Object literal
let amol = {
    firstName: "Chinmay",
    lastName: "Deshpande",
    age: 13,
    rollNo: 22
};

console.log(amol);

class Person {
    constructor(fn, ln, age, rn) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
        this.rollNo = rn;
    }
}

let amol_N = new Person("Amol", "Rao", 23, 12);
let Chinmay = new Person("Chinmay", "deshpande", 24, 12);

console.log(amol_N);
console.log(Chinmay);

// Setting the value using set and get methods
class PersonB {
    setFirstName(fn) {
        this.firstName = fn;
    };

    getFirstName() {
        return this.firstName;
    };

    setLastName(ln) {
        this.lastName = ln;
    }

    getLastName() {
        return this.lastName;
    }
}

let amolC = new PersonB();
amolC.setFirstName("amolC");
amolC.setLastName("Rao");
console.log(amolC);
console.log(amolC.getLastName());

// Setting with get and set keyword

class PersonD {
    set firstN(fn) {
        this.firstName = fn;
    };

    get firstN() {
        return this.firstName;
    }
}

let amolD = new PersonD();
amolD.firstN = "amolD";

console.log(amolD);

// Inheritance

// Single inheritance --> one child one parent
// Multi-level inheritance --> grandparent -> parent -> child
// Hierarchical inheritance --> one parent -> more than one child

class Student {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}

class Teacher extends Student{
    salary = 30000;
    displayName() {
        return this.firstName + this.lastName;
    };

    displaySalary() {
        return this.salary;
    };
};

let amolE = new Teacher("amolE", "RaoE");
console.log(amolE.displayName());
console.log(amolE.displaySalary());

// Single inheritance

class Student_1 {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    };

    displayName() {
        return this.firstName + ' '  + this.lastName;
    };
};

class Teacher_1 extends Student_1 {
    constructor(fn, ln, salary) {
        super(fn, ln);
        this.salary = salary;
    }

    displaySalary() {
        return this.salary;
    }
};

let amol_1 = new Teacher_1('amol_1', 'Rao_1', 40000);
console.log(amol_1.displayName());
console.log(amol_1.displaySalary());

// Multi-level inheritance
class grandFather {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }

    displayGName() {
        return this.firstName + ' ' + this.lastName;
    }
};

class Father extends grandFather {
    constructor(fn, ln, ffn) {
        super(fn, ln);
        this.fname = ffn;
    }

    displayFName() {
        return this.fname + ' ' + this.lastName;
    }
};

class Son extends Father {
    constructor(fn, ln, ffn, sfn) {
        super(fn, ln, ffn);
        this.sname = sfn;
    };

    displaySName() {
        return this.sname + ' ' + this.lastName;
    }
};

let Aegon = new Son('Arrys', 'Targaryen', 'Rhaegar', 'Aegon');
console.log(Aegon.displayGName());
console.log(Aegon.displayFName());
console.log(Aegon.displaySName());

// Hierarchical inhertance

class Father_1{
    constructor(fn, ln) {
        this.firstFName = fn;
        this.lastName = ln;
    }

    displayFName() {
        return this.firstFName + ' ' + this.lastName;
    }
};

class Son_1 extends Father_1{
    constructor(fn, ln, sfn) {
        super(fn, ln);
        this.firstSName = sfn;
    }

    displaySName() {
        return this.firstSName + ' ' + this.lastName;
    }
}

class Daughter extends Father_1 {
    constructor(fn, ln, sdn) {
        super(fn, ln);
        this.firstDName = sdn;
    }

    displayDName() {
        return this.firstDName + ' ' + this.lastName;
    }
};

let Tommen = new Son_1("Robert", "Baratheon", "Tommen");
let Myrcella = new Daughter("Robert", "Barathen", "Myrcella");

console.log(Tommen.displayFName());
console.log(Tommen.displaySName());
console.log(Myrcella.displayFName());
console.log(Myrcella.displayDName());