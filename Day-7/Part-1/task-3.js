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

    this.setRate = (newRate) => {
        rate = newRate;
    }

    this.setDays = (newDays) => {
        days = newDays;
    }

    this.getSalary = () => {
        return rate * days;
    }
}

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10