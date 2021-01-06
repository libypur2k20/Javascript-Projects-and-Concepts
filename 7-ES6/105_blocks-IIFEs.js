///////////////////////////
/* 105. BLOCKS ANS IIFEs */
///////////////////////////

// ES6 (block)
 {
    const a = 1;
    let b = 2;
}

console.log(a + b);  // Error -> a is not defined.

// ES5 (IIFE)

(function(){
    var c = 3;

})();

console.log(c);     // Error -> c is not defined.