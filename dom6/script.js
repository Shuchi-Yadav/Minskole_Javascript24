let bdy = document.querySelector('body')
bdy.addEventListener('click', function(event){
    console.log(event.target.className)
})