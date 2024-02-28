// slice()
//              0         1         2    3      4        5
let names = ["chinmay","shirish","ram","sham","sanjay","satish"]
//             -6       -5        -4       -3        -2     -1
//names.slice(startIndex, endIndex(not included))

console.log(names.slice(3))
console.log(names.slice(-5))
console.log(names.slice(1,5))
console.log(names.slice(1,-1))
console.log(names.slice(-5,5))
console.log(names.slice(-1,-5))

// splice()
//            0        1         2          3        4
let cities = ["pune","mumbai","bangalore","kolkata","chennai"] 
// cities.pop()
// cities.shift()
//cities.splice(index,numberOfTobeDeleted)

//cities.splice(1,2)
//console.log(cities)
//cities.splice(2,1)
//cities.splice(1,2,"nagpur","wardha","goa")

// fill()
//           0  1  2  3  4  5  6
let numA = [11,22,33,44,55,66,77]
let q = numA.fill('@',1,5)
console.log(q)

// flat()
//                        0                  1                2
//                0         1        0         1         0         1
let states = [["Nagpur","Wardha"],["Bhopal","Indore"],["Jaipur","Udaipur"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let a1 = states.flat()
console.log(a1)

// sort(only alphabets)

let fruits = ["apple","banana","grapes","chikoo"]
fruits.sort()
console.log(fruits)

// at()
//          0   1   2   3     4    5
let a11 = [111,222,333,4444,55555,66666] 
let b11 = a11.indexOf(333)
let b12 = a11.at(3)
console.log(b11)
console.log(b12)

// join()

let info = ["chinmay","deshpande",7709192441]
let w2 = info.join(' ')
console.log(w2)
console.log(typeof w2)

// lang  , framework , focus , exp
let n = [22,33,44]
n.reverse()
console.log(n)

let a = [22,33,44]
let b = [55,66,77]
let c = a.concat(b)
console.log(c)