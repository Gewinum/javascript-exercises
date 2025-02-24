const arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === 4) {
        console.log("Exist!");
        break;
    }
    console.log(element);
}