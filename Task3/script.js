const display = document.getElementById("display");
const expressionDiv = document.getElementById("expression");
const keys = document.querySelectorAll(".btn");

let expression = "";

keys.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const val = e.target.innerText;

    if (val === "=") {
      try {
        let exp = expression.replace(/x/g, "*").replace(/÷/g, "/");
        const result = eval(exp);
        expressionDiv.innerText = expression;
        display.value = result;
        expression = result.toString();
      } catch {
        display.value = "Error";
      }
    } else if (val === "C") {
      expression = "";
      display.value = "";
      expressionDiv.innerText = "";
    } else if (val === "+/-") {
      if (expression) {
        expression = (-parseFloat(expression)).toString();
        display.value = expression;
      }
    } else {
      expression += val;
      display.value = expression;
    }
  });
});
