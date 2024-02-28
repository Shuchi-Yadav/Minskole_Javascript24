let firstLi = document.querySelector('li')
console.log(firstLi)

let nodeListOfFruits = document.querySelectorAll('li')
console.log(nodeListOfFruits)

for(let i = 0; i< nodeListOfFruits.length ; i++){
    console.log(nodeListOfFruits[i])
}

let elemeWithClassFri = document.querySelector('.fri')
console.log(elemeWithClassFri)

for( let i=0 ; i< elemeWithClassFri ; i++){
    console.log(elemeWithClassFri[i])
    elemeWithClassFri[i].style.backgroundColor = "blue"
}

let q1= document.querySelector('#three')
console.log(q1);

let q2 = document.querySelector('three')
console.log(q2)

let n1= document.querySelectorAll('veg')
console.log(n1);

//let hc = document.querySelectorByClassName('veg')
//console.log(hc)