let firstName = "shuchi"
let q1 = firstName.repeat(2)
console.log(q1)

// chinmay
// 0123456

let q2 = firstName.substring(1,2)
console.log(q2)

let q3 = firstName.charAt(3)
console.log(q3)

let q4 = firstName.charCodeAt(3)
console.log(q4)

let vowels ="aeiou"
let count = 0;

for (let i =0 ;i<firstName.length ; i++){
    if(vowels.includes(firstName[i])){
        count = count + 1;
    }
}
console.log(count)

let count2 = 0
for (let i = 0; i < firstName.length; i++) {
    if (firstName[i] == 'a' || firstName[i] == 'e' || firstName[i] == 'i' || firstName[i] == 'o' || firstName[i] == 'o') {
        count2 = count2 + 1
    }
}



console.log(count2)

// program 6
let fruits = "apple mango banana orange papaya"
let userInput = "apple"

if(fruits.includes(userInput.toLowerCase())){
    console.log("fruits available")
}
else {
    console.log("fruit not available")
}