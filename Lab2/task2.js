//42 найдите наименьший четный элемент массива, если его нет вывести первый элемент
let arr = [-1,2,3,-4,6]

let positiveNumArr = arr.filter(function (num){
    return num>0
})

positiveNumArr.sort()

console.log(positiveNumArr[0])
