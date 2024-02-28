// logical operator 

// And ---- &&

// true        &&        true   ========> true 
// false       &&        true   ========> false
// true        &&        false  ========> false 
// false       &&        false  ========> false

console.log( 5 == 5 && 6 == 6)
console.log( 6 != 6 && 7 == 7)
console.log( 6 == 6 && 7 != 7)
console.log( 6 == 7 && 8 == 7)

// Or  ---- ||

// true    ||    true   ======> true 
// false   ||    true   ======> true 
// true    ||    false  ======> true 
// false   ||    false  ======> false

console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)

// Not ------ !

//!  true   ----> false 
//!  false  ----> true 

console.log(!(8 == 8))
console.log(!(8 != 8))