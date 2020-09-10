let string = prompt("Введите строку ", 1)

fragmentArray = new Array()
fragment = ""
for(let i=0; i<=string.length; i++){
    if(fragment.length==3){
        fragmentArray.push(fragment)
        fragment = string[i]
    }else{
        fragment+=string[i]
    }
}
console.log("Fragments before: "+fragmentArray)
for(let i=0; i<fragmentArray.length;i++){
    fragmentArray[i] = fragmentBuilder(fragmentArray[i])
}
console.log("Fragments after: "+fragmentArray)

function fragmentBuilder(str){
    trigger = true
    let sym = getRandomSymbol()
    let resultString =""
    while(trigger){
        if(str[0]!=sym && str[2]!=sym ){
            resultString+=str[0]+sym+str[2]
            // str[1] = sym
            // console.log("Sym : "+sym)
            trigger = false
        }else{
            sym = getRandomSymbol()
        }
    }
    // console.log("Str in fun: "+resultString)
    return resultString
}

function getRandomSymbol(){
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let sym = possible.charAt(Math.floor(Math.random() * possible.length))
    return sym;
}

