// const { log, reject } = require("async");
// const { reject } = require("async");
const { log } = require("console");
let myFile = require("fs/promises");
// const { resolve } = require("path");
// const { promiseHooks } = require("v8");
// log('start of the file')
// myFile.readFile('fileReadSync.txt','utf-8', cb)


// function cb(err,data){
//     if(data){
//         console.log(`the data is: ${data}`);
//     }else{
//    console.log(`the error is: ${err}`);
// }}

// let content = myFile.readFileSync('fileReadSync.txt','utf-8')
// console.log(content)
// log('end of the file')


// function promisifyFileread(){
//     return new Promise((resolve, reject)=>{
//         myFile.readFile('fileRadSync.txt', 'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// promisifyFileread().then((res)=>{
//     log(`the response is: ${res}`)
// }).catch((err)=>log(`err h bhai err: ${err}`))


// let mypromise = new Promise((resolve, reject) => {
//     myFile.readFile('fileReadSync.txt', 'utf-8', (err, data) => {
//         if(err){
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })

// mypromise.then((res) => {
//     log(`the result is: ${res}`)
// }).catch((err) => {
//     log(`the err is: ${err}`)
// })



async function readkaro(path) {
    try{
        const data = await myFile.readFile(path, 'utf-8')
        console.log(`the data is: ${data}`)
    }catch(err){
        console.log(`the err is: ${err}`)
    }
}

readkaro("fileReadSync.txt")


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

// let isUserLoggedIn = false;
// let isheWatchingShows = true;

// let promise = new Promise((resolve,reject)=>{
//     if(isUserLoggedIn){
//         reject('no user is not logged in')
//     }else if(isheWatchingShows){
//         reject('currently now show is happening')
//     }else{
//         resolve('thumbs up and subscribe')
//     }
// })

// promise.then((msg)=>{
//     console.log('the msg is : '+ msg)
// }).catch((err)=>{
//     console.log('the err is : '+ err)
// })

// let myFileforasync = require('fs').promises // need .promises for async function

// async function readmyFile() {
//     try{
//         let data = await myFileforasync.readFile('filereadSync.txt','utf-8')
//         console.log('the data from async fun '+ data)
//     }catch(err){
//         console.log('the error from await is '+ err)
//     }
// }

// readmyFile()

// setTimeout((a,b) => {
//     console.log(a+b)
// },2000, 22, 15);

// function counttill10(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve, 2000)
//     })
// }

// function main(){
//     for(let i = 1; i<=10; i++){
//         console.log(i)
//     }
// }

// counttill10().then(main)

// let wait = (ms)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms)
//     })
// }

// async function printtilln(n){
//       for(let i = n; i >= 1; i--){
//         console.log(i)
//         await wait(2000)
//     }
// }

// // printtilln(10)

// let isLightON = false;
// let p = new Promise((resolve, reject)=>{
//     if(isLightON){
//         resolve('oh polc agyi wo polc')
//     }else{
//         reject('chala ja .beep......')
//     }
// })
// p.then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// console.log(p)

// let mypromise = new Promise((resolve, reject)=>{
//     myFile.readFile('fileReadSync.txt','utf-8', (err, data)=>{
//         if(err) reject(err)
//             else resolve(data)
// })})

// mypromise.then((res)=>{
//     console.log('the result is '+ res)
// }).catch((err)=>{
//     console.log('the problem is '+ err)
// })

// let trimfile = new Promise((resolve, reject)=>{
//     myFile.readFile('fileReadSync.txt','utf-8',(err,data)=>{
//         if(err){
//             reject(err)
//         }else{
//             let info = data.trim()
//             resolve(info)
//             // resolve(data)
//         }
//     })
// })

// trimfile.then((res)=>{
//     console.log('the result is '+ res)
// }).catch((err)=>{
//     console.log('the problem is '+ err)
// })

// let cleanfile = new Promise((resolve, reject)=>{
//     myFile.readFile('fileReadSync.txt','utf-8',(err,data)=>{
//         if(err){
//             reject(err)
//         }else{
//             let info = data.split().
//             resolve(info)
//             // resolve(data)
//         }
//     })
// })

// cleanfile.then((res)=>{
//     console.log('the result is '+ res)
// }).catch((err)=>{
//     console.log('the problem is '+ err)
// })

// setTimeout(() => {
//   console.log("hello");
//   setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//       console.log("hola");
//     }, 3000);
//   }, 5000);
// }, 1000);

// function repeae(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }
// repeae(1000)
//   .then(() => {console.log("hello")
//             return repeae(5000)})
//   .then(() => {console.log("hi")
//             return repeae(3000)
//   })
//   .then(() => console.log("jola"));

// function waiting(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms)
//     })
// }

// (async function calling(){
//     try{
//         await waiting(1000)
//         console.log("hello")
//         await waiting(5000)
//         console.log("hi")
//         await waiting(3000)
//         console.log("hola")
//     }catch(err){
//         console.log(err)
//     }
// })()
