// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
// team[3] = 'Lux';
// --> When you update and array, it references BACK to the ORIGINAL array.

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
// --> If we give nothing to slice, it'll make a copy of the array

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Lollipop';
console.log(team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Cecile',
  age: 25
}

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99});
console.log(person);
console.log(cap2);
// --> Take a blank object, fill it with existing object, pass other things.

// We will hopefully soon see the object ...spread
const cap3 = {...person};
// --> very shallow !!!

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const cecile = {
  name: 'Cecile',
  age: '25',
  social: {
    twitter: 'twitty',
    facebook: 'secrety'
  }
}

console.clear();
console.log(cecile);

const dev = Object.assign({}, cecile);

// --> Need clonedeep function online

const dev2 = JSON.parse(JSON.stringify(cecile));
// The poor man's deep clone:
// --> returns a string, then parse it into an object again
