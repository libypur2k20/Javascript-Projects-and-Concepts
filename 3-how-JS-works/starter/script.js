///////////////////////////////////////
// Lecture: Hoisting
/*
//functions 
console.log(calculateAge(1971));    //Works

//function declaration (hoisting works).
function calculateAge(year){
    return (new Date().getFullYear() - year);
}

//calculateAge(1971);  //Works

//retirement(1971);  //Uncaught TypeError: retirement is not a function.

// function expression (hoisting does not work).
var retirement = function(year){
    console.log(65 - calculateAge(year));
}

retirement(1971);


// variables.

console.log(age); // undefined (javascript knows that will be a variable named 'age' whose value is not specified until runtime).In the other hand, if not 'age' variable is declared, the runtime throws the following error: 'Uncaught Reference Error: age is not defined'. Try it by commenting the following code line:

var age = 23;

console.log(age); // returns 23.


function foo(){
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this); // the window object.

calculateAge(1971);

function calculateAge(year){
    console.log(new Date().getFullYear() - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(new Date().getFullYear() - this.yearOfBirth);
        innerFunction();

        function innerFunction(){
            console.log(this);
        }
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//Method borrowing.
mike.calculateAge = john.calculateAge;
mike.calculateAge();






