const arr = [3, 2, 4, 1];

for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
        if (arr[i] > arr[j]) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);