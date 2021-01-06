/* 104. Variable Declarations with let and const */

/*
// ES5 (var) vs ES6 (let and const).
//---------------------------------

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age = 23;
name6 = 'Jane Miller';
console.log(name6);
*/


/*

// ES5 (function scoped) vs ES6 (block scoped).
// --------------------------------------------

// ES5 (function scoped)
function driversLicense5(passedTest){
    if (passedTest){

        // Hoistic: Can use a variable before it's declare (result: undefined).
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicense5(true);


// ES6 (block scoped)
function driversLicense6(passedTest){

    // Can't use a variable before it's declared (result: ERROR).
    console.log(firstName);

    // This works (function scoped).
    let firstName;
    const yearOfBirth = 1990;
    

    if (passedTest){
        firstName = 'John'; //(let function scoped.)

        // This does not work (block scoped).
        //let firstName = 'John';
        //const yearOfBirth = 1990;

    }
    
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicense6(true);

*/

// ES5 (for iteration)

/*
var j = 23;

for(var j = 0; j < 5; j++){
    console.log(j);
}

console.log(j);


// ES6 (for iteration)

let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

*/