const parent = document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children)

const child = parent.children

for(let i = 0; i < child.length; i++){
    // console.log(child[i].innerHTML)
}
child[2].innerHTML = "sunday"

parent.children[2].style.color = 'red'
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild.innerText)
let day1 = document.querySelector('.day')
day1.nextElementSibling.style.color = 'green'
day1.nextElementSibling.style.fontWeight = '800'


let mymonday = document.querySelector(".day")
mymonday.classList.add("okey")
// console.log("hello" + mymonday.childNodes)

console.log(mymonday.nextElementSibling.nextElementSibling.innerHTML)
console.log(parent.nextElementSibling.firstElementChild.innerHTML)
console.log(parent.childNodes)

let hone = document.createElement("h1")
hone.className = 'hone'
hone.id = 'myid'
hone.setAttribute("title","generateAI")
// console.log(hone.style.color = 'red')
// parent.appendChild(hone)