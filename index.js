class Calculator{

  constructor(currentOperandTextElement,previousOperandTextElement){
    this.currentOperand = currentOperandTextElement;
    this.previousOperand = previousOperandTextElement;
    this.clear();
  }

  clear(){
    this.currentOperand='';
    this.previousOperand='';
    this.operation=undefined;
  }

  delete(){

  }

  appendNumber(number){
  this.currentOperand=this.currentOperand.toString()+number.toString();
  }

  chooseOperation(operation){

  }

  compute(){

  }
  
  updateDisplay(){
    currentOperandTextElement.innerHTML=this.currentOperand;
  }
}


const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector("[data-all-clear]");
const equalButton = document.querySelector("[data-equal]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");
const previousOperandTextElement = document.querySelector("[data-previous-operand ]");


const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);

numberButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    console.log(`Current ${calculator.currentOperand}`);
    console.log(`Previous ${calculator.previousOperand}`);
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  })
});

allClearButton.addEventListener('click',()=>{
  calculator.clear();
  calculator.updateDisplay();
})