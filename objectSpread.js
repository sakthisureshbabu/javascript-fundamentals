// 1. Cloning the object
const usr = {
    name: 'Jen',
    age: 22
};

const cloneUsr = {...usr};
console.log(cloneUsr);

// 2. Merging objects
const usr1 = {
    name: 'Jen',
    age: 22
};

const usr2 = {
    name: 'Andrew',
    location: 'Philadelphia'
};

const mergedUser = {...usr1, ...usr2};
console.log(mergedUser);