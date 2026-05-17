let arr = [1, -2, -5, 6, 7, 8, -9, 10, 11, -20];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

console.log("Có", count, "số nguyên âm");