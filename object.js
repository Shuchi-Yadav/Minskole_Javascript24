// Object ---- properties and methods

let info = ["chinmay","deshpande",34,67]

let chinmay = {
    // key:values
    // property:values
    firstName:"chinmay",
    lastName:"deshpandne",
    age:34,
    rollNo:67
}
console.log(chinmay)
// retrive (dot notation and bracket notation)
console.log(chinmay.firstName)
console.log(chinmay['firstName'])
// update (dot notation and bracket notation)
chinmay.lastName = "dani"
chinmay['lastName'] = "deshmukh"
console.log(chinmay)
// add 
chinmay['language'] = "marathi"
chinmay.city = "pune"
console.log(chinmay)
//delete 
delete chinmay.firstName
delete chinmay['lastName']

vehicle = {
    color:"red",
    type:"sedane"
}

// retrive  // update // add // delete
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.regNo = 123
delete vehicle.color
// brakcet notation

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 123
delete vehicle['regNo']

//               0        1        2      3
let names = ["chinmay","shrish","rohit","ravi"]
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

for(let i = names.length -1 ; i > -1 ; i--){
    //console.log(i)
    console.log(names[i])
}


let ninad = {
    //property:values
    firstName:"ninad",
    lastName:"dani",
    age:34,
    rollNo:45
}
//console.log(ninad['firstName'])

for(let prop in ninad){
    console.log(prop,ninad[prop])
}







// let ninad2 = {
//     //property:values
//     firstName:"ninad",
//     lastName:"dani",
//     age:34,
//     rollNo:45
// }

// for(let x in ninad2){
//     console.log(x,ninad2[x])
// }

let students = [

    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34
    },
    {
        firstName:"tanmay",
        lastName:"dani",
        age:32
    },
    {
        firstName:"ninad",
        lastName:"dani",
        age:31

    }

]
console.log(students[2].firstName)