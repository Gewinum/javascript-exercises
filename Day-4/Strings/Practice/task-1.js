function upperCaseFirst(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

console.log(upperCaseFirst("pitter"));
console.log(upperCaseFirst(""));