//console.log(this) //in nodejs this will point to empty object

// // console.log(window) //window is not defined in nodejs

// console.log(global) //global is defined in nodejs

//function myfun(){
//    console.log (this) //this in regular function will point to global object //undefined
//}

//myfun() //this will point to global object in nodejs

let myobj = {
    name : 'sai',
    age : 22,
    myfun : function(){
        console.log(this)
    }
}

// myobj.myfun() //this will point to the current object which is calling the function

let myobj2 = {
    name : 'raj',
    age : 23
}

myobj2.myfun = myobj.myfun
myobj2.myfun() //this will point to the current object which is calling the function

let fun = myobj.myfun
fun() //this            