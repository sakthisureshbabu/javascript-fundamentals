// Factory function is a function that returns an object. It is way of creating and returning object during a complex task that requires objects of same pattern mutliple times.
// It can be considered as a factory producing object


// 1. Robot function
function robot(name) {
    return {
        name: name,
        talk: function() {
            console.log(`Hello, I am ${name}`);
        }
    };
}

const robot_1 = robot('Alexa');
robot_1.talk();

// 2. Person Factory
function Person(name, age) {
    return {
        name: name,
        age: age,
        greeting: function() {
            return `Hello, my name is ${name} and I am ${age} years old`;
        }
    }
}

const person_1 = Person('Sakthi', 25);
const person_2 = Person('Michael', 50);

console.log(person_1.greeting());
console.log(person_2.greeting());

// 3. Superhero factory
// function makeHero(name, alias, abilities) {
//     return {
//         name: name,
//         alias: alias,
//         abilities: abilities,
//         showAbilities: function() {
//             abilities.forEach(ability => console.log(`${alias}: ${ability}`));
//         }
//     }
// }

// const hero1 = makeHero('Diana Prince', 'Wonder Woman', ['Super Strength', 'Magic', 'Speed']);
// const hero2 = makeHero('Stephen Strange', 'Doctor Strange', ['Magic', 'Time Manipulation', 'Multi Dimensional Transport']);

// hero1.showAbilities();
// hero2.showAbilities();

function makeHero(name, alias, abilities) {
    return {
        name: name,
        alias: alias,
        abilities: abilities,
        showAbilities: function() {
            abilities.forEach(ability => console.log(`${alias}: ${ability}`));
        }
    }
}

const superMan = makeHero('Clark Kent', 'Super Man', ['Super Strength', 'Heat vision', 'fly']);
const batman = makeHero('Bruce Wayne', 'Batman', ['Intelligent', 'Martial Arts', 'Rich']);

superMan.showAbilities();
batman.showAbilities();

// 4. HTML element factory
// function createElement(tag, text) {
//     const el = document.createElement(tag);
//     el.textContent = text;

//     return {
//         appendTo: function(parent) {
//             parent.appendChild(el);
//         },
//         setColor: function(color) {
//             el.style.color = color;
//         }
//     }
// }

// const header = createElement('h1', 'Title');
// header.setColor('blue');
// header.appendTo(document.body);

// 5. 