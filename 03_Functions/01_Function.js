
/*
1.same name functions override, and we get last function,
2.function defined by declaration can be hoisted.
3.if any function returning something then we need to store it somewhere so we use fun expression.
4. if we print function expression varible, it only print result if the fun is returning else undefined.
5. in fun, anything after return wont work
5

*/
sayMyName()
function sayMyName(){  //functionn declaration
    console.log("hello from functionn")
}

function addition(num1,num2){  //functionn declaration //here num1,num2 are called parameters
    return num1 + num2;
//console.log("hello from functionn 2")
}
const result = addition(13,5)//function expression //here values are called arguments
console.log(result)
//result() //terminalsays= result is not a function

function loginUserMessage(username){
    return `${username} logined two mins ago.`
}
console.log(loginUserMessage('saiprasad'))//also works


function isvalid(age){
    if(age){
        var varMsg = 'valid';
    }
    console.log(varMsg)
}
isvalid(22)

function defaultpara(name= "sai"){  //here we assiged a defalt parameter, if we didn't passed the argument in fun or passed undefined; it will print defult parameter, and if we pssed legit value in fun, itll override the default value.
    return `${name}`
}
console.log(defaultpara(undefined))


function calculateCartPrice(val1, val2, ...num1){ //rest operator here gives an array
    return `${val1} ${val2} ${num1}`
}
console.log(calculateCartPrice(200,45,100,645))


//functions with arrays=>
    const myarr = [100,200,300,500]
    function returnArray(getArray){
        return getArray[3]
    }
    console.log(returnArray(myarr))


//functions with object=>
    const user = {
        username: 'gagan',
        email: 'hc@gmail.com'
    }

    function funwithobj(getObject){
        console.log(`hello ${getObject.username}, how are you ${getObject.email} its your email`)
    }
    funwithobj(user)
