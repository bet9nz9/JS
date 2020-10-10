let userString = prompt("Enter string: ")

let arr = userString.split(/\s/)

for(i in arr){
    if(arr[i].length >= 15){
        arr[i] = "«абстр…ние»"
    }
}
console.log(arr);