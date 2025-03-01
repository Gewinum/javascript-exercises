class Validator {
    isEmail(email) {
        return email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/) !== null;
    }

    isDomain(domain) {
        return domain.match(/^[a-z0-9]+\.[a-z]{2,4}$/) !== null;
    }

    isDate(date) {
        return date.match(/^\d{2}\.\d{2}\.\d{4}$/) !== null;
    }

    isPhone(phone) {
        return phone.match(/^\+995 \d{3} \d{2}-\d{2}$/) !== null;
    }
}

let validator = new Validator();
console.log(validator.isEmail("jshtml@gmail.com"));
console.log(validator.isDomain("gmail.com"));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995 555 55-55'));