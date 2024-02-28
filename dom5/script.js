let ulList = document.querySelector('ul');
console.log(ulList);

let input = document.querySelector('input')
console.log(input);

let idOne = document.querySelector('#one');
console.log(idOne);

idOne.addEventListener('click', function(){
    let fruitText = input.value; //"papaya"
    let newLi = document.createElement('li'); //<li></li>
    newLi.textContent = fruitText; //<li>Papaya</li>
    createButtons(newLi);
    ulList.appendChild(newLi);
    input.value='';
})

function createButtons(li){
    let remove = document.createElement('button')//<button></buttton>
    remove.textContent = "Remove";
    remove.classList.add('remove');
    li.appendChild(remove);

    let up = document.createElement('button');
    up.textContent = "Up";
    up.classList.add('up');
    li.appendChild(up)

    let down = document.createElement('button');
    down.textContent = "Down";
    down.classList.add('down')
    li.appendChild(down)
}

ulList.addEventListener('click', function(event){
    console.log(event.target.tagName);
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li = event.target.parentElement;
            let ul = li.parentElement;
            ul.removeChild(li);
        }
        else if(event.target.className == 'up'){
            let li = event.target.parentElement;
            let ul = li.parentElement;
            let prevLi = li.previousElementSibling;
            if(prevLi){
                ul.insertBefore(li, prevLi)
            }
        }
        else if(event.target.className == "down"){
            let li = event.target.parentElement;
            let ul = li.parentElement;
            let nextLi = li.nextElementSibling;
            if(nextLi){
                ul.insertBefore(nextLi, li)
            }
        }
        
    }
}
)