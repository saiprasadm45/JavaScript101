//awaits with rejected promise throws error and once error throrws its directly goes to catch skipping reminaing lines.

// function returning(arr) {
//   let filtered = arr.filter((user) => {
//     return user.age > 18 && user.gender == "male";
//   });
//   return filtered;
// }

const { log } = require("console");
const { stripTypeScriptTypes } = require("module");

// const users = [
//   {
//     name: "sai",
//     age: 27,
//     gender: "male",
//   },
//   {
//     name: "priya",
//     age: 22,
//     gender: "female",
//   },
//   {
//     name: "raman",
//     age: 11,
//     gender: "male",
//   },
// ];
// console.log(returning(users));



// let fs = require('fs')

// let readmyfile = fs.readFileSync("fileReadSync.txt",'utf-8')
// console.log(readmyfile)

// console.log("Hello");
// setTimeout(() => {
//   console.log("inside setT after 10s");
// }, 10000);
// console.log("Hello2");
// setTimeout(() => {
//   console.log("inside setT after 5s");
// }, 5000);
// console.log("Hello3");
// setTimeout(() => {
//   console.log("inside setT after 2s");
// }, 2000);
// console.log("Hello4");
// setTimeout(() => {
//   console.log("inside setT after 3s");
// }, 3000);
// console.log("hello5");



// setTimeout(() => {
//   console.log(2);
//   setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//       console.log(6);
//       setTimeout(() => {
//         console.log(8);
//         setTimeout(() => {
//           console.log(10);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(
//     1, () => {
//         console.log("getting data2 ....");
//         getData(2, () => {
//             console.log("getting data4 ....");
//             getData(4, () => {
//                 console.log("getting data6 ....");
//                 getData(6, () => {
//                     console.log("getting data8 ....");
//                     getData(8, () => {
//                         console.log("getting data10 ....");
//                         getData(10);
//                     });
//                 });
//             });
//         });
//     });


// function mynewFun(number){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(number)
//             resolve()
//         },2000)
//     })
// }

// mynewFun(2).then(()=> mynewFun(4)).then(()=>mynewFun(6))

function checkevenorodd(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 == 0) {
                resolve(`the number is even : ${number}`)
            }
            else {
                reject(`the number is odd : ${number}`)
            }
        }, 3000)
    })
}


// checkevenorodd(4).then((result)=>{
//     console.log(`inside then: ${result}`)
// })
// .catch((error)=>{
//     console.log(`inside catch : ${error}`)
// })
// .finally(()=>{
//     console.log(`inside finally : Done chekcing number`);
// })


// async function checknum() {
//   try {
//     const res1 = await checkevenorodd(22);
//     console.log(res1);

//     const res2 = await checkevenorodd(17);
//     console.log(res2);

//     const res3 = await checkevenorodd(47);
//     console.log(res3);
//   } catch (error) {
//     console.log(`❌ the error is: ${error}`);
//   }
// }

// checknum()

async function safecheck(num) {
    try{
        const res = await checkevenorodd(num);
        console.log(res);
    } catch(err){
        console.log(err)
    }
}

async function checknum() {
    await safecheck(22);
    await safecheck(17);
    await safecheck(47)
}

// checknum()


function waitfor3s(resolve){
    setTimeout(resolve,5000)
}

let settimeoutpromisified = ()=>{
    return new Promise(waitfor3s)
}

function main(){
    console.log('main is calling')
}

settimeoutpromisified().then(main)