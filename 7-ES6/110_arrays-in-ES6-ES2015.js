///////////////////////////////
/* 110. ARRAYS IN ES6/ES2015 */
///////////////////////////////

const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});
*/


//ES6

//from//
Array.from(boxes).forEach(curr => {
    curr.style.backgroundColor = 'dodgerblue';
});

//loops

//ES5
/*
for(var i = 0; i < boxes.length;i++){
    if(boxes[i].className === 'box blue')
    //if (boxes[i].classList.contains('blue'))
        continue;
    else
        boxes[i].textContent = 'I changed to blue!';
}
*/

//ES6

//for...of loop//
for(const curr of boxes){
    if (curr.className.includes('blue'))
        continue;
    else
        curr.textContent = 'I changed to blue ES6';
}


var ages = [12, 27, 8, 21, 14, 11];

//ES5
/*
var full = ages.map(function(curr){
    return curr >= 18;
})

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
*/

//ES6 

console.log(ages.findIndex(curr => curr >= 18));
console.log(ages.find(curr => curr >= 18));

//console.log(ages.filter(curr => curr >= 18));

const fullItems = ages.map((curr,index) => {
    if (curr >= 18)
        return [curr,index];
});

console.log(fullItems.filter(curr => curr !== undefined));