let regConf = new RegExp(/([a-z]|[A-Z])/)
let regDot = new RegExp(/\d+(\.|\,)\d+/)

let str = prompt("enter num")

if(str.search(regConf)===-1){
    console.log(str);
    if((str.search(regDot))===-1){
        console.log(str);
    }else{
        let newStr = str.split(/(\.|\,)/);
        console.log(newStr);
        console.log(newStr[2]);
        console.log(newStr[0]);
    }
}