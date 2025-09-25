function user(name, age) {
    this.name = name;
    this.age = age;
}
user.prototype.print = function() {
    console.log(`The name of the user is ${this.name} and age is ${this.age}`);
}

let user1 = new user("John", 25);
// console.log(user1)
// user1.print()

let myname = 'Rakesh            '
console.log(myname.length)


String.prototype.TrueLength = function() {  
    console.log(`the length of the string is ${this.trim().length}`);
}

console.log(myname.TrueLength())

Object.prototype.printObject = function() {
    console.log(this);
}

let Obj2 = {
    name: "Rakesh",
    age: 26
}

Obj2.printObject();

//this is for current context, like who is calling this function.

delete Obj2.name;//deleting property
console.log(Obj2)