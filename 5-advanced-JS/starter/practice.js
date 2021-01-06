// Function constructor

/*
var Person = function(firstName, yearOfBirth, job){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('John', 1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

Person.prototype.calculateAge = function(){
    this.age = (new Date().getFullYear() - this.yearOfBirth);
}


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john);
console.log(jane);
console.log(mark);

console.log(john.__proto__ === Person.prototype);
console.log(john.hasOwnProperty('lastName'));
console.log(john instanceof Person);
*/


// Object create

/*
var personProto = {
    calculateAge: function(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

var john = Object.create(personProto,{
    firstName: {value: 'John'},
    yearOfBirth: {value: 1990},
    job: {value: 'teacher'}
});

var jane = Object.create(personProto,{
    firstName: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});

console.log(john);
john.calculateAge();
console.log(jane);
jane.calculateAge();
*/



// First Class Functions - Passing Functions as Arguments
/*

var years = [1990, 1965, 1937, 2005, 1998];
console.log(years);

var calcArray = function(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

var calculateAge = function(yearOfBirth){
    return (new Date().getFullYear() - yearOfBirth);
}

var ages = calcArray(years,calculateAge);
console.log(ages);

var isFullAge = function(age){
    return (age >= 18);
}

var fullAges = calcArray(ages,isFullAge);
console.log(fullAges);
console.log(calcArray(calcArray(years,calculateAge),isFullAge));

var maxHeartRate = function(age){
    if (age >= 18 && age <= 81)
        return Math.round(206.9 - (0.67 * age));
    else
        return -1;
}

var heartRates = calcArray(calcArray(years,calculateAge), maxHeartRate);
console.log(heartRates);
*/


// First Class Functions - Functions Returning Functions
/*
var interviewQuestion = function(job){
    switch(job)
    {
        case 'designer':
            return function(name){
                console.log(name + ', can you please explain what UX design is?');
            }
            break;
        case 'teacher':
            return function(name){
                console.log('What subject do you teach, ' + name + '?');
            }
            break;
        default:
            return function(name){
                console.log('Hello ' + name + '!, What do you do?');
            }
            break;
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mark');
interviewQuestion('developer')('Jane');
*/



// Immediately Invoked Function Expressions (IIFE).

/*
(function(){
    var score = Math.random() * 10;
    console.log(score, score >= 5);
})();

// IIFE with parameters.
(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score, (score >= (5 - goodLuck)));
})(3);

*/



// Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';

    return function(yearOfBirth){
        var age = new Date().getFullYear() - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(65)(1971);
retirement(67)(1990);


function score(){
    var sc = 0;
    return function(answer){
        if (answer === true)
        {
            sc++;
        }
        return sc;
    }
}

var score = score();
console.log(score(true));
console.log(score(false));
console.log(score(true));


function interviewQuestion(job){
    var msg = '';

    return function(name){
        switch(job){
            case 'designer':
                msg = `${name}, can you please explain what UX design is?`;
                break;
            case 'teacher':
                msg = `What subject do you teach, ${name} ?`;
                break;
            default:
                msg = `Hello ${name}!, What do you do?`;
                break;
        }
        console.log(msg);
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion('developer')('Mike');
*/



// Bind, Call and Apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation : function(style,timeOfDay){
        if (style === 'formal'){
            console.log(' Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// Call (this,param1,param2,....paramn)

john.presentation.call(emily,'formal','morning');
john.presentation.call(emily,'friendly','night');

// Apply (this, [param1, param2,...paramn])

john.presentation.apply(emily,['formal','afternoon']);

// Bind (this, param1, param2.... paramx) //After 'this' argument, bind accepts any number of parameters for the called method or function.
// The result must be saved in a variable for later use.

var emilyPresentation = john.presentation.bind(emily,'formal');
emilyPresentation('evening');


var years = [1990, 1965, 1937, 2005, 1998];

function calcArray(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

var calculateAge = function(yearOfBirth){
    return (new Date().getFullYear() - yearOfBirth);
}

var isFullAge = function(limit, age){
    return (age >= limit);
}

var ages = calcArray(years,calculateAge);
console.log(ages);

var fullAgesForJapan = calcArray(ages, isFullAge.bind(this, 20));
console.log('Japan Full Ages: ', fullAgesForJapan);
*/