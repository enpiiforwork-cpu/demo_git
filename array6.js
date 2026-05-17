let arr = [1, -2, -5, 6, 7, 8, -9, 10, 11, -20, 56, 16, 23];

let count = 0;

let x = +prompt("Nhập số cần kiểm tra");

if (arr.indexOf(x) !== -1) {
    console.log("Number " + x + " is in the array");
} else {
    console.log("Number " + x + " is not in the array");
}

