//Definicja klasy 
class User {
    constructor(namea) {
        this.namea = namea;
    }


    sayHello() {
        return `${this.namea} powiedz cześć!`;
    }
}

// Wykorzystanie 
let user = new User("Kacper");
console.log(user.sayHello());


class Employee extends User {
    consturctor(namea, salary) {
        // wywołanie konstrukotra klasy User
        super(namea);
        // dodanie nowej własciwosci klasy
        this.salary = salary;
    }

    //nowa metoda klasy
    raiseSalary() {
        this.salary += 1000;
        return this.salary;
    }
}

// Wykorzystanie
let employee = new Employee('Jan', 1999);
console.log(employee);
employee.raiseSalary();
console.log(employee);  