const Users = [
    { name: 'Jhon', age: 25 },
    { name: 'Jhon', age: 21 },
    { name: 'Doe', age: 34 }
];

function destructure(arr) {
    let destructured = {};

    arr.forEach(element => {
        destructured[Symbol()] = element;
    });

    return destructured;
}

const destructuredUsers = destructure(Users);

Object.getOwnPropertySymbols(destructuredUsers).forEach(identifyingSymbol => {
    console.log(destructuredUsers[identifyingSymbol].age);
})