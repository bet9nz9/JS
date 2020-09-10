
let trigger = true
let num1 = 10
let num2 = 10

for(let num1 = 10; num1 < 100; num1++){
    for(let num2 = 10; num2 <100; num2++){
        if(!(numABBuilder(num1,num2)%99) && !(numBABuilder(num1,num2)%49)){
            console.log("Num1 : "+num1)
            console.log("Num2 : "+num2)
        }
    }
}

function numABBuilder(num1, num2){
    let AB = num1.toString() + num2.toString()
    return parseInt(AB)
}
function numBABuilder(num1, num2){
    let BA = num2.toString() + num1.toString()
    return parseInt(BA)
}