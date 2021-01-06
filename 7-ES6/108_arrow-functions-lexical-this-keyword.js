//////////////////////////////////////////////////
/* 108. ARROW FUNCTIONS - LEXICAL 'THIS' KEYWORD*/
//////////////////////////////////////////////////

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        //Method call : 'this' points to the object.
        console.log(this.color,this.position);
        document.querySelector('.green').addEventListener('click',
        //Regular function call : 'this' points to the global object (browser window).
        function(){
            // In the browser window, both 'position' and 'color' are undefined.
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    },

    //Workaround
    clickMe2: function(){
        //Method call : 'this' points to the object.
        var self = this;
        document.querySelector('.green').addEventListener('click',
        //Regular function call : 'this' points to the global object (browser window).
        function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};

//box5.clickMe2();


const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', 
        // The arrow functions shares the 'this' keyword with its surrounding. 
        event => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

box6.clickMe();

/*
const box66 = {
    color: 'green',
    position: 1,
    //'this' references on the callback arrow function fails, 
    // because the 'this' keyword of its surrounding ( first arrow
    //funtion) is the window object.
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', 
        // The arrow functions shares the 'this' keyword with its surrounding. 
        event => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

box66.clickMe();
*/


// Function constructor.

function Person(name){
    this.name = name;
};

// ES5
Person.prototype.myFriends5 = function(friends){

    return friends.map(function(el){
        //'this' points to the global object (browser window).
        return this.name + ' is friends with ' + el;
    }.bind(this)); //'bind' creates a copy of the callback function where the 'this' keyword points to the current object.
};

var johnData = new Person('John');
var friends = ['Mark','Jane','Sam'];
console.log(johnData.myFriends5(friends));


// ES6

Person.prototype.myFriends6 = function(friends){
    return friends.map( el =>  `${this.name} is friends with ${el}.`);
};

console.log(new Person('Mike').myFriends6(friends));
