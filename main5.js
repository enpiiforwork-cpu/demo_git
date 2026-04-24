let firstNumber = Number(prompt('Nhập vào số a: '));
let secondNumber = Number(prompt('Nhập vào số b: '));
let op = prompt("Nhập phép toán (+, -, *, /):");
let result;

switch (op) {
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = secondNumber !== 0 ? firstNumber / secondNumber : "Không thể chia cho 0";
        break;
    default:
        result = "Phép toán không hợp lệ";
}

alert("Kết quả: " + result);