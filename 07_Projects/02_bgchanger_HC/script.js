let buttons = document.querySelectorAll(".button");
let body = document.getElementById("body");
let display = document.getElementById("display");
let show = document.createElement("h2");

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target);

    if (e.target.id == "gray") {
      body.style.backgroundColor = e.target.id;
      show.innerHTML = `you selected ${e.target.id}`;
      display.appendChild(show);
    }
    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
      show.innerHTML = `you selected ${e.target.id}`;
      display.appendChild(show);
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
      show.innerHTML = `you selected ${e.target.id}`;
      body.style.color = "white";
      display.appendChild(show);
    }
    if (e.target.id == "pink") {
      body.style.backgroundColor = e.target.id;
      show.innerHTML = `you selected ${e.target.id}`;
      display.appendChild(show);
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
      show.innerHTML = `you selected ${e.target.id}`;
      display.appendChild(show);
      body.style.color = "black";
    }
  });
});
