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

    find(params) {
        const onlyNeededKeys = ["name", "age", "country", "salary"];
        const onlyValidKeys = Object.keys(params).filter(key => onlyNeededKeys.includes(key));
        if (onlyValidKeys.length !== Object.keys(params).length) {
            throw new Error("There are additional unnecessary params in object!!!");
        }

        const finders = [];
        if (onlyValidKeys.includes("name")) {
            if (typeof params.name !== "string") {
                throw new Error("User name must be a string");
            }
            finders.push(model => model.name === params.name);
        }

        if (onlyNeededKeys.includes("country")) {
            if (typeof params.country !== "string") {
                throw new Error("User country must be a string");
            }
            finders.push(model => model.country === params.country);
        }

        if (onlyNeededKeys.includes("salary")) {
            if (typeof params.salary !== "object") {
                throw new Error("User salary must be a min/max object");
            }

            const salaryKeys = Object.keys(params.salary);
            if (!salaryKeys.includes("min") && !salaryKeys.includes("max")) {
                throw new Error("Salary find option must contain at least min or max or both of them");
            }

            if (salaryKeys.includes("min") && typeof params.salary.min !== "number") {
                throw new Error("Salary min find option must be a number");
            }

            if (salaryKeys.includes("max") && typeof params.salary.max !== "number") {
                throw new Error("Salary max find option must be a number");
            }

            finders.push(model => {
                if (salaryKeys.includes("min")) {
                    if (params.salary.min > model.salary) {
                        return false;
                    }
                }

                if (salaryKeys.includes("max")) {
                    if (params.salary.max < model.salary) {
                        return false;
                    }
                }

                return true;
            });
        }

        if (onlyNeededKeys.includes("age")) {
            if (typeof params.age !== "object") {
                throw new Error("User age must be a min/max object");
            }

            const ageKeys = Object.keys(params.age);
            if (!ageKeys.includes("min") && !ageKeys.includes("max")) {
                throw new Error("Age find option must contain at least min or max or both of them");
            }

            if (ageKeys.includes("min") && typeof params.age.min !== "number") {
                throw new Error("Age min find option must be a number");
            }

            if (ageKeys.includes("max") && typeof params.age.max !== "number") {
                throw new Error("Age max find option must be a number");
            }

            finders.push(model => {
                if (ageKeys.includes("min")) {
                    if (params.age.min > model.salary) {
                        return false;
                    }
                }

                if (ageKeys.includes("max")) {
                    if (params.age.max < model.salary) {
                        return false;
                    }
                }

                return true;
            });
        }

        return Array.from(this.data.values()).filter(model => finders.every(finder => finder(model)));
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

const query = {
    country: 'ge',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query);
console.log(customers);