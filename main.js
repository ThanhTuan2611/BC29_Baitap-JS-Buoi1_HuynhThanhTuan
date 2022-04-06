/**
 * Bài 1: Tính tiền lương
 * -Đầu vào:
 * + Tiền lương 1 ngày = 100.000
 * + số ngày làm
 * - Xử lí:
 * + đặt a là số tiền lương trong 1 ngày
 * + đặt b là số ngày nhân viên làm (ví dụ nhân viên làm 29 ngày)
 * + Tính tiền lương = a * b
 * - Đầu ra: tiền lương nhân viên
 */
var a = 100000;
var b = 29;
var tienLuongNhanVien = a * b;
console.log("Tiền lương Nhân Viên là: " + tienLuongNhanVien);

/**
 * Bài 2: Tính giá trị trung bình
 * - Đầu vào: 5 số thực
 * - Xử lí: đặt a,b,c,d,e là lần lượt được nhập vào (ví dụ: a = 1; b = 2; c = 3; d = 4; e =5;)
 * cho (a+b+c+d+e)/5
 * Đầu ra: Trung bình tổng 5 số
 */
var a = 1;
var b = 2;
var c,d,e;
c = a + b;
d = b * 2;
e = d + a;
var tong = a + b + c + d + e;
var trungBinh = tong / 5;
console.log("Tổng trung bình cộng là: " + trungBinh);

/**
 * Bài 3: Quy đổi tiền
 * - Đầu vào:
 * + Giá 1 USD = 23500VNĐ
 * Xử lí: đặt a là số tiền người nhập USD ( ví dụ 2 USD)
 * đặt hằng số VND là số tiền không đổi = 23500
 * Tiền quy đổi = a * b;
 * - Đầu ra: tiền quy đổi
 */
var a = 2;
const VND = 23500;
var tienQuyDoi = a * VND;
console.log("Tiền quy đổi là: " + tienQuyDoi + "VNĐ");

/**
 * Bài 4: Tính chu vi diện tích hình chữ nhật
 * - Đầu vào: độ dài chiều dài
 * độ dài chiều rộng
 * - Xử lí: đặt a là chiều dài (ví dụ a = 5)
 * đặt b là chiều rộng (ví dụ b = 3)
 * Diện tích = a * b
 * Chu vi = (a + b)*2   
 * - Đầu ra: show kết quả diện tích và chu vi
 */
var a = 5;
var b = 3;
var dienTich = a * b;
var chuVi = (a + b)*2;
console.log("Diện tích hình chữ nhật là: " + dienTich);
console.log("Chu vi hình chữ nhật là: " + chuVi);

/**
 * Bài 5: Tính tổng 2 ký số
 * - Đầu vào n=44
 * Xử lý:
 * + Tách số hàng chục: Math.floor(n / 10)
 * + Tách số hàng đơn vị: Math.floor(n % 10)
 * Tổng 2 ký =  hàng chục + hàng đơn vị
 * - Đầu ra: Tổng 2 ký số
 */
var n = 44;
var hangChuc = Math.floor(n / 10);
var hangDonVi = Math.floor(n % 10);
var tongKySo= "Tổng 2 ký số là: " + hangChuc + hangDonVi;
console.log(tongKySo);