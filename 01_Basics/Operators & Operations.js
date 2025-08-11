// arithmatic operations

let firstNum = 14;
let secondNum = 19;

console.log(firstNum + secondNum)
console.log(firstNum - secondNum)
console.log(firstNum * secondNum)
console.log(firstNum / secondNum)
console.log(firstNum % secondNum)
console.log(firstNum ** secondNum)


//console.log("5" * "2")  // only plus can perfom concat string; else remaining operations convert string to numb and perform task..
let value = 55;
let negvalue = -value;
// console.log(negvalue)

let Firstname = "john"
let Lastname = "geo"

let middlename = Firstname + Lastname;
// console.log(middlename)

// console.log("4" + 5) //45
// console.log(4 + "5") //45
// console.log("4" + 5 + 5) //455
// console.log(9 + "4" + 5) //945
// console.log(7 + 5 + "4") //124
// console.log(7 + 5 + "4" + 3) //1243
// console.log(7 + 5 + "4" + 3) //1243
// console.log(7 + 5 + "4" + 3 + "2") //12432

//whenver a string start all its next will be concate, until string comes it perform mathmatical operatins.


console.log(+"") //empty string return blank space, but +"" returnn 0
// console.log(true) gives true, but  (+true) gives 1
// console.log("") gives blank cause its string, but +"" gives 0 cause "" reflects zero




// for (let i = 1; i <= 10; i++) {
//      console.log(12 * i)
// }



// comparision operator


// console.log(15 > 27);
// console.log(29 > 27);
// console.log(5 >= 27);
// console.log(15 <= 28);
// console.log(15 != 27);
// console.log("5" == 5);
// console.log(24 !== "24");


// unary operator

let a = 24;
let b = 30;

console.log(++a)    //25
console.log(a++)    //25
console.log(a++)    //26
console.log(++a)    //28

console.log(--b)    //29
console.log(b--)    //29
console.log(b--)    //28
console.log(--b)    //26



// ternary operator

//syntax => (condition) ? "value 1" : "value 2"

let age = 19;
let status = (age >= 18) ? "can vote" : "can't vote"
console.log(status)

//assignment operator

let one = 5;
let two = one;
two = 4;
console.log(one)
console.log(two);

let d = 10;
console.log(d+=25);
console.log(d-=25);
console.log(d*=25);
console.log(d/=25);


//logical operators

let p = 44;
let q = 31;

console.log(p <= 50 && q == 31)

console.log(p >= 50 || q == 14 || q >= 30)

console.log(!false)