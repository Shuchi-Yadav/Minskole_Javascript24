let info = {
    firstName: 'chinmay',
    lastName : "Deshpande",
    rollNo : 23
}

// object keys or properties are always string 
// map can have any datatype as property
// object and map both stores the item in property-value  / key-value 

//program 1
let mapA = new Map()
console.log(mapA)

mapA.set(1, 'admin')
mapA.set(2, "manager")
mapA.set(3, "teacher")
mapA.set(4,'customer')
console.log(mapA)

//size

let q1 = mapA.size
console.log(q1)

let mapB = new Map(
    [
        [1, "admin"],
        [2, "administraor"],
        [3, "teacher"],
        [4, 'nurse']
    ]
)

console.log(mapB)
console.log(mapB.size)

let r1 = mapB.has(5) 
console.log(r1)

let r2 = mapB.get(4)
console.log(r2)


mapB.forEach(function(v,p){
    console.log(v,p)
})

mapB.delete(3)
console.log(mapB)

for(let k of mapB.keys()){
    console.log(k)
}

for(let v of mapB.values()){
    console.log(v)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}