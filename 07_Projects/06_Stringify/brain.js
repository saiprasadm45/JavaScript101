let input = document.querySelector("#text");
let upper = document.querySelector("#uppercase");
let lower = document.querySelector("#lowercase");
let clear = document.querySelector("#clear");
let showmsg = document.createElement("p");
let info = document.querySelector(".info");
const onedelete = document.querySelector("#delete");
const totalchar = document.querySelector('#totalchar')
showmsg.style.margin = '0.6rem'
function charcaluclate(inputvalue){
  let length = input.value.length
  totalchar.innerHTML = length
  totalchar.style.fontSize = '2rem'
  totalchar.style.color = 'green'
  totalchar.style.fontWeight = '600'
}

upper.addEventListener("click", (e) => {
  e.preventDefault();

  let upword = input.value;
  let uppercased = upword.toUpperCase();
  if (upword == uppercased) {
    info.appendChild(showmsg)
    showmsg.style.color = "red";
    showmsg.style.fontSize = "2rem";
    showmsg.innerHTML = "this is alredy in upppercase";
    return;
  }

  function capital(up) {
    let newresult = up.toUpperCase();
    showmsg.innerHTML = newresult;
    showmsg.style.color = "black";
    showmsg.style.fontSize = "2rem";
    info.appendChild(showmsg);
  }
  capital(upword);

  function charcaluclate(inputvalue){
  let length = inputvalue.length
  totalchar.innerHTML = `length of text is: ${length}`
  totalchar.style.fontSize = '2rem'
  totalchar.style.color = 'green'
  totalchar.style.fontWeight = '600'
  totalchar.style.margin = '1rem'
}
charcaluclate(input.value)
});

lower.addEventListener("click", (e) => {
  e.preventDefault();

  let lowword = input.value;
  let lowercased = lowword.toLowerCase();
  if (lowword == lowercased) {
    info.appendChild(showmsg)
    showmsg.style.color = "red";
    showmsg.style.fontSize = "2rem";
    showmsg.innerHTML = "this is alredy in lowercase";
    return;
  }

  function small(up) {
    let newresult = up.toLowerCase();
    showmsg.innerHTML = newresult;
    showmsg.style.color = "black";
    showmsg.style.fontSize = "2rem";
    info.appendChild(showmsg);
  }
  small(lowword);
});

clear.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = " ";

  showmsg.innerHTML = " ";

  totalchar.innerHTML = "";
});

onedelete.addEventListener("click", (e) => {
  e.preventDefault(); // prevent accidental form submission
  input.value = input.value.slice(0, -1);
});

