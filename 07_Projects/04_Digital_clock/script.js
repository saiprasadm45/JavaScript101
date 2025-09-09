const mydate = document.querySelector('.date')
const time = document.querySelector('.time')



setInterval(()=>{
let date = new Date()
mydate.innerHTML = date.toLocaleDateString();    
time.innerHTML = date.toLocaleTimeString();
},1000)