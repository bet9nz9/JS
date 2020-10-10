// Дана строка. Разделить строку на фрагменты по три подряд идущих
// символа. В каждом фрагменте средний символ заменить на случайный символ, не
// совпадающий ни с одним из символов этого фрагмента. Показать фрагменты,
// упорядоченные по алфавиту.

let string = prompt("Введите строку ", 1)

fragmentArray = string.split(" ")

console.log("Fragments before: "+fragmentArray)
for(let i=0; i<fragmentArray.length;i++){
    fragmentArray[i] = fragmentBuilder(fragmentArray[i])
}
console.log("Fragments after: "+fragmentArray.sort())

function fragmentBuilder(str){
    trigger = true
    let sym = getRandomSymbol()
    let resultString =""
    while(trigger){
        if(str[0]!=sym && str[2]!=sym ){
            resultString+=str[0]+sym+str[2]
            trigger = false
        }else{
            sym = getRandomSymbol()
        }
    }

    return resultString
}

function getRandomSymbol(){
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let sym = possible.charAt(Math.floor(Math.random() * possible.length))
    return sym;
}

