 /* Strings are immutable in JavaScript.
    This means once a string is created, it cannot be changed. 
    Any operation that seems to modify a string actually returns a new string. */


const experiment = "ILoveMyIndia"
const myName = "    Bharat is great countries"

console.log(experiment.charAt(4)) //returns char at each index starting from 0
console.log("Rajasthan".concat(myName)) //concat used to concate two string
console.log(myName.indexOf("a")) //gives index of letter; if the character not found return -1.
console.log(experiment.endsWith("c")) // check the string ends with given character not return boolean

//while finding indexOf, if the string contains same char more than once; it'll give you first char.

console.log(experiment.includes("L")) // works with one or more word, check does it include that words or not return boolean.
console.log(experiment.lastIndexOf("i")) //if a string contains same words multiple time, it will show you the last on.
console.log(myName.length) //returns length of whole word, starting from 0
console.log(experiment.replace("I","c"))// it will replace the first words/chars, takes two string by seperating comma, if string not found won't .

const state = 'Gujrat is always remains Gujrat'
console.log(state.replace('Gujrat','canada')) // this will only replace first Gujrat

console.log(state.replaceAll('Gujrat','canada')) //this will replace all words as many times they are.
console.log(experiment.startsWith("I")); // check the string start with given character not return boolean.
console.log(experiment[3]) //similar to experiment.at(3) //returns char at 3rd index.
console.log(experiment[-3]) //gives undefined
console.log(experiment.toUpperCase()) //upercase
console.log(experiment.toLowerCase()); //lowercase
console.log(experiment.trim())
console.log(myName.trim()) //only remove white space around string notinside [ trim(), trimStart(), trimEnd()]

console.log(experiment.repeat(5)) //repeats the string value provided times

console.log(experiment.split(" ")) // converts a string into an array

let array1 = ["a", "b", "c"]
console.log(array1.join("-")) //join is mainly for array, but we often use for reversing string (join convert array into string)


function reverseString(myName){
    console.log(myName.split('').reverse().join(''))
}
reverseString("rajesh khanna")

let city = "jamshedpur"
console.log(city.slice(0, 4)) // extract part of string takes to value first is start and end-1
console.log(city.slice(4)) //if single value provided it starts from there
console.log(city.slice(4,8)) // starts from first value to end-1
console.log(city.slice(-7)) //if one negative value provided length - value , and it will start from there.
console.log(city.slice(-7,-4)) //length - values so 10-7=3, 10-4=6 so starts from 3, 6
console.log(city.slice(-4,-7)) // wonnt work because must be start < end; returns empty
console.log(city.slice(4,-2)) // start from 4 and go till 8.

const gameName = new String("hitesh-hc")
console.log(gameName.substring(0,4)) //substring is similar to slice it dont take negative value, it will flip value if firstvalue > secondvalue
console.log(gameName.substring(-3)) //negative value become 0

console.log(gameName.substring(6,2)) // flip values because start > end; 
