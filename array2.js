let arr =[]
let length = 10

for (let i = 0; i < length; i++){
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}

let max = arr[0];
for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log ("Số có giá trị lớn nhất là", max);
console.log(arr.indexOf(max));