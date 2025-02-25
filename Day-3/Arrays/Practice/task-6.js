function reduceRight(arr, callback, acc) {
    if (!Array.isArray(arr)) {
        throw new TypeError("first argument must be an array")
    }

    if (callback.constructor !== Function) {
        throw new TypeError("second argument must be a function")
    }

    if (!(typeof acc === "string" || typeof acc === "number")) {
        throw new TypeError("third argument must be either a string or number")
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        acc = callback(acc, arr[i], i, arr);
    }

    return acc
}

const arr = [1,2,3];
const acc = 0;
const result = reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc);
console.log(result);