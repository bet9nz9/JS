//118 На плоскости заданы n точек своими декартовыми координатами. Найти минимальный периметр многоугольника,
//содержащего все эти точки. Гарантируется, что искомый многоугольник имеет ненулевую площадь

let arrayOfDots = new Array()

arrayOfDots[0]={
    x:1,
    y:1
}
arrayOfDots[1]={
    x:6,
    y:1
}
arrayOfDots[2]={
    x:5,
    y:5
}
arrayOfDots[3]={
    x:2,
    y:4
}
arrayOfDots[4]={
    x:4,
    y:3
}
arrayOfDots[5]={
    x:3,
    y:2
}
arrayOfDots[6]={
    x:1,
    y:7
}

jarvisMarch(arrayOfDots)

function jarvisMarch(arrayOfDots){

    startPoint = arrayOfDots[0]
    for(let i =0; i<arrayOfDots.length;i++){
        if(startPoint.x>arrayOfDots[i].x && startPoint.y>arrayOfDots[i].y){
            startPoint = arrayOfDots[i]
        }
    }
    
    // console.log(arrayOfDots)
    let arrayOfExtremePoints = getExtremePoints(arrayOfDots,startPoint)
    // let perimeter = getPerimeter(arrayOfExtremePoints)
    console.log("Perimeter: "+ getPerimeter(arrayOfExtremePoints))
}

function getPerimeter(arrayOfDots){
    let perimeter = 0
    currentPoint = arrayOfDots[0]
    for(let i=1; i<arrayOfDots.length; i++){
        if(i===arrayOfDots.length-1){
            perimeter += getLengthOfSection(currentPoint,arrayOfDots[0])
            // console.log("Perimeter in fun: "+perimeter)
        }else{
            perimeter += getLengthOfSection(currentPoint, arrayOfDots[i])
            currentPoint = arrayOfDots[i]
        }
    }
    return perimeter
}

function getLengthOfSection(startPoint, finishPoint){
    return Math.sqrt(Math.pow((finishPoint.x-startPoint.x),2)+Math.pow((finishPoint.y-startPoint.y),2))
}

function getExtremePoints(array, startPoint){
    let sortedArray = new Array()
    sortedArray.push(startPoint)
    currentPoint = sortedArray[0]
    for(let i = 0; i<array.length; i++){
        if(array[i].x>currentPoint.x || array[i].y>currentPoint.y){
            sortedArray.push(array[i])
            currentPoint = array[i]
        }
    }
    return sortedArray
}