function Worker(name, surname, rate, days) {
    this.getName = () => {
        return name;
    }

    this.getSurname = () => {
        return surname;
    }

    this.getRate = () => {
        return rate;
    }

    this.getDays = () => {
        return days;
    }

    this.getSalary = () => {
        return rate * days;
    }
}

var worker1 = new Worker('John', 'Smith', 10, 31);
console.log(worker1.getName()); // print 'John'
console.log(worker1.getSurname()); // print 'Smith'
console.log(worker1.getRate()); // print 10
console.log(worker1.getDays()); // print 31
console.log(worker1.getSalary()); // print 310 - because 10*31

var worker2 = new Worker('Someone', 'Different', 600, 2);

console.log(worker1.getSalary() + worker2.getSalary())