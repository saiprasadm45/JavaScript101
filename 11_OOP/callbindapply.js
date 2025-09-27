// call => callthisfun.call(objectname, arg1, arg2, ...), where calling that fun with objectname as this and taking args for that callthisfun.
// apply => callthisfun.apply(objectname, [arg1, arg2, ...]), where calling that fun with objectname as this and taking args as array for that callthisfun.
// bind => let newfun = callthisfun.bind(objectname, arg1, arg2, ...), where creating a new function with objectname as this and taking args for that callthisfun. which returns newfun() to call that function.

//
function factory(name, model, salary, age) {
    this.name = name;
    this.model = model;
    this.salary = salary;
    this.age = age;


}


function printDetails(city, state) {
    console.log(`the name is ${this.name} and model is ${this.model} and salary is ${this.salary} and age is ${this.age} and city is ${city} and state is ${state}`);
}

let car1 = new factory('BMW', 'X5', 50000, 26);
let car2 = new factory('Audi', 'A6', 60000, 27);

printDetails.call(car1, 'New York', 'NY'); 
//




//
let greet = function (greeting, punctuation) {
    console.log(greeting + ' ' + this.name + punctuation);
};

let person = { name: 'Alice' };

greet.call(person, 'Hello', '!');
//

//
function setUsername(username){
    this.username = username;
}

function createusername (username, age, id){
    setUsername.call(this, username);
    this.age = age;
    this.id = id;
}

let u1 = new createusername('raj', 22, 2)
console.log(u1)
//


function studentMarks(...marks){
    this.marks = marks;
    this.total = function(){
        return this.marks.reduce((a,b) => a + b, 0);
    }
}

let student1 = new studentMarks(90, 80, 70, 60);
let student2 = new studentMarks(85, 75, 65, 95);

function congratsstudent(name){
    this.name = name
    console.log(`Congratulations ${this.name}! Your total marks are ${this.total()}.`);
}

congratsstudent.apply(student1, ['sai', 'raj']);
congratsstudent.apply(student1, ['raj']);
congratsstudent.apply(student2, ['rakesh']);

let myresult = congratsstudent.bind(student1, 'sai');
myresult();


//some examples by gpt5

function intro(city, country) {
    console.log(`My name is ${this.name} from ${city}, ${country}`);
}

const aadmi = { name: "Ravi" };

// Using call
intro.call(aadmi, "Mumbai", "India"); // My name is Ravi from Mumbai, India

// Using apply (pass args in array)
intro.apply(aadmi, ["Delhi", "India"]); // My name is Ravi from Delhi, India







const user = {
    name: "Surj",
    sayHi: function() {
        console.log("Hi, I'm " + this.name);
    }
};

//setTimeout(user.sayHi, 1000); // ❌ undefined — loses `this`
setTimeout(user.sayHi.bind(user), 1000); // ✅ Hi, I'm Surj







const person1 = {
    name: "Alice",
    greet: function(city) {
        console.log(`Hi, I'm ${this.name} from ${city}`);
    }
};

const person2 = {
    name: "Bob"
};

// Reuse greet from person1, but make it run as if it's person2
person1.greet.call(person2, "Delhi");  // Hi, I'm Bob from Delhi







const obj = {
    name: "Dino",
    speak() {
        console.log("I'm " + this.name);
    }
};

//const talk = obj.speak;  // Just storing function reference
//talk(); // ❌ undefined — 'this' is lost

const talk = obj.speak.bind(obj);
talk(); // I'm Dino
