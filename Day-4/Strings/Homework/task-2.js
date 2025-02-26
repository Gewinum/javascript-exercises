function extractCurrencyValue(str) {
    if (typeof str !== "string") {
        throw new TypeError("str must be a string");
    }

    const regexp = /\d+/;
    const match = str.match(regexp);

    return match ? Number(match[0]) : null;
}

console.log(extractCurrencyValue("$120"));