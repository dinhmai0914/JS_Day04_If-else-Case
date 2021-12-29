var input01El = document.getElementById("input01");
var input02El = document.getElementById("input02");
var input03El = document.getElementById("input03");
var ketQuaEl = document.getElementById("ketQua");

function xuatKetQua() {
  var canhThuNhat = input01El.value * 1;
  var canhThuHai = input02El.value * 1;
  var canhThuBa = input03El.value * 1;

  if ((canhThuNhat == canhThuHai) == canhThuBa) {
    ketQuaEl.innerText = "Tam giác đều";
  } else if (
    canhThuNhat == canhThuHai ||
    canhThuNhat == canhThuBa ||
    canhThuHai == canhThuBa
  ) {
    ketQuaEl.innerText = "Tam giác cân";
  } else if (canhThuBa > canhThuNhat && canhThuBa < canhThuHai) {
    ketQuaEl.innerText = resutlMax + resutlMe + resutlMin;
  } else if (
    canhThuNhat == Math.sqrt(canhThuHai * canhThuHai + canhThuBa * canhThuBa) ||
    canhThuHai ==
      Math.sqrt(canhThuNhat * canhThuNhat + canhThuBa * canhThuBa) ||
    canhThuBa == Math.sqrt(canhThuHai * canhThuHai + canhThuNhat * canhThuNhat)
  ) {
    ketQuaEl.innerText = "Tam giác vuông";
  } else {
    ketQuaEl.innerText = "Tam giác thường";
  }
}
