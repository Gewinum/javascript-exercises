let person = {
    get salary() {
        const now = new Date(Date.now());
        const day = now.getDate();
        const lastDayInMonth = (new Date(now.getFullYear(), now.getMonth() + 1, 0)).getDate();
        if (lastDayInMonth - day > 20) {
            return "good salary";
        } else {
            return "bad salary";
        }
    }
}

console.log(person.salary);