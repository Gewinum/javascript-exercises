function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    this.getSalary = () => {
        return this.rate * this.days;
    }
}

var worker1 = new Worker('John', 'Smith', 10, 31);
var worker2 = new Worker('Someone', 'Different', 600, 2);

console.log(worker1.getSalary() + worker2.getSalary())