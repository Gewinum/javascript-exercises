function rotate(arr, amount, direction="right") {
    if (!Array.isArray(arr)) {
        throw new TypeError('argument provided must be an array');
    }

    if (typeof amount !== 'number') {
        throw new TypeError('amount provided must be a number');
    }

    if (direction !== "right" && direction !== "left") {
        throw new Error("direction must be either right or left");
    }

    amount = amount % arr.length;
    if (amount === 0) {
        return arr;
    }

    for (let i = 0; i < amount; i++) {
        if (direction === "right") {
            arr.unshift(arr.pop());
        } else {
            arr.push(arr.shift());
        }
    }

    return arr;
}

let arr = [1,2,3];
console.log(rotate(arr, 1, 'left'));
arr = [1,2,3];
console.log(rotate(arr, 1));
arr = [1,2,3];
console.log(rotate(arr, 2));