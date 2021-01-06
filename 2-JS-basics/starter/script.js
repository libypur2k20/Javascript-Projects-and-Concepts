/*
Variables and data types

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/


/***************************************
 * Variable mutation and type coercion
 * 
 */

 /*
 var firstName = 'John';
 var age = 28;

 //Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;

 job = 'Teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. IS he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
alert('Full Name: ' + firstName + ', ' + lastName);

*/

/**************************************
 * 
 * Basic operators
 */

 /*
 var year = 2020;
 
 // Math operators
 var yearJohn = year - 28;
 var yearMark = year - 33;

 console.log(yearJohn,yearMark);
 console.log(year / 10);

 //Logical operators

 var johnOlder = yearJohn < yearMark;
 console.log(johnOlder);


 //typeof operator
 console.log(typeof(johnOlder));
 console.log(typeof(year));
 console.log(typeof('Mark is older than John'));

 var x;
 console.log(typeof(x));

 */

 /*************************************
  *  Operator precedence
  */

  /*
  var now = 2020;
  var yearJohn = 1989;
  var fullAge = 18;

  //Multiple operators
  var isFullAge = (now - yearJohn) >= fullAge;
  console.log(isFullAge);

  //Grouping
  var ageJohn = now - yearJohn;
  var ageMark = 35;
  var average = (ageJohn + ageMark) / 2;
  console.log(average);

  //Multiple assignments

  var x, y;

  x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
  console.log(x, y);

  //More operators

    x *= 2;
    console.log(x);

    x += 10;
    console.log(x);

    x++;
    console.log(x);

    */

    /******************************
     * CODING CHALLENGE 1
     */

     /*
     Mark and John are trying to compare their BMI (Body Mass Index), whick is calculated using the formula:
     BMI = mass / height ^2 = mass / (height * height).
     (mass in kg and height in meter).

     1. Store Mark's and John's mass and height in variables.
     2. Calculate both their BMIs
     3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
     4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

     GOOD LUCK 
        )

     */

     /*
     var johnHeight, markHeight;
     johnHeight = 1.85;
     markHeight = 1.80;
     var johnMass, markMass;
     johnMass = 85;
     markMass = 96;

     var johnBMI, markBMI;

     johnBMI = johnMass / (johnHeight * johnHeight);
     markBMI = markMass / (markHeight * markHeight);

     var isMarkBMIHigher = (markBMI > johnBMI);

     console.log('Mark\'s BMI: ' + markBMI);
     console.log('John\'s BMI: ' + johnBMI);
     console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher);
*/

/************************************
 * If / else statements
 */

 /*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married')
 {
    console.log(firstName + ' is married!');
 }
 else{
    console.log(firstName + ' will hopefully marry soon!');
 }
 */


 /*************************************
  * Boolean logic
  */
/*
var firstName = 'John';
var age = 26;

if(age < 13){
   console.log(firstName + ' is a boy.');   
}
else if(age >= 13 && age < 20){
   console.log(firstName + ' is a teenager.');
}
else if(age >= 20 && age < 30)
{
   console.log(firstName + ' is a young man.');
}
else{
   console.log(firstName + ' is a man.');
}
*/

/*****************************************
 * The Ternary Operator and Switch Statements
 */
/*
 var firstName = 'John';
 var age = 16;
 var drink;

 //Ternary Operator
 drink = (age >= 18 ? 'beer' : 'juice');

 console.log(firstName + ' drinks ' + drink);


 //Switch Statement
 var job = 'instructor';

 switch(job){
   case 'teacher':
   case 'instructor':
      console.log(firstName + ' teaches kids hoy to code.');
      break;
   case 'driver':
      console.log(firstName + ' drives an uber in Lisbon.');
      break;
   case 'designer':
      console.log(firstName + ' designs beautiful websites.');
      break;
   default:
      console.log(firstName + ' does something else.');
 }

 
var gender;
 switch(true){
    case (age < 13):
         gender = 'boy';
       break;
   case (age >= 13 && age < 20):
      gender = 'teenager';
      break;
   case (age >= 20 && age < 30):
      gender = 'young man';
      break;
   default:
      gender = 'man';
      break;
 }

 console.log(firstName + ' is a ' + gender);

 */

 /*************************************
  * 20. Functions
  */
