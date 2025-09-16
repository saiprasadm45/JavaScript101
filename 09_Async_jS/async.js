let myFile = require('fs').promises

// let content = myFile.readFileSync('fileReadSync.txt','utf-8')
// console.log(content)

// function cb(err,data){
//     if(data){
//         console.log(`the data is: ${data}`);
//     }else{
//    console.log(`the error is: ${err}`);
// }}

// myFile.readFile('fileReadSync.txt','utf-8', cb)

// function promisifyFileread(){
//     return new Promise((resolve,reject)=>{
//             myFile.readFile('fileReadSync.txt','utf-8',(err, data)=>{
//                 if(err){
//                     reject(err)
//                 }
//                 else{
//                     resolve(data)
//                 }
//             })
//     })
// }

// promisifyFileread().then((res)=>{
//     console.log(`the response is: ${res}`)
// }).catch((err)=>{console.log(err)})

// async function reading() {
//     try{
//         const data = await myFile.readFile('fileReadSync.txt','utf-8')
//         console.log(`the data is: ${data}`)
//     }
//     catch(err){
//         console.log(`the error is : ${err}`)
//     }
// }

// reading()

let isUserLoggedIn = false;
let isheWatchingShows = true;

let promise = new Promise((resolve,reject)=>{
    if(isUserLoggedIn){
        reject('no user is not logged in')
    }else if(isheWatchingShows){
        reject('currently now show is happening')
    }else{
        resolve('thumbs up and subscribe')
    }
})


promise.then((msg)=>{
    console.log('the msg is : '+ msg)
}).catch((err)=>{
    console.log('the err is : '+ err)
})
