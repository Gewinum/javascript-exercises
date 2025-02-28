class DB {
    constructor() {
        this.data = new Map();
    }

    create(model) {
        const onlyNeededKeys = ["name", "age", "country", "salary"];
        const onlyValidKeys = Object.keys(model).filter(key => onlyNeededKeys.includes(key));
        if (onlyValidKeys.length !== Object.keys(model).length) {
            throw new Error("There are additional unnecessary params in object!!!");
        }

        if (onlyNeededKeys.length !== onlyValidKeys.length) {
            throw new Error("Object is lacking required params");
        }

        if (typeof model.name !== "string") {
            throw new Error("User name must be a string");
        }
        if (typeof model.age !== "number") {
            throw new Error("User age must be a number");
        }
        if (typeof model.country !== "string") {
            throw new Error("User country must be a string");
        }
        if (typeof model.salary !== "number") {
            throw new Error("User salary must be a number");
        }

        const identifyingID = crypto.randomUUID();
        model.id = identifyingID;
        this.data.set(identifyingID, model);
        return identifyingID;
    }

    read(identifyingID) {
        if (typeof identifyingID !== "string") {
            throw new Error("User identifier must be a string");
        }
        return this.data.has(identifyingID) ? this.data.get(identifyingID) : null;
    }

    readAll() {
        const users = {};
        this.data.keys().forEach(identifyingID => {
            users[identifyingID] = this.read(identifyingID);
        });
        return users;
    }

    update(identifyingID, model) {
        if (typeof identifyingID !== "string") {
            throw new Error("User identifier must be a string");
        }

        const user = this.read(identifyingID);

        if (user === null) {
            throw new Error("User not found!");
        }

        const onlyNeededKeys = ["name", "age", "country", "salary"];
        const onlyValidKeys = Object.keys(model).filter(key => onlyNeededKeys.includes(key));
        if (onlyValidKeys.length !== Object.keys(model).length) {
            throw new Error("There are additional unnecessary params in object!!!");
        }

        Object.keys(model).forEach(paramKey => {
            user[paramKey] = model[paramKey];
        });
        this.data.set(identifyingID, user);
    }

    delete(identifyingID) {
        if (typeof identifyingID !== "string") {
            throw new Error("User identifier must be a string");
        }

        if (!this.data.has(identifyingID)) {
            throw new Error("User not found!");
        }

        this.data.delete(identifyingID);
    }
}

const db = new DB();

const person = {
    name: 'Pitter',
    age: 21,
    country: 'ge',
    salary: 500
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll();
console.log(customers);
console.log(customer);
db.update(id, { age: 22 });
console.log(db.read(id));
db.delete(id);
console.log(db.readAll());