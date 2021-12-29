function xuatKetQua() {
  var mySelectorEl = document.getElementById("mySelector").value;
  switch (mySelectorEl) {
    case "B":
      document.getElementById("ketQua").innerHTML = "Xin chào ba";
      break;
    case "M":
      document.getElementById("ketQua").innerHTML = "Xin chào mẹ";
      break;
    case "A":
      document.getElementById("ketQua").innerHTML = "Xin chào anh trai";
      break;
    default:
      document.getElementById("ketQua").innerHTML = "Xin chào em gái";
      break;
  }
}
