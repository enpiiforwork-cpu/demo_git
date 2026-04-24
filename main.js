let year = Number(prompt("Nhập năm cần kiểm tra: "));

if (isNaN(year)) {
    document.write("Vui lòng nhập số hợp lệ!");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.write(year + " là năm nhuận");
    } else {
        document.write(year + " không phải là năm nhuận");
    }
}