// switch case without break 

 let city = "Pune"
switch(city){
    case "Pune":
        console.log("MH")
    case "Jaipur":
        console.log("RJ")
     case "Bhopal":
        console.log("MP")
    default:
        console.log("Incorrect city")
 }




// switch case with break 


let city2 = "Indore"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break

    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect cityName")
}


// switch case with multiple case

let city3 = "bhopal"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
        
    case "indore":
    case "bhopal":
        console.log("MP")
        break

    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect cityName")
}