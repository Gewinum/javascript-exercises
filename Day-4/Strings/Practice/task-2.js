function checkSpam(source, example) {
    if (typeof source !== 'string') {
        throw new TypeError('source must be a string');
    }

    if (typeof example !== 'string') {
        throw new TypeError('example must be a string');
    }

    source = source.toLowerCase();
    example = example.toLowerCase();

    return source.includes(example);
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));