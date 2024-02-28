let addButton = document.querySelector('button')
console.log(addButton);

let inputText = document.querySelector('input');
console.log(inputText)

let ulList = document.querySelector('ul');
console.log(ulList);

addButton.addEventListener('click',function(){
    let fruitText = inputText.value;
    console.log(fruitText)
    let newli = document.createElement('li');
    newli.textContent = fruitText;
    ulList.appendChild(newli);
    inputText.value = ''
})