/**
 * checks if number is prime
 * @param {number} x
 * @return boolean
 */
function isPrime(x) {
    if (x === 1) {
        return false;
    }
    let factorsCount = 0;
    // actually makes more sense counting to Math.sqrt(after making this solution i've decided to see other implementations
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            factorsCount++;
        }
        if (factorsCount > 2) {
            return false;
        }
    }
    return true;
}

const start = 2;
const end = 10;

const primeNumbers = [];

for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

console.log(primeNumbers.join(","))