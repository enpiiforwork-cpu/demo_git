let math = Number(prompt("Nhập số điểm Toán: "));
let physics = Number(prompt("Nhập số điểm Vật lý: "));
let chemistry = Number(prompt("Nhập số điểm Hóa học: "));
let summary = (math + physics + chemistry) / 3;
document.write("Số điểm trung bình là: " + summary);