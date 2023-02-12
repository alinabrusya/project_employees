class Company {
    constructor(employees) {
        this.employees = employees;
    }

    hire = (employee) =>{
        if(this.employees[employee.id])
            return false;
        else{
            this.employees[employee.id] = employee;
            return true;
        }
    }

    fire = (id) => {
        if (this.employees[id]) {
        delete this.employees[id];
        return true;
        } else
            return false;
    }

    computeBudget = () =>{
        let resArr = [];
        this.employees.forEach(item =>{
            resArr.push(item.salary);
        }).reduce((acc, item) => {
            return acc + item;
        }, 0);
        return resArr;
    }

    processEmployees = (processingFunction) =>{
        this.employees.forEach(processingFunction);
    }
}