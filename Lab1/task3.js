// 118 переставить и вывести на экран слова заданного предложения в соответсвии
// с количеством согласных


string = prompt("Введите предложение",1)

let arrayOfWords = splitBySpace(string)

arrayOfWords.sort(compare)
console.log(arrayOfWords)

function compare(a, b){
    if(a.count > b.count) return 1
    if(a.count< b.count) return -1
    return 0
}

function findCountOfConsonant(word){
    countOfConsonant = 0
    let arrayOfNonConsonant = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"]
    for(let i=0; i<word.length; i++){
        for(let y =0; y<arrayOfNonConsonant.length; y++){
            if(word[i]==arrayOfNonConsonant[y]){
                countOfConsonant++
            }
        }
    }
    return word.length-countOfConsonant
}

function splitBySpace(string){
    wordArray = string.split(" ")
    let resultArray = []

    for(let i=0; i<wordArray.length;i++){
        let resultObject = {
            word:wordArray[i],
            count: findCountOfConsonant(wordArray[i])
        }
        resultArray.push(resultObject)
    }
    console.log("Word array: "+wordArray)
    return resultArray
}