//Viết chương trình khởi tạo nhập vào một mảng số nguyên. Hiển hiện
// giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.

let arr =[]
let sum = 0
let length = 10

for (let i = 0; i < length; i++) {
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}

let max = arr[0];
for (let i = 0; i < length; i++) {
    sum += arr[i]

    if (arr[i] > max) {

        max = arr[i];
    }
}

let average = sum / length;

console.log ("Số có giá trị lớn nhất là", max);
console.log( "Tổng trung bình dãy số trên là", average);