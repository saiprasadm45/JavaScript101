let usernm = document.querySelector("#usrnm");
let button = document.querySelector("#btn");
let result = document.querySelector(".result");

let api_url = "https://api.github.com/users/";


let gitusername = document.querySelector(".username");
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

button.addEventListener('click', (e) => {
  e.preventDefault()
  let user = usernm.value.trim();
  if (!user) {
    showErrror('Please add a valid username')
    return;
  } else {
    usernm.value = "";
    fetchData(user)
  }
})

async function fetchData(username) {
  showLoading();
  clearUi()
  try {
    const Response = await fetch(api_url + username);
    if (!Response.ok){
    const errorData = await Response.json();
    return new Error(errorData.message ?? 'Something went wrong')
    }
    const Data = await Response.json();
    displayUser(Data);
  } catch (err) {
    showErrror(err.message)
  }
}

function displayUser(user) {
  myimg.style.display = 'block';
  myimg.src = user.avatar_url;
  gitusername.textContent = `@${user.login}`;
  Name.textContent = user.name ?? "No Name";
  email.textContent = user.email ?? "Email Not Available";
  publicrepo.textContent = `Public repos: ${user.public_repos}`;
  profilelink.href = user.html_url;
  profilelink.textContent = "View Profile";
  bio.textContent = user.bio ?? "No Bio";

  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;

  creation.textContent = `Created: ${formatDate(user.created_at)}`;
  lastupdate.textContent = `Updated: ${formatDate(user.updated_at)}`;

}

function showLoading() {
  result.textContent = 'Loading....'
  result.style.color = 'black'
}

function clearUi() {
  myimg.style.display = 'none';
  gitusername.textContent = "";
  Name.textContent = "";
  email.textContent = "";
  gitusername.textContent = "";
  publicrepo.textContent = "";
  profilelink.textContent = "";
  bio.textContent = "";
  followers.textContent = "";
  following.textContent = "";
  creation.textContent = "";
  lastupdate.textContent = "";
}

function showErrror(msg) {
  result.textContent = msg;
  result.style.color = 'red'
}

function formatDate(date) {
  return new Date(date).toLocaleString('en-GB')
}

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   let realname = usernm.value;
//   if (!realname) {
//     result.innerHTML = `<h1 style='color: "red"'>ERROR : enter a valid username</h1>`;
//   } else {
//     fetch(url + realname)
//       .then((Response) => {
//         return Response.json();
//       })
//       .then((data) => calling(data))
//       .catch((err) => {
//         // throw new Error("Something went wrong");
//         result.innerHTML = `<h1>Error: ${err.message}</h1>`
//         result.style.color = 'red'
//         // gitusername.innerHTML = throw new Error("Something went wrong");
//       });

//     function calling(mydata) {
//       let creationdate = mydata.created_at;
//       let mycreate = new Date(creationdate)
//         .toLocaleDateString("en-GB", {
//           day: "2-digit",
//           month: "2-digit",
//           year: "numeric",
//         })
//         .replace(/\//g, " ");
//       let lastupdated = mydata.updated_at;
//       let myupdate = new Date(lastupdated)
//         .toLocaleString("en-GB", {
//           day: "2-digit",
//           month: "2-digit",
//           year: "numeric",
//         })
//         .replace(/\//g, " ");
//       myimg.style.display = "block";
//       gitusername.innerHTML = `Username : ${mydata.login}`;
//       myimg.src = mydata.avatar_url;
//       Name.innerHTML = `Name : ${mydata.name}`;
//       email.innerHTML = `EMAIL : ${mydata.email ?? "email not found"}`;
//       bio.innerHTML = `BIO : ${mydata.bio ?? "Bio not found"}`;
//       publicrepo.innerHTML = `Public repos : ${mydata.public_repos}`;
//       profilelink.href = mydata.html_url;
//       profilelink.innerHTML = `Profile URL`;
//       followers.innerHTML = `Followers : ${mydata.followers}`;
//       following.innerHTML = `Following : ${mydata.following}`;
//       creation.innerHTML = `Account Created on : ${mycreate}`;
//       lastupdate.innerHTML = `Last updated on : ${myupdate}`;
//     }
//   }
// });
