/* ARRAYS */

//MUTABLE = MODIFY ORIGINAL ARRAY. = PUSH, POP, SHIFT, UNSHIFT,REVERSE, SORT, SPLICE, FILL, COPYWITHIN
//N0N/IMMUTABLE = RETURN NEW ARRAY/ COPY. = MAP, FILTER, REDUCE, CONCAT, SLICE, JOIN, INCLUDES, INDEXOF, LASTINDEXOF, FIND, FINDINDEX, EVERY, SOME , FLAT, FLATMAP


//accessing a value that dont exists gives -1, accessing a index that dont exists gives undefined



const myArray = [7,94,49,3598,17]
console.log(myArray[0]) 
console.log(typeof myArray) //object
console.log(myArray.push("node"))
console.log(myArray.length)
console.log(myArray[myArray.length-3]) // total array length is 6 ("node" is added) so -3 means 3, give item at index 3, strts from 0 i.e 3598.
console.log(myArray[1]="nayn") //replced first index 94 with "nayn"
console.log(myArray)
console.log(myArray[6]="added") //added cause existing arry had only 5 elements starting from 0, added "added" at 6 position
console.log(myArray.length) // array length strts from 1

// for(const item of myArray){
//     console.log(item)
// }
// myArray.forEach((value, index) => {
//   console.log(index, value);
// });

const arr = [7,5,689,14,78,7]
arr.pop() // remove last element
arr.push(6) // add element at last
arr.shift() //removes first element
arr.unshift(5) // add element at first
console.log(arr)
console.log(arr.includes(4)) //check weather this element exists or not, return true;
console.log(arr.indexOf(9)) // gives index of element, if no index exists gives -1
console.log(arr.lastIndexOf(5)) //gives an index of last similar element if exists

newarr = arr.join(); // returns string of an array; // not any changes in original array

console.log(newarr, typeof newarr)

const arrb = Array(7) //creates empty array size of 7 but can later increase.
arrb[0] = 0
arrb[1] = 1
arrb[2] = 2
arrb[3] = 3
arrb[5] = 4
arrb[4] = 5
arrb[7] = 7
arrb[8] = 8
arrb[6] = 6
arrb[9] = 9

// console.log(arrb)
 
const arrc = Array.of(7,7,5) //another way t0 create array
arrc[2] = "new"
arrc[3] = 'chaku'
arrc [7] = 'seven'
console.log(arrc[7], arrc.length)

// console.log(arrc, typeof arrc)

let arr2 = new Array(4, 5, 6); //using constructor
arr2[3]= 'hllo'
console.log(arr2, arr2[3])


console.log("before slice operation- ", myArray) //A [ 7, 'nayn', 49, 3598, 17, 'node', 'added' ]
const temparr = myArray.slice(0,3) // 7,'nayn',49 // includes 0,1,2 not 3(exclusive)
const temparr1 = myArray.slice(-4) // 3598, 17.....
const temparr2 = myArray.slice(-6,-1) // 'nayn' .....,node
const temparr3 = myArray.slice(-2,-6) // 'node'
const temparr4 = myArray.slice(4) // 17.....
const temparr5 = myArray.slice(2,6) // 49..... node
const temparr6 = myArray.slice(2, -3) //49 3598
const temparr7 = myArray.slice(5,1) // //node
// slice wont work if start > end, return nothinng, blank

console.log(myArray.slice(1, 6).reverse()) //it will reverse. → ['nayn', 49, 3598, 17, 'node']

console.table([temparr,temparr1,temparr2,temparr3,temparr4,temparr5,temparr6,temparr7])

console.log("after slice operation- ", myArray)
const reversingarra = myArray.reverse() // reverse array affects on real array it changes original ones.
console.log(myArray, reversingarra) //this will rsult-> [ 'added', 'node', 17, 3598, 49, 'nayn', 7 ]


/* splice */

//splice works on original data.

let spliceeg1 = myArray//.splice(0,3) // splice(start, deletecount) inclusive
// console.log(myArray, spliceeg1) 

let spliceeg2 = myArray.splice(1,0, "node", 'js', "successfuly")
console.table([myArray, spliceeg1])

let spliceeg3 = myArray.splice(4,1)
console.table([myArray, spliceeg3])

let spliceeg4 = myArray.splice(4,4,"now","learning","tailwind") //spliceeg4 contain deleted values not updated one.
console.table([myArray, spliceeg4])

