// // "use strict";
// // let vote = function(age){
// //     if(age >= 18){
// //         console.log('you can vote')
// //     }
// //     else{
// //         console.log("you can't vote")
// //     }
// // }

// // console.log(vote(22))




// function arise() {
//   console.log(this);
// }
// arise()
// let age = 21;
// const max = {
//   name: "gagan",
//   age: 27,
//   greet: function () {
//     console.log(`hello ${this.name}`);
//   },
//   hate: () => {
//     console.log(this.age);
//   },
// };

// const peoples = {
//   name: "ayush",
//   age: 17,
//   greet() {
//     console.log("ye bhi lelo");
//     return `ye lo bhaisab ${this.name}`;
//   },
// };

// // console.log(peoples.greet())
// // const aalu = peoples.greet()

// const aalu2 = peoples.greet();
// // const aalu3 = aalu2()
// // console.log(aalu3)
// console.log(aalu2);

// // console.log(aalu)
// // const hello = max.greet;
// // hello();
// // console.log(max.hate())
// // console.log(this.age)

// (function arise() {
//   let age = 24;
//   let work = "bcci";
//   console.log(`hello im ${age} year old & i work at ${work}`);
// })();

// // console.log(`hello im ${age} year old & i work at ${work}`);
// console.log("---------"); //in node env == In global scope,  this refers to an empty object ({}), || in Browser == In global scope, this refers to the window object..

// // function checkvoters(name, age) {
// //   this.name = name;
// //   this.age = age;

// //   function verification() {
// //     if (age >= 18) {
// //       return `hello ${name}, congratulations you can vote!`;
// //     } else if (age >= 58) {
// //       return `hello ${name} sir, just stay at your home our officers come at your door`;
// //     }else{
// //         return `sorry, ${name} you are ${age} year old, so you can vote after ${18 - age} years.`
// //     }
// //   }

// //   let app0 = verification();
// //   console.log(app0)
  
// // }

// // let person1 = new checkvoters('rajesh', 13)
// // let person2 = new checkvoters('rahul', 24)
// // let person3 = new checkvoters('jyotsing', 63)
// // console.log(person1.app0)


// class checkvoters {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         this.storereturn = () => {
//             if (age >= 58) {
//                 return `hello ${this.name},sir, just stay at your home our officers come at your door. `;
//             } else if (age >= 18) {
//                 return `hello ${this.name} sir, congratulations you can vote!`;
//             } else {
//                 return `sorry, ${this.name} you are ${this.age} year old, so you can vote after ${18 - this.age} years.`;
//             }
//         }

//         // this.result = storereturn();
//         // this.result = result;


//     }
    
    
// }

// let person1 = new checkvoters('rajesh', 13)
// let person2 = new checkvoters('rahul', 24)
// let person3 = new checkvoters('jyotsing', 63)
// console.log(checkvoters)
// // console.log(storereturn)
// console.log(person3.storereturn())


// console.log(person1.result)

// let brand = 'toyota';
// let color = 'blue'


// check the array and object are empty or 

let myarr = [];
if(myarr.length === 0){
    console.log("thisisemptyarray");
    
}

let emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("emmpty obj");
    
}
