////////////////////////
/* 109. DESTRUCTURING */
////////////////////////

// ES5


var john = ['John', 26];
// var name = john[0];
// var age = john[1];


//ES6

// Destructuring an array.
const [name, age] = john;
console.log(name,age);

// Destructuring an object.
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

// Same field names.
const {firstName, lastName} = obj;
console.log(firstName,lastName);

// Using alias for field names.
const {firstName: a, lastName: b} = obj;
console.log(a,b);


// Using destructurin on functions that return multiple values.
function calcAgeRetirement(year){
    const now = new Date().getFullYear();

    const age = (now - year);
    const retirement = (65 - age);

    return [age, retirement];

};

const[resultAge,resultRetirement] = calcAgeRetirement(1971);

console.log(resultAge,resultRetirement);