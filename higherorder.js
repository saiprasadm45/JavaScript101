// let find square of n number...
// if n = 3 it should return 9

//eg1

function square(number) {
  for (let i = 1; i <= number; i++) {
    let result = i * i;
    console.log(`the square of numbers till which contains ${i} is ${result}`);
  }
}

function callsquare(callingsquare, num) {
  return callingsquare(num);
}

console.log(callsquare(square, 4));

//eg2

function salutation(name) {
  return function (gender) {
    if (gender == "male") {
      console.log(`hello mr. ${name}`);
    } else if (gender == "female") {
      console.log(`hello mrs. ${name}`);
    } else {
      console.log(`${name} ayy chkke`);
    }
  };
}

let male = salutation("sai");
console.log(male("male"));
let girl = salutation("nndini");
console.log(girl("female"));
let trans = salutation("athrv");
console.log(trans("shemaale"));

//eg3=>

function factory(arr, fun) {
  let squaredarr = [];
  const result = arr.filter(fun);
  for (let items of result) {
    squaredarr.push(fun(items));
  }
  return squaredarr;
}

let myarr = [2, 4, 6, 8, 9, 11, 13, 14, 16];

function square(x) {
  if (x % 2 == 0) {
    return x * x;
  }
}

console.log(factory(myarr, square));

for (let i = 0; i <= myarr.length; i++) {
  if (myarr[i] % 2 == 0) {
    continue;
  }
  console.log(myarr[i]);
}
myarr.reverse()
for(let items of myarr){
    if(items % 2 == 0){
        continue
    }
    
    console.log(items)
}
