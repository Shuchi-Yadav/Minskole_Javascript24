let head = document.querySelector('h1');
let inputText = document.querySelector('input');
let buttonE  = document.querySelector('button');

buttonE.addEventListener('click', function(){
    let colorTxt = inputText.value;
    console.log(colorTxt)
    head.style.color = colorTxt;
    inputText.value = '';
})