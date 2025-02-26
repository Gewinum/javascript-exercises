function truncate(string, maxLength) {
    if (typeof string !== 'string') {
        throw new TypeError('string must be a string');
    }

    if (typeof maxLength !== 'number') {
        throw new TypeError('maxLength must be a number');
    }

    if (string.length <= maxLength) {
        return string;
    }

    return string.slice(0, maxLength - 3) + "...";
}

console.log(truncate('I wanna to say next thing about this topic', 22));