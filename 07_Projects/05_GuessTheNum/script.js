const randomNum = parseInt(Math.random()*100 + 1)

let submitbtn = document.getElementById('submt')
let userInput = document.getElementById('guessfield').value
let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

