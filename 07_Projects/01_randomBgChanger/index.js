// let button = document.getElementById("bgchange");

// function getrandomcolor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color = color + letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// button.addEventListener("click", () => {
//   const newcolor = getrandomcolor();
//   document.body.style.backgroundColor = newcolor;
// });

let button = document.getElementById('bgchange')

function changecolor(){
  const letters = '0123456789ABCDEF';
  let color = "#"

  for(let i = 0; i < 6; i++){
    color = color + letters[Math.floor(Math.random() * 16)]
  }

  return color;
}
button.addEventListener('click', ()=>{
  const newcolor = changecolor()
  document.body.style.backgroundColor = newcolor;
})


// const button = document.getElementById('bgchange');

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// button.addEventListener("click", () => {
//   const newColor = getRandomColor();
//   document.body.style.backgroundColor = newColor;
// });
