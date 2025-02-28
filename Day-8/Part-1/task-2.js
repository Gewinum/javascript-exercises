class Users {
    constructor() {
        this.usersMap = new Map();
    }

    add(user) {
        const newSymbol = Symbol();
        this.usersMap.set(newSymbol, user);
        return newSymbol;
    }

    getAge(symbol) {
        return this.usersMap.get(symbol).age;
    }
}

const users = new Users();
const user = users.add({name:'gio', age: 22});
console.log(users.getAge(user));