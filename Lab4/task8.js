let regexp = new RegExp("(ик)$");

let str = prompt("enter string: ");

let string = str.split(/\s|\,\s|\,|\./);
console.log(string);
string = string.map(el => el.replace(regexp, ""));
console.log(string);