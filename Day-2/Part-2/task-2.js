/**
 * @param {Array} arr
 */
function f(arr) {
    if (arr.constructor !== Array) {
        throw new TypeError('parameter type should be an array');
    }

    if (arr.length === 0) {
        throw new Error('parameter type must not be an empty array');
    }

    console.log(arr[0]);
    arr.splice(0, 1);
    if (arr.length === 0) {
        return;
    }
    f(arr);
}

f([1, 2, 3]);
try {
    f(1, 2, 3);
} catch (e) {
    console.error(e);
}

try {
    f('Content');
} catch (e) {
    console.error(e);
}

try {
    f([]);
} catch (e) {
    console.error(e);
}