let display = document.getElementById("display");
let historyBox = document.getElementById("history");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = Function("return " + display.value)();
    
    // add to history
    historyBox.innerHTML += `<div>${display.value} = ${result}</div>`;
    
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

