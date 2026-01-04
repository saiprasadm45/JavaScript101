let input = document.querySelector("#text");
let upper = document.querySelector("#uppercase");
let lower = document.querySelector("#lowercase");
let clear = document.querySelector("#clear");
const onedelete = document.querySelector("#delete");
let info = document.querySelector(".info");
const totalchar = document.querySelector('#totalchar')
let showmsg = document.createElement("p");
info.appendChild(showmsg)

showmsg.style.margin = '0.6rem'
showmsg.style.fontSize = '2rem'
showmsg.style.fontWeight = '500'

function updateCharCount(text) {
  totalchar.textContent = `length of text is: ${text.length}`;
  totalchar.style.fontSize = "2rem";
  totalchar.style.color = "green";
  totalchar.style.fontWeight = '600';
}

function isvalidtext(text){
  let trimmed = text.trim();

  if(!trimmed) return false;
  if(/\d/.test(trimmed)) return false;

  return true;
}

upper.addEventListener('click', (e) => {
  e.preventDefault()

  let value = input.value;
 
  if(!isvalidtext(value)){
    showmsg.textContent = 'Enter only letters (no numbers or extra spaces)'
    showmsg.style.color = "red";
    return;
  }

  let cleanedValue = value.trim();

  if (cleanedValue === value.toUpperCase()) {
    showmsg.textContent = "Already uppercase";
    showmsg.style.color = "red";
    return;
  }

  showmsg.innerHTML = cleanedValue.toUpperCase();
  showmsg.style.color = 'black';
  updateCharCount(value)
})

lower.addEventListener('click', (e) => {
  e.preventDefault()

  let value = input.value;
  if(!isvalidtext(value)){
    showmsg.textContent = 'Enter only letters (no numbers or extra spaces)'
    showmsg.style.color = "red";
    return;
  }

  let cleanedValue = value.trim();

  if (cleanedValue === value.toLowerCase()) {
    showmsg.textContent = "Already lowercase";
    showmsg.style.color = "red";
    return;
  }

  showmsg.textContent = cleanedValue.toLowerCase();
  showmsg.style.color = 'black';
  updateCharCount(value)
})

clear.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = "";

  showmsg.textContent = "";

  totalchar.textContent = "";
});

onedelete.addEventListener("click", (e) => {
  e.preventDefault(); // prevent accidental form submission
  input.value = input.value.slice(0, -1);

  updateCharCount(input.value)
});

// function charcaluclate(inputvalue){
//   let length = input.value.length
//   totalchar.innerHTML = length
//   totalchar.style.fontSize = '2rem'
//   totalchar.style.color = 'green'
//   totalchar.style.fontWeight = '600'
// }

// upper.addEventListener("click", (e) => {
//   e.preventDefault();

//   let upword = input.value;
//   let uppercased = upword.toUpperCase();
//   if (upword == uppercased) {
//     info.appendChild(showmsg)
//     showmsg.style.color = "red";
//     showmsg.style.fontSize = "2rem";
//     showmsg.innerHTML = "this is alredy in upppercase";
//     return;
//   }

//   function capital(up) {
//     let newresult = up.toUpperCase();
//     showmsg.innerHTML = newresult;
//     showmsg.style.color = "black";
//     showmsg.style.fontSize = "2rem";
//     info.appendChild(showmsg);
//   }
//   capital(upword);

//   function charcaluclate(inputvalue) {
//     let length = inputvalue.length
//     totalchar.innerHTML = `length of text is: ${length}`
//     totalchar.style.fontSize = '2rem'
//     totalchar.style.color = 'green'
//     totalchar.style.fontWeight = '600'
//     totalchar.style.margin = '1rem'
//   }
//   charcaluclate(input.value)
// });

// lower.addEventListener("click", (e) => {
//   e.preventDefault();

//   let lowword = input.value;
//   let lowercased = lowword.toLowerCase();
//   if (lowword == lowercased) {
//     info.appendChild(showmsg)
//     showmsg.style.color = "red";
//     showmsg.style.fontSize = "2rem";
//     showmsg.innerHTML = "this is alredy in lowercase";
//     return;
//   }

//   function small(up) {
//     let newresult = up.toLowerCase();
//     showmsg.innerHTML = newresult;
//     showmsg.style.color = "black";
//     showmsg.style.fontSize = "2rem";
//     info.appendChild(showmsg);
//   }
//   small(lowword);
// });





