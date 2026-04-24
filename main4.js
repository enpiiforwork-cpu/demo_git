let weight = Number(prompt("Nhập cân nặng (kg):"));
let heightCm = Number(prompt("Nhập chiều cao (cm):"));

let height = heightCm / 100;

if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("Vui lòng nhập dữ liệu hợp lệ!");
} else {
    let bmi = weight / (height * height);
    let result = "";

    if (bmi < 18.5) {
        result = "Gầy";
    } else if (bmi < 23) {
        result = "Bình thường";
    } else if (bmi < 25) {
        result = "Tiền béo phì";
    } else if (bmi < 30) {
        result = "Béo phì độ I";
    } else {
        result = "Béo phì độ II trở lên";
    }

    alert("BMI: " + bmi.toFixed(2) + "\nPhân loại: " + result);
}