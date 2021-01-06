/////////////////////////////
/* 113. DEFAULT PARAMETERS */
/////////////////////////////


//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

        this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;

    //default values.
    this.lastName = (lastName !== undefined ? lastName : 'Smith');
    this.nationality = (nationality != undefined ? nationality : 'american');
};

var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily',1983,'Diaz','spanish');

console.log(john);
console.log(emily);


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;

    //default values.
    this.lastName = lastName;
    this.nationality = nationality;
}

const mark = new SmithPerson('Mark',1995);
var jane = new SmithPerson('Jane',1970,'Morgan','swedish');

console.log(mark);
console.log(jane);