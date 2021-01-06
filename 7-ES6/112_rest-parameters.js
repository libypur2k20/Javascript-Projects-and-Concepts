//////////////////////////
/* 112. REST PARAMETERS */
//////////////////////////

//Function call with variable number of arguments.

//ES5
/*
function isFullAge5(){
    var yearNow = new Date().getFullYear();
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(curr){
        console.log((yearNow - curr) >= 28);
        
    });
};

console.log('ES5');
isFullAge5(1990,1999,1965);
isFullAge5(1990,1999,1965,2001,1971);

//ES6
//Rest parameter (...<parameter_name>)
function isFullAge6(...years){
    var yearNow = new Date().getFullYear();
    years.forEach(curr => console.log((yearNow - curr) >= 28));
};

console.log('ES6');
isFullAge6(1990,1999,1965);
*/


//ES5

function isFullAge5(limit){
    var yearNow = new Date().getFullYear();
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function(curr){
        console.log((yearNow - curr) >= limit);
    });
};

console.log('ES5');
isFullAge5(28,1990,1999,1965);
isFullAge5(28,1990,1999,1965,2001,1971);

//ES6
//Rest parameter (...<parameter_name>)
function isFullAge6(ageLimit,...years){
    var yearNow = new Date().getFullYear();
    years.forEach(curr => console.log((yearNow - curr) >= ageLimit));
};

console.log('ES6');
isFullAge6(28, 1990,1999,1965);