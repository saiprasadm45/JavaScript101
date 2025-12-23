let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let myarr = ["flash", "batman", "shaktiman"];
let iv = 0;
while (iv < myarr.length) {
  console.log(`value is ${myarr[iv]}`);
  iv++;
}

let table = 1;
do {
  let ans = 0;
  ans = table * table;
  console.log(ans);
  table++;
} while (table <= 10);

console.log("hello ji kya haal chal, kaise hai ap log");

let ages = [53, 46, 43, 35, 23, 19, 16, 15, 9];

//  for(const nums of ages){
//     let result = (nums, ()=>{
//         return
//     })=> {

//     }
//  }

let greetings = "hello world";

for (const greet of greetings) {
  if (greet == " ") {
    continue
  }
  console.log(`each char is: ${greet}`);
}

let user = {
  name: "hitesh",
  age: 27,
  // [mySym] : "symbol",
  email: "hitesh@google.com",
  location: "mumbai",
  isLoggedin: false,
  LastLoginDays: ["saturday", "monday"],
  paisa: true,
//   greeting: function () {
//     console.log("hello user, welcome back");
//   },
};

for (let [keys] in user) {
  console.log([keys]);
}