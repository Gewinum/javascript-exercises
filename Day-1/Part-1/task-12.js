const arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (const element of arr) {
    if (element === 4) {
        console.log("Exist!");
        break;
    }

    console.log(element);
}