// 120 напишите функцю, вычисляющую площадь треугольника, если известны длины его сторон
let a = parseInt(prompt("Сторона 1: ",0))
let b = parseInt(prompt("Сторона 2: ",0))
let c = parseInt(prompt("Сторона 3: ",0))

perimeter = (a+b+c)/2
console.log("P :" +perimeter)

let s = Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)))

console.log("S : "+ s)