// Promise
// PromiseAll()

async function PromiseAll() {
    try {
        let q1 = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve('hello1'),
        Promise.resolve('hello3')
        ]);
        console.log(q1);
    }
    catch {
        console.log('rejected');
    }
};

PromiseAll();

// PromiseAllSettled()
async function allSettled() {
    let q3 = await Promise.allSettled([
        Promise.resolve("hello"),
        Promise.resolve("hello2"),
        Promise.reject("Bye")
    ]);
    console.log(q3);
};

allSettled();

// Promise.race()

function PromiseOne() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("hello");
        }, 3000);
    });
};

function PromiseTwo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("hello");
        }, 2000);
    });
};

async function PromiseRace() {
    try {
        let q4 = await Promise.race([
        PromiseOne(),
        PromiseTwo(),
        Promise.reject("bye")
        ]);
        console.log(q4);
    }
    catch(err) {
        console.log(err);
    }
}

PromiseRace();

// Promise.any();

async function PromiseAny() {
    let q5 = await Promise.any([
        Promise.reject("Rejected"),
        PromiseOne(),
        PromiseTwo()
    ]);
    console.log(q5);
};

PromiseAny();