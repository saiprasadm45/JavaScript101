let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#name").value.trim();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.getElementById("result");

  result.innerHTML = " ";
  //   result.style.color = "red";

  if (!userName) {
    result.innerHTML = "name is required";
    return;
  } else if (!isNaN(userName)) {
    result.innerHTML = "name should be text, not a number";
    return;
  } else if (!isNaN(userName[0])) {
    result.innerHTML = "name should not start with number";
    return;
  }

  for (let i = 0; i < userName.length; i++) {
    if (!isNaN(userName[i]) && userName[i] !== " ") {
      result.innerHTML = "name shouldnt contain number";
      return;
    }
  }

  if (!height || isNaN(height) || height <= 0 || height > 300) {
    result.innerHTML = "please enter a valid height";
    return;
  } else if (!weight || isNaN(weight) || weight <= 0 || weight > 200) {
    result.innerHTML = "please enter a valid weight";
    return;
  } else {
    // let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmi = (weight / (height / 100) ** 2).toFixed(1);

    function category(bodymass) {
      if (bodymass <= 18.6) {
        return "underweight";
      }

      if (bodymass >= 18.6 && bmi <= 24.9) {
        return "healthy";
      }
      if (bodymass >= 24.9) {
        return "Overweight";
      }

    }
      let finalresult = category(bmi);
    result.style.backgroundColor = 'greenYellow'
    result.style.borderRadius = '15px'
    result.style.padding = '2rem'
    result.style.margin = '1rem'
    result.innerHTML = `<span>hello ${userName}, your bmi is: ${bmi} & your category is: ${finalresult}</span>`;
    return;
  }
});
