const marvel_heros = ['thor','ironman','spiderman']
const dc = ['superman','flash', 'batman']
console.table([marvel_heros,dc])
dc.push(marvel_heros) //['superman','flash', 'batman',['thor','ironman','spiderman']]
console.table([dc[2],dc[3],dc[-4],dc[6],dc[3][1]]) //dc[4] & dc[6]== undefined. //dc[3][1]= means [3] element of dc and 1st element of that 3rd element.

const combo = marvel_heros.concat(dc)
console.log(combo) //['thor','ironman', 'spiderman','superman','flash','batman',[ 'thor', 'ironman', 'spiderman' ]]

const marathi_actors = ["jitendra joshi", 'sachin', 'ashokmama']
const bollywood = ['akshay','govinda','salman','sunny deol']

const myArray = [...marathi_actors, ...bollywood, ...marvel_heros]; //spread operator
console.log(myArray);

console.log(Array.isArray(bollywood)) //Array.isArray gives boolean values if its array or not.
console.log(Array.from("544")) //Array.from string giving array, returns [] for numbers
console.log(Array.from({name: "hitesh"})) //intersting

//suppse we have multiple variables containing some value and we want array of that
//eg->
const score1 = 45
const score2 = "out"
const score3 = 310

console.log(Array.of(score1,score2,score3)) //Array.of convert other variabes to  array.

//sorting in arrays=>

let sorting= [35,26,25,633,2,6,73,72,8,3,2]
sorting.sort()
console.log(sorting) //   2, 2,  25, 26,  3, 35, 6, 633, 72, 73, 8 //cause sort by default convert all element into string, then its sort them alphabetically(lexicographic) order.
// Lexicographically, it compares the first character of each string:

// "2" comes before "25" and "26"

// "3" comes before "35"

// "6" comes before "633"

// and so on...

sorting.sort((a,b) => a - b) // a goes through 0 index, b thourhg 1, goes one step ahead everytime, if a-b gaves less than = 0 means a comes before b; if a-b gaves equal = 0 means both are equal; if a-b gaves greater than = 0 means b comes before a.
console.log(sorting)

let sorting2 = ['suresh',true, null, 4, undefined, 'nayan','nitin','navin','ayan','ahan'] // converts all them in string so 4 will first and rest. at last "undefined".
sorting2.sort()
console.log(sorting2)

console.log(sorting.reverse())

let mixedArray = [15454,4848,278,25,[484,39,[89,67,3],554,358,7],7893,1]
console.log(mixedArray.flat(Infinity)) // flat gives a new array, if there is array within array.

console.log(mixedArray.find(num => num < 100)) //Returns the first element in the array that satisfies the given condition. If none match, returns undefined.

let everyeven = [16,8,6,20,19,18]
console.log(everyeven.every(numbers => numbers % 2 ==0)) //takes function, return true if condition is true for all elemtns in array.

const someeven = [21,7,9,3,17,41]
console.log(someeven.some(num => num % 2 == 0)) ////takes function, return true if condition is true for any one of moment in array, stops chasing next one

const arr01 = [45,79,1,36,7,69,17,5]
console.log(arr01)
const arr02 = arr01.copyWithin(3,4,7)  // target index, start, end exclusive. // copies from the start index to last index-1, at given target index. //Copies part of the array to another location in the same array, without changing its size
console.log(arr02)
console.log(arr01)

const arrfill = [1,2,3,4,5,6,7]
console.log(arrfill)
const arrfill2 = arrfill.fill(0,2,4) // value to be filled, start, end exlusie // insert the value at start and last index-1, replacing orginal values
console.log(arrfill2)

// copywithin and fill done with orignal data.

//convert an obj into an array

let user = {
    name : "hitesh",
    age : 27,
    email : 'hitesh@google.com'
}

let arr1 = Object.entries(user)
console.log(arr1)

//array destructuring.

let num = [13,35,35,2]
let [a,b,,d] = num;
console.log(a,b,d)

let [p,q,r, ,g = 22] = num//default value
console.log(p,q,r,g);

let [first, ...remains] = num; //rest operator always gives result in array
console.log(first, remains) 