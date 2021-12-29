// Khai báo biến
var input01El = document.getElementById("input01");
var input02El = document.getElementById("input02");
var input03El = document.getElementById("input03");
var ketQuaEl = document.getElementById("ketQua");
var max, min, me, wrongNumber;

// Xét từng TH
function xuatKetQua() {
  var soThuNhat = input01El.value * 1;
  var soThuHai = input02El.value * 1;
  var soThuBa = input03El.value * 1;

  if (soThuNhat > soThuHai && soThuNhat < soThuBa) {
    max = soThuBa;
    me = soThuNhat;
    min = soThuHai;
    var resutlMax = String(max + ">");
    var resutlMe = String(me + ">");
    var resutlMin = String(min);
    ketQuaEl.innerText = resutlMax + resutlMe + resutlMin;
  } else if (soThuHai > soThuNhat && soThuHai < soThuBa) {
    max = soThuBa;
    me = soThuHai;
    min = soThuNhat;
    var resutlMax = String(max + ">");
    var resutlMe = String(me + ">");
    var resutlMin = String(min);
    ketQuaEl.innerText = resutlMax + resutlMe + resutlMin;
  } else if (soThuBa > soThuNhat && soThuBa < soThuHai) {
    max = soThuHai;
    me = soThuBa;
    min = soThuNhat;
    var resutlMax = String(max + ">");
    var resutlMe = String(me + ">");
    var resutlMin = String(min);
    ketQuaEl.innerText = resutlMax + resutlMe + resutlMin;
  } else if (
    soThuNhat == soThuHai ||
    soThuHai == soThuBa ||
    soThuBa == soThuNhat
  ) {
    ketQuaEl.innerText = "Xin nhập ba số khác nhau";
  }
}
