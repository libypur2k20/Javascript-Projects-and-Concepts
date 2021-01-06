///////////////
/* 114. MAPS */
///////////////

//Create a Map
const question = new Map();
question.set('question','What is the official name of the latest mayor Javascript version?');
question.set(1, 'ES5');
question.set(2,'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct',3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');


//Retrieve data from a Map
console.log(question.get('question'));

//Get Map size.
console.log(question.size);

//Check if key exists
console.log(question.has('correct'));

//Delete entry
if(question.has(4)){
    //question.delete(4);
    console.log('Answer 4 is here');
}

//Empty the Map
//question.clear();
    
// Loop through a Map. //

//forEach
question.forEach((value,key,map) =>{
    console.log(`This is ${key}, and it's set to ${value}`);
});

//for...of
for(let [key,value] of question.entries()){
    //if (Number.parseInt(key))
    if(typeof(key) === 'number')
        console.log(`Answer ${key}: ${value}`);
}

const answer = parseInt(prompt('Write the correct answer'));

const checkAnswer = !isNaN(answer) && (answer === question.get('correct'));

console.log(question.get(checkAnswer));
