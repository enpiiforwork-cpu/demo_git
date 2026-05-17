let arr = [0];
let length = 10

for (let i = 0; i < length; i++) {
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}

for (let i = 0; i < length; i++) {
    arr.sort((a, b) => a - b);
}
console.log(arr);
