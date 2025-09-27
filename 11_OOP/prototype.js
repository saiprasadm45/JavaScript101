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


Object.prototype.sum= function() {
    console.log(this.a + this.b);
}

let Obj1 = {
    a: 10,
    b: 20
}

Obj1.sum();
// console.log(car2)

Object.prototype.printme = function(){
	console.log(`the username is ${this.username} and user's age is ${this.age}`)
}

let myobj = {
username : 'sai',
haslogin : true,
age : 22
}

console.log(myobj.username)
myobj.printme()

function arise(name,car,salary,age){
    this.name = name;
    this.car = car;
    this.salary = salary;
    this.age = age;

this.readme = function(){
        console.log(`the user age is ${this.age} and the salary is ${this.salary}`)
    }
}

let a1 = new arise('surj','maruti900',28900,22) 
a1.readme()

 function liabrary(book,catergory){
    this.book = book;
    this.catergory = catergory;
}

liabrary.prototype.read = function(){
    console.log(`the book name is ${this.book} and the catergory is ${this.catergory}`)}

let book1 = new liabrary('java','programming')
book1.read()    
