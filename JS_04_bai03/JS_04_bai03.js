var input01El = document.getElementById("input01");
var input02El = document.getElementById("input02");
var input03El = document.getElementById("input03");
var ketQuaEl = document.getElementById("ketQua");

function xuatKetQua() {
  var soThuNhat = input01El.value * 1;
  var soThuHai = input02El.value * 1;
  var soThuBa = input03El.value * 1;

  if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
    ketQuaEl.innerText = "Có 3 số chẵn";
  } else if (soThuNhat % 2 == 1 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
    ketQuaEl.innerText = "Có 2 số chẵn" + " và 1 số lẻ";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 == 1 && soThuBa % 2 == 0) {
    ketQuaEl.innerText = "Có 2 số chẵn" + " và 1 số lẻ";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 1) {
    ketQuaEl.innerText = "Có 2 số chẵn" + " và 1 số lẻ";
  } else if (soThuNhat % 2 == 1 && soThuHai % 2 == 1 && soThuBa % 2 == 0) {
    ketQuaEl.innerText = "Có 2 số lẻ" + " và 1 số chẵn";
  } else if (soThuNhat % 2 == 1 && soThuHai % 2 == 0 && soThuBa % 2 == 1) {
    ketQuaEl.innerText = "Có 2 số lẻ" + " và 1 số chẵn";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 == 1 && soThuBa % 2 == 1) {
    ketQuaEl.innerText = "Có 2 số lẻ" + " và 1 số chẵn";
  } else if (soThuNhat % 2 == 1 && soThuHai % 2 == 1 && soThuBa % 2 == 1) {
    ketQuaEl.innerText = "Có 3 số lẻ";
  }
}
