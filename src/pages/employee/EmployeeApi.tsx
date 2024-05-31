import Employee from "./Employee";

export function searchEmployee () {

    if(!localStorage['employees']){
        localStorage['employees'] = '[]'
    }

    let employees = localStorage['employees'];
    employees = JSON.parse(employees)

    return employees;
}

export function removeEmployee (id: string) {
    let employees = searchEmployee();
    let employeesEdit = employees.filter((c:Employee) => c.id !==id)
    localStorage['employees'] = JSON.stringify(employeesEdit);
}

export function saveEmployee (employee: Employee) {
    let employees = searchEmployee();
    if(employee.id){
        let indice = employees.findIndex((c: Employee) => c.id == employee.id);
        employees[indice] = employee;
    }else {
        employee.id = Math.round(Math.random() * 10000).toString();
        employees.push(employee);
    }

    localStorage['employees'] = JSON.stringify(employees);

}

export function searchEmployeeById (id:string) {
    let employee = searchEmployee();
    employee = employee.find((c:Employee) => id == c.id)
    return employee;
}