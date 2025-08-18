/*
1.same name functions override, and we get last function,
2.function defined by declaration can be hoisted.
3.if any function returning something then we need to store it somewhere so we use fun expression.
4. if we print function expression varible, it only print result if the fun is returning else undefined.
5. in fun, anything after return wont work
5 Function Declaration is hoisted with its body, so you can call it before it's defined.
6. Function Expression is assigned to a variable, and only the variable is hoisted, not the function body. So calling it before assignment causes an error.

*/
sayMyName(); //hoisted; function declartion can be hoisted, fun expression follows variables rules.
function sayMyName() {
  //functionn declaration
  console.log("hello from functionn");
}
var result = function addition(num1, num2) {
  //functionn expression //here num1,num2 are called parameters
  return num1 + num2;
};
console.log(result(4, 5)); //here passed values are called arguments

function loginUserMessage(username) {
  return `${username} logined two mins ago.`;
}
console.log(loginUserMessage("saiprasad")); //also works

function isvalid(age) {
  if (age) {
    var varMsg = "valid";
  }
  console.log(varMsg);
}
isvalid(22);

function defaultpara(name = "sai") {
  //here we assiged a defalt parameter, if we didn't passed the argument in fun or passed undefined; it will print defult parameter, and if we pssed legit value in fun, itll override the default value.
  return `${name}`;
}
console.log(defaultpara(undefined));

function calculateCartPrice(val1, val2, ...num1) {
  //rest operator here gives an array
  return `${val1} ${val2} ${num1}`;
}
console.log(calculateCartPrice(200, 45, 100, 645));

//functions with arrays=>
const myarr = [100, 200, 300, 500];
function returnArray(getArray) {
  return getArray[3];
}
console.log(returnArray(myarr));

//functions with object=>
const user = {
  username: "gagan",
  email: "hc@gmail.com",
};

function funwithobj(getObject) {
  console.log(
    `hello ${getObject.username}, how are you ${getObject.email} its your email`
  );
}
funwithobj(user);

const substract = function (num1, num2) {
  //this is called anonymous function, cause we haven't give the function name..
  return num1 - num2;
};
console.log(substract(15, 7));

let vote = (age) => { //this is arrow function.
  return age >= 18 ? "can vote" : "can't vote";
};
console.log(vote(17));
