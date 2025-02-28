class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        const currentYear = (new Date(Date.now())).getFullYear();
        return currentYear - this.year;
    }
}

var student = new Student('John', 'Smith', 2022);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());