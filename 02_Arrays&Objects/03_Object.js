// object.freeze freezes the whole object thats mean we can't add new data, update it, delete it etc.
// object.seal() = we can't add or delete data, but can update it.
// object.assign() = used to combine multiple objects. (target, source) if everyone has same keys then last one print by overriding all., the returnedTarget is the same object as target. It does not create a new object. So returnedTarget === target is true ✅

//using constructor, called singleton -> Object.user

//using symbol ->
const mySym = Symbol('key1') 

//using literals->
let user = {
    name : "hitesh",
    age : 27,
    [mySym] : "symbol",
    email : 'hitesh@google.com',
    location : "mumbai",
    isLoggedin : false,
    LastLoginDays : ['saturday','monday'],
    "paisa" : true,
    greeting : function(){
        console.log("hello user, welcome back")
    }
}

/* 
    way to access object
console.log(user.name)
console.log(user['name'])
console.log(user["paisa"]) // only way to print "paisa".
*/

console.table([user[mySym], typeof mySym, typeof user[mySym]])

/* 
    to access symbol in object
        you must give object key names to symbol variable name, then key should be [symname]
        console.log(user)
*/
user.email = "saiprasad@chatgpt"
user['name'] = 'pankaj'
console.log(user.email)
console.log(user.name)
//Object.freeze(user) // use to freeze object, aftr this no changes would be affect.
// user.email = "saiprasad@myntra"
// user['name'] = 'ravi'
// console.log(user.email)
// console.log(user.name)

user.isLightOff = function(){
    console.log(`yes light is off. ${this.name}`)
}

console.log(user.greeting(), user.isLightOff())

console.log(user)
delete user["paisa"] // delete used to delete the key value pair of object
console.log(user)

let keys = Object.keys(user) // gives all keys of object
let values = Object.values(user) // gives all values of object, for function act as obj.fun not obj.fun() means {function: anonymous}
let entries = Object.entries(user) // gives object with key value pair, for function act as obj.fun not obj.fun() means {function: anonymous}

console.log(keys) //returned dataypes is array.
console.log(values) //returned dataypes is array.
console.log(entries) //returned dataypes is array.

console.log(user)
Object.seal(user)
// user.grade = 'B'
// delete user.isLoggedin
user.email = 'learningObject@com'
console.log(user)

let nestedobj = {
    name : "suraj",
    class : "fy-ba",
    age: 22,
    eudcation : {
        school : {
            primary : 'zpcps',
            secondary : "nutan",
            college : {
                hsc : 'yashwant',
                diploma : 'gramin',
                engineering : 'pes'
            }
        }
        
    }

}
console.log(nestedobj.eudcation.school.college.engineering = 'govpune')
console.log(nestedobj.eudcation.school.college.engineering) 

const data = {1 : 'a', 2 : 'b', 3 : 'c', 4 : 'd'}
const data2 = {5 : 'e', 6 : 'f', 7 : 'g', 8 : 'h'}

const finaldata = {...data, ...data2, 9 : 'i'}
// const finaldata = 
console.log(finaldata)


//convert a existing variables into an object => 

const place = 'mumbai'
const street = 'newyork'
const address = {
    place, street
}
console.log(address)

//custom key names for existing variabls into an obj =>

const kamkaj = "officer";
const nam = 'mohan'

let employee = {
    userName : nam, job : kamkaj
} 
console.log(employee)


let key = "score";
let obj = {
  [key]: 42 //here whenver we pass a variable inside [], and the variable value consider as a key of that obj
}; 
console.log(obj.score) //42
console.log(obj.key) //undefined
console.log(obj[key]) //42
console.log(obj["key"]) //undefined
console.log(obj) // {score : 42}


// object is referece data type, 
let p = {
    a : 'raj',
    b : 'kapoor'
}
let c = p;
c.a = 'rishi'
console.log(c,p)

//convert array into obj

let arr = ['a','b','c']
let zw = {...arr}
console.log(zw);

//custom keys for array into obj

let zw2 = {
    name : arr[0],
    name2 : arr[1],
    name3 : arr[2]
}
console.log(zw2);

//if global array has pairs array like [['name','sur'],['sur','22']]
let myArr = [['name','pankaj'],['age','22']]

let obj7 = Object.fromEntries(myArr)
console.log(obj7);
