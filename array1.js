let arr =[]
let count = 0
let length = 10

for (let i = 0; i < length; i++){
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1));
}

for (let i = 0; i < length; i++){
    if (arr[i]  >= length){
        count++
    }
}
console.log ("Có" + count + " số nguyên lớn hơn hoặc bằng 10");