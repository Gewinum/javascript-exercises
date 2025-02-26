let person = {};

Object.defineProperty(person, "rate", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: false
});
Object.defineProperty(person, "salary", {
    get() {
        const date = new Date(Date.now());
        const day = date.getDate();
        if (this.rate === undefined) {
            return 0;
        }
        return this.rate * day;
    },
})
console.log(person.salary);