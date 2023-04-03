function calc() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var oper = document.getElementById("operator").value;

  if (oper === "luas") {
    document.getElementById("result").value = (1 / 2) * num1 * num2;
  } else {
    document.getElementById("result").value = num1 + num2 + num3;
  }
  event.preventDefault();

  var hasilResult = document.getElementById("result").value;

  if (isNaN(hasilResult)) {
    alert("Please input number");
  }
}

function reset1() {
  document.getElementById("form").reset();
}

function calculate() {
  var alas = parseInt(document.getElementById("alas").value);
  var tinggi = parseInt(document.getElementById("tinggi").value);
  var oper1 = document.getElementById("operatorJajargenjang").value;

  if (oper1 === "keliling") {
    document.getElementById("result").value = 2 * (alas + tinggi);
  } else {
    document.getElementById("result").value = alas * tinggi;
  }
  event.preventDefault();

  var hasilResultJajar = document.getElementById("result").value;

  if (isNaN(hasilResultJajar)) {
    alert("Please input number");
  }
}

function disable() {
  var opera = document.getElementById("operator").value;

  if (opera === "luas") {
    document.getElementById("num3").disabled = true;
  } else {
    document.getElementById("num3").disabled = false;
  }
}

function thisPage() {
  alert("you're currently on this page");
}
