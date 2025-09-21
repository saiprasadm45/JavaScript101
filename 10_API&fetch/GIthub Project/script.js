let gitusername = document.querySelector("#username");
let myimg = document.querySelector(".myimg");
let profilelink = document.querySelector(".profileurl");
let Name = document.querySelector(".name");
let email = document.querySelector(".email");
let publicrepo = document.querySelector(".publicrepo");
let bio = document.querySelector(".bio");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");
let creation = document.querySelector(".creation");
let lastupdate = document.querySelector(".lastupdate");
let usernm = document.querySelector("#usrnm");
let button = document.querySelector("#btn");
let url = "https://api.github.com/users/";
let result = document.querySelector(".result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let realname = usernm.value;
  if (!realname) {
    result.innerHTML = `<h1 style='color: "red"'>ERROR : enter a valid username</h1>`;
  } else {
    fetch(url + realname)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => calling(data))
      .catch((err) => {
        // throw new Error("Something went wrong");
        result.innerHTML = `<h1>Error: ${err.message}</h1>`
        result.style.color = 'red'
        // gitusername.innerHTML = throw new Error("Something went wrong");
      });

    function calling(mydata) {
      let creationdate = mydata.created_at;
      let mycreate = new Date(creationdate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, " ");
      let lastupdated = mydata.updated_at;
      let myupdate = new Date(lastupdated)
        .toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, " ");
      myimg.style.display = "block";
      gitusername.innerHTML = `Username : ${mydata.login}`;
      myimg.src = mydata.avatar_url;
      Name.innerHTML = `Name : ${mydata.name}`;
      email.innerHTML = `EMAIL : ${mydata.email ?? "email not found"}`;
      bio.innerHTML = `BIO : ${mydata.bio ?? "Bio not found"}`;
      publicrepo.innerHTML = `Public repos : ${mydata.public_repos}`;
      profilelink.href = mydata.html_url;
      profilelink.innerHTML = `Profile URL`;
      followers.innerHTML = `Followers : ${mydata.followers}`;
      following.innerHTML = `Following : ${mydata.following}`;
      creation.innerHTML = `Account Created on : ${mycreate}`;
      lastupdate.innerHTML = `Last updated on : ${myupdate}`;
    }
  }
});
