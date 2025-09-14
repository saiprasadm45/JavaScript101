let btn = document.getElementById('hambtn')
let navlist = document.getElementById('ul')

btn.addEventListener('click',()=>{
    console.log("e")
    navlist.classList.toggle('show')
})