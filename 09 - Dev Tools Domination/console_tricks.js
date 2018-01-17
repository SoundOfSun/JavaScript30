const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Inspect the page, go to Element, right click on the element
// Then, click on break on 'attribute modification'

//  ******************************************

// TYPES of CONSOLE LOG

// Regular
console.log('hello');
console.table(dogs); // they have the same data age / name

// Interpolated
console.log('Hello, I am a %s string!', 'lollipop');
// console.log(`Hello I am a ${var}`);   ES6

// Styled
console.log('%c I am a great text', 'font-size: 30px');

// warning!
console.warn('OH NO !');

// Error :|
console.error('Invalid number of arguments');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 1, 'That is wrong!');
console.assert(1 === 2, 'That is wrong!');

// clearing
// console.clear();
// All console messages above are cleared.

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p); // Gives dropdown of properties & methods

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age}.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Hi');
console.count('Hi');
console.count('Hi');
console.count('Hi');
console.count('Hi');

// timing - how long the script takes
console.time('fetching data'); // begin
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data'); // same string as begin !
    console.log(data);
  });
