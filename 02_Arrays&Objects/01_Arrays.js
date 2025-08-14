const myArray = [7,94,49,3598,17]
console.log(myArray[0])
console.log(typeof myArray)
console.log(myArray.push("node"))
console.log(myArray.length)
console.log(myArray[myArray.length-3]) // total array length is 6 ("node" is added) so -3 means 3, give item at index 3, strts from 0 i.e 3598.
console.log(myArray[1]="nayn") //replced first index 94 with "nayn"
console.log(myArray)
console.log(myArray[6]="added") //added cause existing arry had only 5 elements starting from 0, added "added" at 6 position
console.log(myArray.length) // array length strts from 1

for(const item of myArray){
    console.log(item)
}
myArray.forEach((value, index) => {
  console.log(index, value);
});