/*
  function calculateAge(birthYear){
      return new Date().getFullYear() - birthYear;
  };

  console.log('My age is : ' + calculateAge(1971));


  function yearsUntilRetirement(birthYear, firstName){
      var yearsToRetire = 65 - calculateAge(birthYear);
      var msg = (yearsToRetire > 0 ? 
         firstName + ' will be retired in ' + yearsToRetire + ' years.' :
          firstName + ' has already retired.');
      return msg;

  };


  console.log(yearsUntilRetirement(1971,'Miguel'));
  */

  /******************************************
   * 21. Function Statements and Expressions
   */


// Function declaration
// function whatDoYouDo(job, firstName){}

// Function Expressions (always returns a value)
/*
var whatDoYouDo = function(job, firstName){

   var msg;

   switch(job)
   {
      case 'teacher':
         msg = ' teaches kids how to code.';
         break;
      case 'driver':
         msg = ' drives a cab in Lisbon.';
         break;
      case 'designer':
         msg = ' designs beautiful websites.';
         break;
      default:
         msg = ' does something else.'
         break;
   }

   return firstName + msg;
};

console.log(whatDoYouDo('designer','Miguel'));

*/


/******************************************
 * 22. Arrays (zero based)
 */
/*
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[0]);
 console.log(names);
 console.log(names.length);

 names[1] = 'Ben';
 console.log(names);

 names[5] = 'Mary';
 console.log(names);

 names[names.length] = 'Peter';
 console.log(names);
 console.log(names[3]);

 //Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];

 //Array methods.
 john.push('blue'); // 'push' adds an element to the end of the array.
 console.log(john);
 john.unshift('Mr.'); // 'unshift' adds an element at the beginning of the array.
 console.log(john);

 var popItem = john.pop(); // 'pop' removes an item from the end of the array.
 console.log(popItem, john);

 var shiftedElement = john.shift(); // 'shift' removes an element at the beginning of the array.
 console.log(shiftedElement, john);

 var itemPos = john.indexOf('teacher');
 console.log('Index of \'teacher\': ' + itemPos);
 console.log(john.indexOf('Miau'));

 john[john.indexOf('teacher')] = 'designer';
 var msg = (john.indexOf('teacher') === -1 ? 'John is NOT a teacher.' : 'John is a teacher.');
 console.log(msg);
 */

 /*********************************************
  * 23. Coding challenge 3.
  */
/*
  var billsArray = [124, 48, 268];

  var tipCalculator = function(tipAmount){

     var tipFactor = 0;

     switch(true){
        case (tipAmount < 50):
        tipFactor = 0.2;
        break;
        case (tipAmount >= 50 && tipAmount < 200):
           tipFactor = 0.15;
         break;
         default:
            tipFactor = 0.1;
         break;
     }

     return Number((tipAmount * tipFactor).toFixed(2));

  }

  var tipsArray = new Array();
  tipsArray.push(tipCalculator(billsArray[0]));
  tipsArray.push(tipCalculator(billsArray[1]));
  tipsArray.push(tipCalculator(billsArray[2]));

  var finalValues = [billsArray[0] + tipsArray[0],
                     billsArray[1] + tipsArray[1],
                     billsArray[2] + tipsArray[2]];

  console.log(billsArray);
  console.log(tipsArray);
  console.log(finalValues);
  */

  /*****************************************
   * 25. Objects and properties.
   */

   /*
   //Object literal
   var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1900,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false
   };

   console.log(john);
   console.log(john.firstName);
   console.log(john['lastName']);
   var x = 'birthYear';
   console.log(john[x]);

   john.job = 'designer';
   john['isMarried'] = true;

   console.log(john);

   //new Object syntax
   var jane = new Object();
   jane.name = 'Jane';
   jane.birthYear = 1969;
   jane['lastName'] = 'Smith';
   console.log(jane);
*/

/*****************************************
 * 26. Objects and methods
 */
/*
var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function(){
      this.age = (new Date().getFullYear() - this.birthYear);
   }
};

john.calcAge();
console.log(john);
*/


/***********************************************
 * 27. CODING CHALLENGE 4
 */
