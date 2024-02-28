//             0         1        2        3       4
let names = ["minal","poorva",'shraddha',"sachin","ram"]
console.log(names[0])
console.log(names[1])

// array stores the by by index??
console.log(names[2])

// how to length of array
let q1 = names.length
console.log(q1)

for(let i = 0 ; i < 5 ; i++){
    console.log(i)
}

// program 2
//              0       1      2     3
let animal = ["tiger","lion","cat","dog"]
console.log(animal[0])
console.log(animal.length)
for(let i = 0 ; i < animal.length ; i++){
    //console.log(i)
    console.log(animal[i])
}

// program 3
//              0        1       2        3
let fruits = ["mango","apple","banana","chikoo"]
console.log(fruits[0])
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}

// program 4
// print the element in reverse 
// length - 1 is always lastIndex

for(let i = fruits.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(fruits[i])
}


// program 5
//              0        1      2       3      4
let animals = ["tiger","lion","cat","monkey","rabbit"]
for(let i = 0 ; i < animal.length ; i++){
    //console.log(i)
    //console.log(animals[i])
    if(animals[i] == "monkey"){
        break
    }
    console.log(animals[i])
}

//               0      1        2        3
let flowers = ["rose","lily","jasmine","sunflower"]
for(let i = 0 ; i < flowers.length ; i++){
    //console.log(i)
    //console.log(flowers[i])

    if(flowers[i] == "jasmine"){
        continue
    }
    console.log(flowers[i])
}

// program 6
//                0         1         2           3
let country =  ["india","srilanka","bangladesh","nepal"]
console.log(country)
let y = 0
while(y < country.length){
    //console.log(y)
    console.log(country[y])
    y = y + 1

}