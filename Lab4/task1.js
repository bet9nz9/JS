let list = ["Кузьмин Иван","Петров Петр","Федоров Иван"];
let str = "Кузьмин Иван, Петров Петр, Федоров Иван"

let replaceBy = "Иванов Иван"
let name = prompt("Enter name: ");
let regexp = new RegExp(name)

console.log(regexp);
let newStr = str.replace(regexp, replaceBy);
console.log(newStr);
