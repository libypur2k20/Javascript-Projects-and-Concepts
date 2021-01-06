//////////////////////////////////
/* 107. ARROW FUNCTIONS: BASICS */
//////////////////////////////////

const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function(current, index, arr){
    return new Date().getFullYear() - current;
});

console.log(ages5);

// ES6

let ages6 = years.map( current => 
    new Date().getFullYear() - current
);

console.log(ages6);

ages6 = years.map((el, idx) => 
    `Age element ${idx}: ${new Date().getFullYear() - el}.`
);

console.log(ages6);

ages6 = years.map((el, idx) => {
    const now = new Date().getFullYear();
    const age = (now - el);
    return `Age element ${idx}: ${age}`;
});

console.log(ages6);

