//166 Матрицу m x n заполнить натуральными числами от 1 до mn по спирали, начинающейся в левом верхнем углу и 
//закрученной против часовой стрелки

// m - длинна матрицы
// x - высота матрицы
// n - глубина матрицы

axisX = 6
axisY = 6

let matrixArray = []

for(let i =0; i<axisY;i++){
    matrixArray[i] = []
}
for(let y =0; y<axisY; y++){
    for(let x =0; x<axisX;x++){
        matrixArray[y][x] = null
    }
}

let numbersRange = axisX * axisY

let previousNum = getNum(0)

let x =0
let y =0

let triger = true
let nonNull = 0

console.log(matrixArray[0][0])
console.log(typeof(matrixArray[0][0]))
while(triger){
    nonNull = 0
    while(y!=axisY && matrixArray[y][x]===null){
        matrixArray[y][x] = previousNum
        previousNum = getNum(previousNum)
        y++
    }
    y--
    x++
    while(x!=axisX && matrixArray[y][x] === null){
        matrixArray[y][x] = previousNum
        previousNum = getNum(previousNum)
        x++
    }
    x--
    y--
    while(y>=0 && matrixArray[y][x]===null){
        matrixArray[y][x] = previousNum
        previousNum = getNum(previousNum)
        y--
    }
    y++
    x--
    while(x>=0 && matrixArray[y][x]===null){
        matrixArray[y][x] = previousNum
        previousNum = getNum(previousNum)
        x--
    }
    x++
    y++
    for(let i =0; i<axisY;i++){
        if(matrixArray[i].includes(null)){
            nonNull++
        } 
    }
    if(nonNull===0){
        triger = false
    }
    axisX--
    axisY--

}

console.log(matrixArray)

function getNum(lastNum){
    return ++lastNum;
}