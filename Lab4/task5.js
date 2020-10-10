let str = prompt("enter : ")

let regexp = new RegExp(/\\/)

let arr = str.split(regexp)

console.log(arr);
for(i in arr){
    console.log(arr[i]+"\n");
}