// if no break applied, the switch will excute all code after meeting the significant case, except default..

let day = 2;

switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("please add date")
        break;
}

let seasons = 2;

switch(seasons){
    case 1: 
    console.log("winter")
    break;
    case 2: 
    console.log("summer")
    break;
    case 3: 
    console.log("rains")
    break;
}

let directions = "north"

switch(directions){
    case "east":
        console.log("sunrise")
        break;
    case "west":
        console.log("sunset")
        break;
    case "south":
        console.log("culture")
        break;
    case "north":
        console.log("delhi")
        break;
}