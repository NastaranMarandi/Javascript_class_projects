
function sum() {
  let firNumber = Number(document.getElementById("firstNumber").value);
  let secNumber = Number(document.getElementById("secondNumber").value);
  let result = firNumber + secNumber;
  document.getElementById("result").innerHTML = result;
}
function mines() {
  let firNumber = Number(document.getElementById("firstNumber").value);
  let secNumber = Number(document.getElementById("secondNumber").value);
  let result = firNumber - secNumber;
  document.getElementById("result").innerHTML = result;
}
function mult() {
  let firNumber = Number(document.getElementById("firstNumber").value);
  let secNumber = Number(document.getElementById("secondNumber").value);
  let result = firNumber * secNumber;
  document.getElementById("result").innerHTML = result;
}
function divide() {
  let firNumber = Number(document.getElementById("firstNumber").value);
  let secNumber = Number(document.getElementById("secondNumber").value);
  let result = firNumber / secNumber;
  document.getElementById("result").innerHTML = result;
}

