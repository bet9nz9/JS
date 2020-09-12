// 4. Дополните код программы для выполнения задания: К встроенному
// классу String добавить метод printMe(), который выводит слово «Ура!» как заголовок
// (тег h…), указанного пользователем уровня (prompt).
// Уровень заголовка (1, 2 … 6) можно добавить в виде свойства класса String.
// Вспомним, как должны выглядеть теги заголовков в HTML.

String.prototype.uroven = "1"
let level = prompt("Enter level: ")

function printMe(){
    document.write(`<h${level}>Ура!</h${level}`)
}

String.prototype.printMe = printMe();

// 
function printZagolovok(){
// 
// 
}
// let s = new ;
// 