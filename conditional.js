// conditional statements


// if(condition){
//     // statetment
// }
// else {

// }

// age > 0 && age <= 5   =====> cycle allowed to drive
// age > 5 && age <= 10  =====> small bike
// age > 18              =====> bike

let age = 27;

if( age > 0 && age <= 5){
    console.log('cycle allowed to drive');
}
if( age > 5 && age <= 10 ){
    console.log("small bike allow to drive...")
}
if( age > 10){
    console.log("bike allowed to driver")
}

// one input  and multiple outcome

let numT  = 17

if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
if(numT > 10){
     console.log("15 % discount")
}

// if and else

if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
else if(numT > 10){
     console.log("15 % discount")
}
else {
    console.log("incorrect input")
}

let marks = 56

if(marks >= 90){
   console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

if(marks >= 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again")
}

let a = 10 
let b = 50

// if(a > b){
//     console.log("a is greater")
// }
// else {
//     console.log("b is greater")
// }

a > b ? console.log("a is greater"): console.log("b is greater")

let age1 = 17;

let q1 = age1 >=18 ? "can drive":"cannot drive";
console.log(q1);