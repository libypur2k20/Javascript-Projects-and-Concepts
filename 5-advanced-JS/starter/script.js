// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

//Constructor Declaration
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //Functions and methods defined in the constructor, are
    //replicated in each instance, which is not efficient, so
    //it's a best practice to include them in the constuctor's
    //'prototype' property. This allows all instances to get
    //access to the function through inheritance.
 
    // this.calculateAge = function(){
    //     console.log(new Date().getFullYear() - this.yearOfBirth);
    // }
    
}

//All instances of the 'Person' constructor get access to the
// 'calculateAge' function through inheritance.
Person.prototype.calculateAge = function(){
    console.log(new Date().getFullYear() - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';
//Instance Creation
var john = new Person('John',1990,'teacher');

console.log(john);
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john.__proto__ === Person.prototype);
console.log(john.hasOwnProperty('lastName'));
console.log(john instanceof Person);

var x = [2,3,4];
console.log(x);
*/


// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value : 1969},
    job: {value: 'designer'}
});
*/

// 64. Primitives and Objects
/*
//Primitives (owns a direct copy of the value)
var a = 25;
var b = a;
a = 30;

console.log(a,b);

// Objects (points to a memory location where the real data sits).
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

// Primitive arguments are passed by value (the function creates it's own copy).
// Object arguments are passed by reference (a pointer to the object).
function change(primitiveParam, objectParam){
    primitiveParam = 30;
    objectParam.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

/*******************************
 * 65. First Class Functions - Passing Functions as Arguments
 */
/*
 var years = [1990, 1965, 1937, 2005, 1998];

 var arrayCalc = function(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
 };

 var calculateAge = function(yearOfBirth){
    return new Date().getFullYear() - yearOfBirth;
 };

 var isFullAge = function(age){
     return (age >= 18);
 }

 var maxHeartRate = function(age){
     if(age >= 18 && age <= 81)
        return Math.round(206.9 - (0.67 * age));
    else
        return -1;
 }

 var ages = arrayCalc(years,calculateAge);
 var fullAges = arrayCalc(ages,isFullAge);

 var directFullAges = arrayCalc(arrayCalc(years, calculateAge), isFullAge);

 var maxHeartRates = arrayCalc(ages, maxHeartRate);

 console.log(years);
 console.log(ages);
 console.log(fullAges);
 console.log(directFullAges);
 console.log(maxHeartRates);
*/

 /*******************************
 * 66. First Class Functions - Functions  Returning Functions.
 */
/*
 function interviewQuestion(job){
     switch (job){
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
 };

 interviewQuestion('designer')('Mike');
 interviewQuestion('teacher')('John');
 interviewQuestion('developer')('Bob');
*/



/***********************************
 * 67. Immediately Invoked Function Expressions (IIFE).
 */

 /*
 function game(){
     var score = Math.random() * 10;
     console.log(score >= 5);
     };
game();

//IIFE

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//IIFE with parameters

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= (5 - goodLuck));
})(5);
*/

/*******************************************
 * 68. Closures
 */
/*
 function retirement(retirementAge){
     var a = ' years left until retirement.';
     return function(yearOfBirth){
        var age = new Date().getFullYear() - yearOfBirth;
        console.log((retirementAge - age) + a);
     }
 }

 var retirementUS = retirement(66);
 retirementUS(1971);

 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);

 retirementGermany(1971);
 retirementIceland(1971);
 //retirement(66)(1971);


 function interviewQuestion(job){

     var msg = '';

     return function(name)
     {
        switch (job){        
            case 'designer':
                msg = `${name}, can you please explain what UX design is?`;
            break;
            case 'teacher':
                msg = `What subject do you teach, ${name}?`;
            break;
            default:
                msg = `Hello ${name}!, What do you do?`;
            break;        
        }

        console.log(msg);
    }
};

var designerInterview = interviewQuestion('designer');
designerInterview('Mike');

var teacherInterview = interviewQuestion('teacher');
teacherInterview('John');

var developerInterview = interviewQuestion('developer');
developerInterview('Sam');

interviewQuestion('designer')('Paula');
*/

/**********************************************
 * 69. Bind, Call and Apply
 */
/*
 var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     presentation: function(style,timeOfDay){
         if (style === 'formal'){
console.log(' Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
         } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
         }
     }
 };

 var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
 };

 // CALL (Method call)
 //Use john's presentation method with 'call'. The first
 //parameter corresponds to the 'this' variable value.

 john.presentation.call(emily, 'friendly', 'afternoon');

 // APPLY (Method call)
 // Uses a similar syntax as the call method, receiving
 // additional parameters as an array. apply(<this>,<array>)
 john.presentation.apply(emily,['formal', 'evening']);

 // BIND (Returns a function)
 // Needs to store the function call in a variable. This
 // allows us to have a function with predefined values.

 // After the 'this' argument, we can specify whatever number of
 // parameters the called function expects.
 var johnFriendly = john.presentation.bind(emily, 'friendly');

 // At the point of call the function, we specify the remaining
 // parameters.
 johnFriendly('morning');
 johnFriendly('night');



 john.presentation('formal','evening');
 john.presentation('friendly','morning');

 var emilyFormal = john.presentation.bind(emily,'formal');
 emilyFormal('afternoon');


// Using BIND to pass a function as a parameter to 
// another function.

 var years = [1990, 1965, 1937, 2005, 1998];

 var arrayCalc = function(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        //The 'fn' referenced function only accepts a parameter,
        //that corresponds to an array's item.
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
 };

 var calculateAge = function(yearOfBirth){
    return new Date().getFullYear() - yearOfBirth;
 };

 var isFullAge = function(limit, age){
     return (age >= limit);
 }


var ages = arrayCalc(years,calculateAge);
console.log(ages);

//To calculate fullAges, we cannot pass 'isFullAge' function
//directly to 'arrayCalc' as the second argument, because
// the code inside 'arrayCalc' only uses one parameter for
// the function passes as an argument, so we need to specify
// a value for the 'limit' argument using 'bind'.
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(fullJapan);

*/





