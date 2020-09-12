// Задание 1 и 2
function Employee(name, department, phone, salary){
    this.name = name
    this.department = department
    this.phone=phone
    this.salary=salary
};

let employee = new Employee("Max","Dep","777",111);

console.log(employee);

employee.adress = "Adress";
console.log(employee);
