          /* notes */

/*  
    var ->  var is function scoped, can be redeclare and update. 
            can be used before declaretion, called Hosting; 
            can be initialize empty; gives undefined.

    let -> 
            let is block scoped, can't be redeclre in same scope.
            can be update.
            can't be used before declaration, called temporal dead zone.
            can be initialize empty; gives undefined.

    const ->
            const is constant;
            Must be initialized when declared.
            Cannot be reassigned, and update.

*/


// const age = 22;
// console.log(age);
// let a = 2; 
// let b = 5;
// console.log(a+b);
// console.log("hello my name is saiprasad and my age is "+age)



// // var age;
// // age = 25;  
// 

// a = 5; 
// console.log(a+b)

// var date = 25;
// console.log(date)
// date = 24;
// console.log(date)
//  date = 3;
// console.log(date)


// let address = "mumbai";
// console.log(address)

// {
//     let address = "pune"
//     console.log(address);
//     // var address = "bengal"
// }
// console.log(address)
// address = "benglureu"
// console.log(address)
// // var address;

// var country = "india";
// console.log(country)
// {
//     var country = "paris"
//     console.log(country)
// }
//     console.log(country)

//     country = "london"
//     console.log(country)


// let color = "blue";
//     console.log(color);
// var range = 1;
// console.log(range);
// var range = 25
// console.log(range);


// {
//     let range = 5;
//     console.log(range)
//     // console.log(color);
//     let color = "red";
//     console.log(color);

    
// }
    // console.log(range)
// range = 26;
// console.log(range);

//     // console.log(color);

// var price = 11;
// function dummy(){
//     console.log(range);
//     let people = "sai"
//     console.log(people);
//     let student = 3;
//     console.log(student);
//     var price = 1200
//     console.log(price)
// }
// let ans = new dummy();
// console.log(ans)
//     // console.log(people);
//     // console.log(student);
//     console.log(price)

// console.log(price)    //->   undefined
// var price = 25;
// price = 8;
// var price = "name"

// var lock;
// console.log(lock); //undefined

// function myfu(){
//     console.log(price);   ->   undefined
//     var price = "raj"
//     console.log(price);   ->   raj
// }
// myfu();
// console.log(price)     ->   25

// {
//     console.log(price);    // 25
//     var price = "raj"
//     console.log(price);     //raj
// }
// console.log(price)      // raj

// console.log(isDrink);   //Cannot access 'isDrink' before initialization
/*
let isDrink = true;
console.log(isDrink);  //true

{
let isDrink = 23;
console.log(isDrink);  //23
isDrink = false;
console.log(isDrink);  //false
}
console.log(isDrink);  //true

function checkLet(){
console.log(isDrink);  //true;
let surName = "john"
console.log(surName);  //johhn
surName = "avies"
console.log(surName)  //avies
}
checkLet()
// console.log(surName)  //undefined

let marks;
console.log(marks)
*/


// const age = 44;
// console.log(age)
// age = 33;
// console.log(age)
