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
myarr.reverse();
for (let items of myarr) {
  if (items % 2 == 0) {
    continue;
  }

  console.log(items);
}

//filters==

let numbers = [2, 3, 1, 3, 52, 62, 66, 73, 227, 842, 8, 91];

console.log(numbers.sort((a, b) => a - b));

const even = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log(even, numbers);

let words = ["gagan", "suresh", "ram", "ac", "devi"];
const eg = words.filter((items) => items.length >= 3);
eg.sort((a, b) => a.length - b.length);
console.log(eg);

//map
let range = [2, 4, 5, 6, 7, 8, 22];
// let range2 = []
// range.forEach((num) =>{
//     range2.push(num+10)
//     // console.log(num+10)
// })
// console.log(range2)
const newarr = range.map((num) => num + 10);

console.log(newarr);

let users = [{ name: "A" }, { name: "B" }];

let usersWithId = users.map((user, i) => ({
  id: i + 1,
  ...user,
}));
console.log(usersWithId);

// let chainarr = [13, 42, 52, 22, 64, 2, 626, 71, 88];

// for (let chains of chainarr) {
//   if (chains<=1){
//     console.log('NONPRIMER')
//   }

//   let primearr = [];

//   for (let i = 1; i <= chainarr*chainarr; i++) {
//     if (chains % i == 0 && chains % chains == 0) {
//     } else {
//      return primearr.push(chains);
//     }
//   }
//   console.log(primearr);
// }

// chainarr.sort((a,b) => a-b).filter((num)=> num % 2)

let chainarr = [13, 42, 52, 22, 64, 2, 626, 71, 88];

function isprime(arr2) {
  if (arr2 <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(arr2); i++) {
    if (arr2 % i == 0) {
      return false;
    }
  }
  return true;
}

let prime = chainarr.filter(isprime);
console.log(prime);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let movies = {
  salman: ["sathiya", "ham apke hai kon?"],
  akshay: ["gabbar singh", "de dana dan"],
};

// console.log(movies.salman.map((num)=> num+2))

books.push({
  title: "Book Ten",
  genre: "Technology",
  publish: 2023,
  edition: 2025,
});

// console.log(books.filter((bk)=> bk.title === "Book Ten"))

let result = chainarr
  .map((arr) => arr * arr)
  .map((arr) => arr + 100)
  .filter((arr) => arr >= 700);
console.log(`the result is : ${result}`);

//reduce

let cornarr = chainarr.reduce((acc, curval) => {
  return acc + curval;
}, 0);
console.log(`the total sum of chain arr is : ${cornarr}`);

//eg5=>
const members = [
  { id: 1, name: "Alice", age: 28, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "David", age: 34, isActive: false },
  { id: 5, name: "Eva", age: 19, isActive: true },
];

const names = members.map((name) => name.name);
// console.log(names);

const greetings = members.map((member) => {
  return `hello ${member.name}, your id is ${member.id}, as you are ${member.age}. so you are ${member.isActive}`;
});
// console.log(greetings)

const OnlyActive = members.filter((member) => member.isActive);
// console.log(OnlyActive);

const above18 = members.filter((member) => member.age >= 18);
// console.log(above18);

const totalAge = members.reduce((sum, usr) => {
   return sum + usr.age;
 
}, 0);
// console.log("the total age is: " + totalAge);

const howmanyactive = members.reduce((count, user)=> count + user.isActive ,0)
console.log(howmanyactive)

const activeUppercase = members.filter(member=> member.age >= 18 && member.isActive).map(member=>member.name.toUpperCase());
console.log(activeUppercase)

const prices = [10.99, 5.49, 20, 7.5]
const tax = 0.1;

const priceaftertax = prices.map(price => price + price * tax).reduce((acc,cur)=> acc+cur,0)
console.log(`the final price of your cart amount after applying taxes are ${priceaftertax.toFixed(2)}`)

