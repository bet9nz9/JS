//21 напишите функцию, которая находит разность двух массивов. Напрример
//console.log(difference([1,2,3], [100,2,1,10])) // результат - [3,10,100]

console.log(difference([1,2,3,4,5], [1,2,3]))

function difference(a,b){
    if(a.length > b.length){
        return diff = a.filter(x => b.indexOf(x)===-1)
    }else{
        return diff = b.filter(x => a.indexOf(x)===-1)
    }
}