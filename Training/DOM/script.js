// index.html

// let htmlElement = document.querySelector('h1');

// htmlElement.addEventListener('click', function() {
//     htmlElement.style.color = 'green';
// });

// let byId = document.querySelector('#one');
// console.log(byId);

// let byClassName = document.querySelector('.two');
// console.log(byClassName);

// // by tag name
// let byTagName = document.querySelector('p');
// console.log(byTagName);

// // by any attribute
// let byAnyAttribute = document.querySelector('[name="nm"]');
// console.log(byAnyAttribute);

// byId.addEventListener('click', () => {
//     byId.textContent = "I'm learning python";
//     byId.style.color = 'green';
//     byId.style.background = 'yellow';
// });

// program 2
// index2.html

// let headOne = document.querySelector('h1');
// let buttonElement = document.querySelector('button');

// buttonElement.addEventListener('click', function() {
//     headOne.style.color = 'red';
//     headOne.textContent = 'Footer';
// });

// let headOne = document.querySelector('h1');
// let buttonElement = document.querySelector('button');

// headOne.addEventListener('mouseover', function() {
//     headOne.style.color = 'red';
//     headOne.textContent = 'Footer';
//     headOne.style.cursor = 'pointer';
// });

// buttonElement.addEventListener('mouseout', function() {
//     headOne.style.color = 'black';
//     headOne.textContent = 'Header';
//     headOne.style.cursor = 'pointer';
// });

// program 3
// index3.html
// let textElement = document.querySelector('h1');
// let inputElement = document.querySelector('button');
// let buttonElement = document.querySelector('button');

// buttonElement.addEventListener('click', () => {
//     textElement.style.color = inputElement.value;
// });


// program 4
// index_4.html

let ulList = document.querySelector('ul');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

button.addEventListener('click', function() {
    let fruitName = inputElement.value; // papaya
    let newLi = document.createElement('li');
    newLi.textContent = fruitName;
    ulList.appendChild(newLi);
    inputElement.value = "";
});