const parent = document.querySelector(".parent")
console.log(parent)
console.log(parent.children)

const child = parent.children

for(let i = 0; i < child.length; i++){
    console.log(child[i].innerHTML)
}
child[2].innerHTML = "sunday"

parent.children[2].style.color = 'red'
console.log(parent.firstElementChild)
console.log(parent.lastElementChild.innerText)
let day1 = document.querySelector('.day')
console.log(day1.style.color = 'darkBlue')

let mymonday = document.querySelector(".day")
console.log(mymonday.nextElementSibling.nextElementSibling)
console.log(parent.nextElementSibling.firstElementChild)