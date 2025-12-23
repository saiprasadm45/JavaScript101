const parent = document.querySelector(".parent")
// console.log(parent)
console.log(parent.children)

const child = parent.children

for(let i = 0; i < child.length; i++){
    console.log(child[i].innerHTML)
}
child[2].innerHTML = "sunday"

parent.children[2].style.color = 'pink'
// console.log(parent.lastElementChild.innerText)
// console.log(parent.lastElementChild.innerText)
let day1 = document.querySelector('.day')
console.log(day1.textContent)
console.log(day1.nextElementSibling.innerHTML)
// day1.nextElementSibling.style.color = 'green'
// day1.nextElementSibling.style.fontWeight = '800'


let mymonday = document.querySelector(".day")
mymonday.classList.add("okey")
// console.log("hello" + mymonday.childNodes)

// console.log(mymonday.nextElementSibling.nextElementSibling.innerHTML)
// console.log(parent.nextElementSibling.firstElementChild.innerHTML)
// console.log(parent.childNodes)

let hone = document.createElement("h1")
hone.innerHTML = 'my heading'
// hone.className = 'hone'
// hone.id = 'myid'
hone.style.color = 'red'
hone.style.fontSize = '1rem'
hone.style.textTransform = 'uppercase'
hone.style.letterSpacing = '0.7px'
hone.setAttribute("title","generateAI")
// console.log(hone.style.color = 'red')
let parent2 = document.querySelector('.parent2')
parent2.appendChild(hone)

let aday = document.createElement('div')
aday.setAttribute('class','day')
aday.innerHTML = 'Friday'
parent.appendChild(aday)


let addimg = document.createElement('img')
addimg.setAttribute('src', 'https://i.imgflip.com/86wkdg.jpg')
addimg.setAttribute('class','imghai')
addimg.style.width = '100px'
parent2.appendChild(addimg)
console.log(parent2.childNodes)

let lorem = document.createElement('p')
lorem.setAttribute('class','mypara')
lorem.innerHTML = 'lorem epsum and arisement'
lorem.style.color = 'red'

parent.insertBefore(lorem, parent.firstElementChild)
// parent2.appendChild(lorem)


const mewo = document.createElement('h1')
mewo.innerText = 'hello from h1'
mewo.style.fontSize = '2rem'
mewo.style.color = 'violet'
mewo.style.border = '3px solid red'
mewo.setAttribute('id','myhead')
console.log(mewo.innerHTML)
document.body.insertBefore(mewo, parent2)
console.log(document.body.firstChild)
// parent2.after()

const removing = document.getElementById('myhead')
removing.after(lorem)
// lorem.remove()

const learntoremove = parent2.children[2]
learntoremove.remove()

const newp = document.createElement('p')
newp.innerHTML = 'im new para'
// document.body.appendChild(newp)
document.body.replaceChild(newp, removing)

const bday = document.getElementById('bornday')
const newelment = document.createElement('h3')
newelment.innerHTML = 'im new h3 bhidu'
// parent.appendChild(newelment)
parent.replaceChild(newelment, bday)

const boldhai = document.createElement('h1')
boldhai.innerHTML = 'im bold'
boldhai.style.fontSize = '50px'
// document.body.insertBefore(boldhai, document.body.firstElementChild)
// parent.insertBefore(boldhai, parent.children[3])
// document.body.appendChild(boldhai)
parent.after(boldhai)

const wed = document.createElement('div')
wed.innerHTML = 'wednesday'
parent.replaceChild(wed, parent.children[2])


function addLanguage(...langName){
    const ul = document.querySelector('.language')
    langName.forEach((lang) => {
        const li = document.createElement('li')
        li.innerHTML = lang;
        ul.appendChild(li)
    })

    // const li = document.createElement('li');
    // li.innerHTML = langName
    // document.querySelector('.language').appendChild(li)
}

addLanguage('python','ruby')

function optimizelangadd (langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

optimizelangadd('c++')

let parent3 = document.querySelector('.language')

const secondLang = parent3.querySelector('li:nth-child(2)')
const newlang = document.createElement('li')
newlang.innerHTML = 'typescript'
// parent3.replaceChild(newlang, secondLang)
secondLang.replaceWith(newlang)

const firstlang = parent3.querySelector('li:first-child')
firstlang.outerHTML = '<li>Rust</li>'

const lastLang = parent3.querySelector('li:last-child')
lastLang.remove()