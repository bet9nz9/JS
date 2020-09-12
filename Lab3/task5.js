// 5. Создать объект-коллекцию Сотрудник, который содержит сведения о
// сотруднике некоторой фирмы, такие как Имя, Отдел, Телефон, Зарплата и отображает
// данные об этом сотруднике (создать метод объекта для отображения данных)

let employee = new Object();
employee.name = "Max"
employee.departmant = "Dep"
employee.phone = "PHONE"
employee.salary = 111

function employeeShowInfo(){
    for(let i in employee){
        document.write(i+": "+employee[i]+"<br>");
    }
}
employee.show = employeeShowInfo();
employee.show