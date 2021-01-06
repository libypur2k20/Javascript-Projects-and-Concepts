//////////////////////////////
/* 111. THE SPREAD OPERATOR */
//////////////////////////////

function addFourAges (a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

var ages = [18, 30, 12, 21];

//ES5
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);


//ES6

//Spread operator (...)
const sum3 = addFourAges(...ages);
console.log(sum3);

//Use case: joining arrays:

const familySmith = ['John','Jane','Mark'];
const familyMiller = ['Mary','Bob','Ann'];

const joinedFamilies = [...familySmith,...familyMiller];
console.log(joinedFamilies);


//Use case: nodelist

const header = document.querySelector('h1');
const divs = document.querySelectorAll('.box');

[header,...divs].forEach(current => {
    current.style.color = 'purple';
});
