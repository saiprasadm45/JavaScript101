for(let i = 1; i<=10; i++){
    console.log(`table of ${i}`)
    for(let j = 1; j<=10; j++){
        console.log(i + "*" + j + "=" + i*j)
    }
}

for(let i = 0; i<=10; i++){
    console.log(i)
    if(i==3){
        break; //breaks the flow
    }
}


// for(let i = 1; i<=20; i++){
//      if(i % 2 ==0){
//         continue; //breaks the flow
//     }
//     console.log(i)
   
// }