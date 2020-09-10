let num = prompt("Число из 6 чисел", 6)

let sumFirst = 0
let sumSecond = 0

for(let i=0; i<num.length;i++){
    if(i<3){
        sumFirst+=parseInt(num[i])
    }else{
        sumSecond+=parseInt(num[i])
    }
}

if(sumFirst===sumSecond){
    alert("Сумма первых 3-х цифр равна сумме вторых 3-х")
}else{
    alert("Сумма первых 3-х цифр не равна сумме вторых 3-х")
}

