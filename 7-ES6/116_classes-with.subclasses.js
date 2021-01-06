//////////////////////////////////
/* 116. CLASSES WITH SUBCLASSES */
//////////////////////////////////


//ES5

var Person5 = function(name, yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Atlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    //Call superclass constructor.
    Person5.call(this,name,yearOfBirth,job);

    this.olympicGames = olympicGames;
    this.medals = medals;
}

//Inherit from person through prototype.
Atlete5.prototype = Object.create(Person5.prototype);

//Add function to Atlete5.prototype. Will only be accesible
//from Atlete5 instances, not from Person5 instances.
Atlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var atlete1 = new Atlete5('John',1990,'boxer','Athens',5);
console.log(atlete1);

atlete1.calculateAge();
atlete1.wonMedal();


//ES6

class Person6{
    constructor(name, yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}


class Atlhete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Atlhete6('John',1990,'swimmer',3,10);

console.log(johnAthlete6);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();