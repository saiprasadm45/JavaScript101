let buttons = document.querySelectorAll(".button");
let body = document.getElementById("body");
let display = document.getElementById("display");
let show = document.createElement("h2");

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target);
    const color = e.target.id;

    // using switch case
    switch (color) {
      case "gray":
        body.style.backgroundColor = e.target.id;
        show.innerHTML = `you selected ${e.target.id}`;
        display.appendChild(show);
        break;

      case "red":
        body.style.backgroundColor = e.target.id;
        show.innerHTML = `you selected ${e.target.id}`;
        display.appendChild(show);
        break;

      case "blue":
        body.style.backgroundColor = e.target.id;
        show.innerHTML = `you selected ${e.target.id}`;
        display.appendChild(show);
        break;

      case "pink":
        body.style.backgroundColor = e.target.id;
        show.innerHTML = `you selected ${e.target.id}`;
        display.appendChild(show);
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        show.innerHTML = `you selected ${e.target.id}`;
        display.appendChild(show);
        break;
    }

    //using ifelse
    
    // if (e.target.id == "gray") {
    //   body.style.backgroundColor = e.target.id;
    //   show.innerHTML = `you selected ${e.target.id}`;
    //   display.appendChild(show);
    // }
    // if (e.target.id == "red") {
    //   body.style.backgroundColor = e.target.id;
    //   show.innerHTML = `you selected ${e.target.id}`;
    //   display.appendChild(show);
    // }
    // if (e.target.id == "blue") {
    //   body.style.backgroundColor = e.target.id;
    //   show.innerHTML = `you selected ${e.target.id}`;
    //   body.style.color = "white";
    //   display.appendChild(show);
    // }
    // if (e.target.id == "pink") {
    //   body.style.backgroundColor = e.target.id;
    //   show.innerHTML = `you selected ${e.target.id}`;
    //   display.appendChild(show);
    // }
    // if (e.target.id == "yellow") {
    //   body.style.backgroundColor = e.target.id;
    //   show.innerHTML = `you selected ${e.target.id}`;
    //   display.appendChild(show);
    //   body.style.color = "black";
    // }
  });
});
