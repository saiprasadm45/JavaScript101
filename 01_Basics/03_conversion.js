/* conversion */

//any comparision with NaN is always false


let isMarried = "sundar";
console.log(isMarried) //sundar
let nextans = Boolean(isMarried)
console.log(nextans) //true
console.log(typeof nextans) //Boolean

// for boolean -> 0, " " = false, 1,2.. "hitesh" = true

let temp2 = "22";
console.log(temp2) //"22"
console.log(typeof temp2) //string
let check1 = Number(temp2)
console.log(check1) //22
console.log(typeof check1)//Number

// for numbers -> numbers are numbers eg "22", but if string(eg. "2abv") then its nan its type number, if empty string then its 0.
// for string -> its directly convert and log as it is but the type change to string.
let temp = true;
console.log(temp)//true
console.log(typeof temp)//boolean
let check = String(temp)
console.log(check) //"true"
console.log(typeof check)//string


console.log("okey")
console.log(null == 0) // false 
console.log(null > 0)   //false (0 > 0)
console.log(null >= 0)  //true (0 >= 0)
// comparision operators and equality check operators work diffrently, comparisionns convert null to a number, treating as 0, thats why 

console.log(undefined == 0) //false
console.log(undefined > 0)  //false
console.log(undefined >= 0) //false
console.log(undefined <= 0) //false
console.log(undefined == null) //true //undefined only loosly equal to null

console.log(true > 0)//true 1=true
console.log(true >= 0)//true
console.log(false > 0)//false
console.log(true <= 0)//false
console.log(true >= "sarj") //false
console.log(true >= 12)//false
console.log(false >= '')//true
console.log("true" == true) //false

