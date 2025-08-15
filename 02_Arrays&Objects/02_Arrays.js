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


  
