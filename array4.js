//Viết chương trình khởi tạo nhập vào một mảng số nguyên 
// và đảo ngược các phần tử trong mảng đó.

let arr =[]
let length = 10

for (let i = 0; i < length; i++) {
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}
arr.reverse();

console.log(arr)