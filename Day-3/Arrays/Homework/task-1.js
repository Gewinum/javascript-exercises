function f(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('argument provided must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += f(arr[i]);
            continue;
        }

        if (typeof arr[i] !== 'number') {
            throw new TypeError('non-number value noticed');
        }

        sum += arr[i];
    }

    return sum;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2));
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3));
const arr4 = [[[[[]]]]];
console.log(f(arr4));
const arr5 = [[[[[],3]]]];
console.log(f(arr5));