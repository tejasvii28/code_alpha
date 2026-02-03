const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

let bracketCount = 0;
function smartBracket() {
  if (bracketCount === 0) {
    display.value += "(";
    bracketCount++;
  } else {
    display.value += ")";
    bracketCount--;
  }
}

function clearDisplay() {
  display.value = "";
  bracketCount = 0 ;
}

function deleteLast() {
  const last = display.value.slice(-1);

  if (last === "(") bracketCount--;
  if (last === ")") bracketCount++;

  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

//keyboard support
document.addEventListener("keydown", function (e) {
  const key = e.key;

  // numbers
  if (!isNaN(key)) {
    append(key);
  }

  // operators
  if (["+","-","*","/","."].includes(key)) {
    append(key);
  }

  // brackets
  if (key === "(" || key === ")") {
    append(key);
  }

  // enter = calculate
  if (key === "Enter") {
    calculate();
  }

  // backspace = delete
  if (key === "Backspace") {
    deleteLast();
  }

  // escape = clear
  if (key === "Escape") {
    clearDisplay();
  }
});



