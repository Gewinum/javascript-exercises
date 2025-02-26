function searchWord(str, word) {
    if (typeof str !== "string") {
        throw new TypeError('str must be a string');
    }
    if (typeof word !== "string") {
        throw new TypeError('word must be a string');
    }

    const matches = str.matchAll(word);
    let sum = 0;

    matches.forEach(() => {
        sum += 1;
    });

    return sum;
}

console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));