let lastOperation = null;
let lastresult = null;

let isOperationComplete = false;

window.onload = function () {
  const numericButton = document.querySelectorAll(".button");
  const functionButton = document.querySelectorAll(".function");
  const resetButton = document.querySelectorAll(".reset");
  const equalButton = document.querySelectorAll(".equal");

console.log(numericButton);

  for (let node of numericButton) {
    node.addEventListener("click", addNumbertoresult);
  }

  for (let node of functionButton) {
    node.addEventListener("click", saveoperationandvalue);
  }

    equalButton.addEventListener("click", equlresult)
    resetButton.addEventListener("click", resetState)
  
};
const addNumbertoresult = function (event) {
  const display = document.getElementById("result");
  const clickbutton = event.target;
  const numberPressed = clickbutton.innerText;
  if (display.value === "0" || display.value === "Error" || isOperationComplete) {
    display.value = numberPressed;
    isOperationComplete = false;
  } else {
    display.value += numberPressed;
  }

};

const saveoperationandvalue = function (event) {
    const display = document.getElementById("result");

  const clickbutton = event.target;

 lastOperation = clickbutton.innerText
 lastresult = display.value
 displayPartialOperation();

  
  clearResult();
  
};

const executeLastoperation = function () {
    const display = document.getElementById("result");

    const currentresult = display.value;
    const firstoperand = parseInt(lastresult);
    const secondoperand = parseInt(currentresult);

    switch (lastOperation) {
case "+":
lastresult = firstoperand + secondoperand;
break;
case "-":
lastresult = firstoperand - secondoperand;
break;
case "*":
lastresult = firstoperand * secondoperand;
break;
case "/":
lastresult = firstoperand / secondoperand;
break;
default:
    lastresult = "Error";
break;


    }
console.log(lastresult);
  
 }
const equlresult = function () {
    const display = document.getElementById("result");

executeLastoperation()

if (lastresult === null) {
    display.value = "0";
  } else {
    display.value = lastresult;
  }
  isOperationComplete = true;
  resetPartialOperation();


}

const clearMemory = function () {
    lastOperation = null;
    lastresult = null;
  };
  const clearResult = function () {
    document.getElementById("result").value = "0";
  };

  const resetState = function () {
    clearMemory();
    clearResult();
  };


const displayPartialOperation = function () {
    const container = document.getElementById("partialOperation");
  
    container.innerText = lastresult + lastOperation;
  };
  const resetPartialOperation = function () {
    document.getElementById("partialOperation").innerText = "";
  };

