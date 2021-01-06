//////////////////////////////////
/* 106. Strings in ES6 / ES2015 */
//////////////////////////////////

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return new Date().getFullYear() - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 (temp literals)

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n);

// startsWith
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));

// endsWith
console.log(n.endsWith('th'));
console.log(n.endsWith('ts'));

//includes
console.log(n.includes('oh'));
console.log(n.includes('  '));

// repeats
console.log(`${firstName} `.repeat(5));


