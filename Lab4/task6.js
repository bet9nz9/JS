let regexp = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
let regexpNums = new RegExp(/\d{4,4}\d{11,11}$/)

let phoneNum = prompt("Enter phone number: ");

console.log(regexp.test(phoneNum));
console.log(regexpNums.test(phoneNum));

if(regexp.test(phoneNum) || regexpNums.test(phoneNum)){
    console.log(phoneNum);
}else{
    console.log("Phone num is not valid");
}