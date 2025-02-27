Function.prototype.delay = function(milliseconds) {
    return (...args) => {
        setTimeout(this, milliseconds, ...args);
    };
};
function f() {
    console.log('hello');
}
f.delay(1000)();

// or with parameters:
function f2(a, b) {
    console.log(a + b);
}
f2.delay(1000)(1, 2);
