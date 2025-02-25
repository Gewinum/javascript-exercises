function f(x) {
    if (typeof x !== "number") {
        throw new TypeError("parameter type is not a Number");
    }
    if (x < 1 || x > 7) {
        throw new Error("argument should be from 1 to 7");
    }

    const daysList = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    return daysList[x - 1];
}

console.log(f(1));
console.log(f(2));
try {
    f(8);
}
catch (e) {
    console.error(e);
}

try {
    f('1');
}
catch (e) {
    console.error(e);
}