let p = 8;
let q = 4;

console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p % q);

function Calculator(p,q){
    console.log(p + q);
    console.log(p - q);
    console.log(p * q);
    console.log(p / q);
    console.log(p % q);
}
Calculator(20,10);

// function without parameter and without 

function addA(){
    console.log(6 + 3);
}

addA()
addA()

// function with parameter with return type

function addB(x,y){
    console.log(x+y)
}
addB(12,4);
addB(39,4)

// function with parameter and with return 
// 100 --- show 
// 100 - given ---- 100 + 100 , 100 - 50 , 100 / 20 , 100 * 0.10

function addC(x,y){
    return( x + y);
}
let q1 = addC(12, 7)

console.log(q1);
console.log(q1 + q1);
console.log(q1/5);
console.log(q1 * 0.10)
