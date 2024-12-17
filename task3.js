let number = 0;

function increase() {
  number++;
  document.getElementById("number").textContent = number;
}

function decrease() {
  number--;
  document.getElementById("number").textContent = number;
}

function reset() {
  number = 0;
  document.getElementById("number").textContent = number;
}
