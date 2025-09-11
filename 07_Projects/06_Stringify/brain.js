let input = document.querySelector("#text");
let upper = document.querySelector("#uppercase");
let lower = document.querySelector("#lowercase");
let clear = document.querySelector("#clear");
let showmsg = document.createElement("p");
let info = document.querySelector(".info");
const onedelete = document.querySelector("#delete");

// function deleteback(inputvalue){

// }

upper.addEventListener("click", (e) => {
  e.preventDefault();

  let upword = input.value;
  let uppercased = upword.toUpperCase();
  if (upword == uppercased) {
    showmsg.innerHTML = "this is alredy in upppercase";
    return;
  }

  function capital(up) {
    let newresult = up.toUpperCase();
    showmsg.innerHTML = newresult;
    showmsg.style.color = "white";
    showmsg.style.fontSize = "2rem";
    info.appendChild(showmsg);
  }
  capital(upword);
});

lower.addEventListener("click", (e) => {
  e.preventDefault();

  let upword = input.value;
  let lowercased = upword.toLowerCase();
  if (upword == lowercased) {
    showmsg.innerHTML = "this is alredy in lowercase";
    return;
  }

  function small(up) {
    let newresult = up.toLowerCase();
    showmsg.innerHTML = newresult;
    showmsg.style.color = "white";
    showmsg.style.fontSize = "2rem";
    info.appendChild(showmsg);
  }
  small(upword);
});

clear.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = " ";

  showmsg.innerHTML = " ";
});

onedelete.addEventListener("click", (e) => {
  e.preventDefault(); // prevent accidental form submission
  input.value = input.value.slice(0, -1);
});

