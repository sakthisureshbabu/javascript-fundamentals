// 1. Robot function
// function robot(name) {
//     return {
//         name: name,
//         talk: function() {
//             console.log(`Hello, I am ${name}`);
//         }
//     }
// }

// const robot1 = robot("Chitti");
// robot1.talk();

// 2. Person Factory
// function Person(name, age) {
//     return {
//         name: name,
//         age: age,
//         greeting: function() {
//             return `Hello, my name is ${name} and I am ${age} years old.`;
//         }
//     }
// }

// const person1 = Person('Bruce', 50);
// const person2 = Person('Clark', 29);

// console.log(person1.greeting());
// console.log(person2.greeting());

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

// 4. HTML element factory
function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;

    return {
        appendTo: function(parent) {
            parent.appendChild(el);
        },
        setColor: function(color) {
            el.style.color = color;
        }
    }
}

const header = createElement('h1', 'Title');
header.setColor('blue');
header.appendTo(document.body);