var btn = document.getElementById("btn");
var light = document.getElementById("light");
function toggleBtn(params) {
  btn.classList.toggle("active");
  light.classList.toggle("on");
}

var btnfull = document.getElementById("fll");
function full() {
  btnfull.classList.toggle("adjust");
}