/*
 var john = {
   firstName: 'John',
   lastName: 'Smith',
   fullName : function(){
      return this.firstName + ' ' + this.lastName;
   },
   mass: 92,
   height: 1.95,
   calculateBMI: function(){
      return (this.BMI = Number((this.mass / (this.height * this.height)).toFixed(2)));
   }
 };


 var mark = {
   firstName: 'Mark',
   lastName: 'Simonds',
   fullName : function(){
      return this.firstName + ' ' + this.lastName;
   },
   mass: 85,
   height: 1.88,
   calculateBMI: function(){
      return (this.BMI = Number((this.mass / (this.height * this.height)).toFixed(2)));
   }
 };


 console.log('John\'s BMI: ' + john.calculateBMI());
 console.log('Mark\'s BMI: ' + mark.calculateBMI());
 
 var winner;

 if (john.BMI > mark.BMI)
   winner = john;
else if (mark.BMI > john.BMI)
   winner = mark;

 var msg;
 if (winner === undefined)
   msg = 'There is a draw.';
else
   msg = 'The winner is ' + winner.fullName() + ' with a BMI of: ' + winner.BMI;

console.log(msg);

*/

/******************************************
 * 29. Loops and Iteration
 */
/*
 //for loop
 for(var i = 0; i < 10; i++)
 console.log(i);

 for (var i = 1; i <= 20; i += 2)
 console.log(i);

 var john = ['John','Smith',1990,'designer',false];

 for(var i = 0; i < john.length; i++)
 console.log(john[i]);

 //while loop
 var i = 0;
 while(i < john.length){
    console.log(john[i]);
    i++;
 }
*/

 // continue and break statements.
/*
 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
 
 for (var i = 0; i < john.length; i++){
    if(typeof(john[i]) === 'string')
      console.log(john[i]);
   else
      continue;
 }

 for(var i = 0; i < john.length; i++){
    if (typeof(john[i]) !== 'string')
      break;
   console.log(john[i]);
 }

 for(var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
 }
 */

 /*************************************************
  * 30. CODING CHALLENGE 5
  */

  var john = {
   firstName: 'John',
   bills: [124, 48, 268, 180, 42],
   tips: new Array(),
   finalPaid: new Array(),
   tipCalculator: function(){
      var factor = 0;
      for(var i = 0; i < this.bills.length; i++){
         factor = (this.bills[i] < 50 ? 0.2 : (this.bills[i] >= 50 && this.bills[i] < 200) ? 0.15 : 0.1);
         this.tips[i] = this.bills[i] * factor;
         this.finalPaid[i] = this.bills[i] + this.tips[i];
      }
   }
  };

  john.tipCalculator();
  console.log(john);

  var mark = {
   firstName: 'Mark',
   bills: [77, 735, 110, 45],
   tips: new Array(),
   finalPaid: new Array(),
   tipCalculator: function(){
      var factor = 0;
      for(var i = 0; i < this.bills.length; i++){
         factor = (this.bills[i] < 100 ? 0.2 : (this.bills[i] >= 100 && this.bills[i] < 300) ? 0.1 : 0.25);
         this.tips[i] = this.bills[i] * factor;
         this.finalPaid[i] = this.bills[i] + this.tips[i];
      }
   }
  };

  mark.tipCalculator();
  console.log(mark);

  var calcAvgTip = function(tipArray){
      var subTotal = 0;
      for(var i = 0; i < tipArray.length; i++)
         subTotal += tipArray[i];

      return (subTotal / tipArray.length);
  };

  var johnAvgTips = calcAvgTip(john.tips);
  var markAvgTips = calcAvgTip(mark.tips);

  console.log('John\'s family tips avg: ' + johnAvgTips);
  console.log('Mark\'s family tips avg: ' + markAvgTips);

  var msg = '';
  switch(true){
     case (johnAvgTips > markAvgTips):
        msg = 'John\'s family paid the highest tips on average: ' + johnAvgTips;
        break;
      case (markAvgTips > johnAvgTips):
      msg = 'Mark\'s family paid the highest tips on average: ' + markAvgTips;
      break;
      default:
         msg = 'There is a draw.';
      break;
  }

  console.log(msg);