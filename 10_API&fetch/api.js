// // console.log("hello")
// fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true")
//     .then((Response)=>{ let data = Response.json()
//         console.log(data)
//         console.log(Response);
        
//         calling(data)
//     })
//     .then(data => console.log(`the data is: ${data}`))
//     function calling(users){
        
//         Array.from(users).forEach((user) => {
//             console.log(`the user is : ${user.title}`)
//         })
//     }

let url = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true";

fetch(url)
    .then((Response)=>{
       return  Response.json()
    }).then((data)=>{
        // console.log('the data is ' , data)
        calling(data)
    }).catch((err)=>{
        console.log(`the error is : ${err}`)
    })

    function calling(info){
        console.log(info.current_weather.temperature)
    }