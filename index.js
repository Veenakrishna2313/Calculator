class Calculator {
  constructor(currentOperandTextElement, previousOperandTextElement) {
    this.currentOperand = currentOperandTextElement;
    this.previousOperand = previousOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand=this.currentOperand.toString().slice(0,-1)

  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if(this.previousOperand!==''){
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    
    let computation;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "+":
        computation = prev + current;
        break;
      default:
        return;
    }
    console.log(`computation ${computation}`)
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number){
    const stringNumber=number.toString();
    const integerDigits=parseFloat(stringNumber.split('.')[0]);
    const decimalDigits=stringNumber.split('.')[1];

    let integerDisplay;
    if(isNaN(integerDigits)){
      integerDisplay='';
    }
    else{
      integerDisplay=integerDigits.toLocaleString('en',{maximumFractionDigits:0});
    }

    if(decimalDigits!=null){
      return `${integerDigits}.${decimalDigits}`;
    }
    else {
      return integerDisplay
    }


    
  }

  updateDisplay() {
    currentOperandTextElement.innerHTML =this.getDisplayNumber(this.currentOperand) ;
    if(this.operation!==null){
    previousOperandTextElement.innerHTML = this.getDisplayNumber(`${this.previousOperand} ${this.operation} `);
  }else{
    this.previousOperandTextElement.innerHTML='';
  }
}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalButton = document.querySelector("[data-equals]");
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand ]"
);

const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Current ${calculator.currentOperand}`);
    console.log(`Previous ${calculator.previousOperand}`);
    console.log(button.innerHTML);
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Current ${calculator.currentOperand}`);
    console.log(`Previous ${calculator.previousOperand}`);
    console.log(button.innerHTML);
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalButton.addEventListener("click",() => {
  calculator.compute();
  calculator.updateDisplay();
  calculator.clear();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
