let username = NaN;
if(!username){
    console.log('invalid')
}else{
    console.log(username)
}

if(5>2){
    console.log(true)
}

let IsSalaryCredited = true;
let salary = 124473
if(IsSalaryCredited){
    if(salary >= 150000){
        console.log('buy iphone 15 pro max')
    }else if(salary >= 100000){ //nested
            console.log("lets stop")
        }
}

if(24>12) console.log("hello") //one line only

let userdebitcard = true;
let balance = false;
let loggedwithgoogle = false;
let loggedwithemail = true;

if(loggedwithemail || loggedwithgoogle){
    console.log("user logged in")
     if(userdebitcard && balance){
    console.log("you are ready to buy course")
     }


}
