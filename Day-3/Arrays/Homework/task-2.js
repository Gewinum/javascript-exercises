function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('argument provided must be an array');
    }

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

console.log(reverse([1, 2, 3]));
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8]))