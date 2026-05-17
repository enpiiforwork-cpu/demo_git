let a = [];
let b = [];
let c = [];


for (let i = 0; i < 10; i++) {
    a[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}
for (let i = 0; i < 10; i++) {
    b[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}
c = b.concat(a);

console.log("Mảng c là:", c);