
// push()
// action 
// return type 

let cities = ['pune', 'mumbai', "nashik", "hyderabad", "goa"]
let q1 = cities.push("chennai");
console.log(cities);

cities.unshift("banglore")
console.log(cities)

cities.pop();
console.log(cities)

cities.shift();
console.log(cities)

let names = ["chinmay","sham","ram","satish"]
let v1 = names.push("sarika")
console.log(v1)
console.log(v1)
// unshift()
let v2 = names.unshift('poorva')
console.log(v2)
console.log(names)
// pop()
let fruits = ["apple","mango","banana","grapes"]
let v3 = fruits.pop()
console.log(v3)
console.log(fruits)
// shift()
let v4 = fruits.shift()
console.log(v4)
console.log(fruits)


// include display boolean value if element present it retuen true else false
let score = [11, 22, 33, 44, 55];
let q2 = score.includes(22);
console.log(q2);

let q3 = score.includes(101);
console.log(q3)

let city = ["banglore","kolkata","chennai","nagpur"]
let c1 = city.includes('Chennai')
console.log(c1)



// indexOf //

// check if element is present or not, if present return index no of given element else return -1

let cities1 = ['pune', 'mumbai', "nashik", "hyderabad", "goa"];
let q4 = cities1.indexOf("mumbai");
console.log(q4); // 1

let q5 = cities1.indexOf("Pune");
console.log(q5) // -1

let animals  =["tiger","lion","bear","cat"]
let s1  = animals.indexOf('lion')
console.log(s1)
let s2  = animals.indexOf('Lion')
console.log(s2)

// map //

// is used to perform operaion on all the element of array

let birthYear = [1987, 1988, 1986, 1985]

let q6 = birthYear.map(function(el){
    return 2023 - el
})

console.log(q6)

let numberlist = [11,22,33,44,55,66,77,88,99]
// [12,23,34,45,56,67,78,89,100]
let e3 = numberlist.map(function(el,index,arr){
    return el + 1
})
console.log(e3)

// map method on array object //

let users = [
    {firstName:"Shuchi", lastName:"Yadav"},
    {firstName: "Nathan", lastName: "Yadav"}
]

let fullName = users.map(function(el){
    return `${el.firstName} ${el.lastName}`
})
console.log(fullName);

const string = "India is my country"

const nerString = string.split('').reverse().join('');
console.log(nerString)

let original = "Hello World";
let reversed = [...original].reverse().join('');
console.log(reversed);

// filter //

let marks = [45,60,43,75,80,90];
let q7 = marks.filter(function(el){
    return el > 50
})
console.log(q7)
// find prime no using filter method

const array1 = [-3, -2, -1, 0 ,1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let q8 = array1.filter(function(el){
    return el % 2 === 0
})
console.log(q8)

let transactions = [11,22,33,44,-77,88,99,67,-89]

let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let  withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// reduce method //

let total = [11, 22, 33]
let q9 = total.reduce(function(acc, el, index, array){
    return acc + el;
}, 80)
console.log(q9)

// forEach()//
//The forEach() method calls a function for each element in an array.

let cities2 = ['pune', 'mumbai', "nashik", "hyderabad", "goa"];
let q10 = cities2.forEach(function(el){
    console.log("welcome " +  el)
})

console.log(q10)

// find()//
// The find() method returns the value of the first element that passes a test.
//The find() method returns undefined if no elements are found.

let number = [11,22,44,66,57]
let q11 = number.find(function(el){
    return el % 2 === 0
})
console.log(q11)

//findIndex//
//The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
//The findIndex() method returns -1 if no match is found. 

let numberA = [11,22,44,66,57]
let q12 = numberA.findIndex(function(el){
    return el % 2 === 0
})
console.log(q12)

//Every()//
//The every() method executes a function for each array element.
//The every() method returns true if the function returns true for all elements else false if the function returns false for one element.
let numberB = [11,22,44,66,57]
let q13 = numberB.every(function(el){
    return el > 10
})

console.log(q13)


// reverser()
let r1 = city.reverse()
console.log(city)
console.log(r1)

// at()
//               0         1           2           3
let country = ["india","pakistan","bangladesh","srilanka"]
let a1 = country.at(2)
console.log(a1)


// concat()

let a = [11,22,33]
let b = [44,55,66]

let c2 =  a.concat(b)
console.log(c2)
console.log(a)
console.log(b)

// join()
let info  = ["chinmay","deshpande",7709192441]
let q21 = info.join('-')
let q22 = info.join('@')
console.log(q21)
console.log(q22)


//                 0     1    2   3
let birthYears  = [1989,1990,1991,1992]
let ages = [] 

// [2023 -1989,2023 -1990,2023 -1991 , 2023 -1992]
// [35,34,33,32]

for(let i = 0 ; i < birthYears.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    let x = 2024 - birthYears[i]
    ages.push(x)
}
console.log(ages)


// program 2
//           0  1   2  3  4  5 6
let stdmarks = [11,44,66,88,33,44,55]
let above50 = []
// [66,88,55]

for(let i = 0 ; i < stdmarks.length ; i++){
    //console.log(i)
    //console.log(stdmarks[i])
    if(stdmarks[i] > 50){
        //console.log(stdmarks[i])
        above50.push(stdmarks[i])
    }
}
console.log(above50)

// program3

let numbers = [11,22,33] // 66
let gandtotal = 0
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    gandtotal = gandtotal + numbers[i]
    //       0    +      11   ------>11
    //       11   +      22   ------>33
    //       33   +      33   -------> 66
}
console.log(gandtotal)