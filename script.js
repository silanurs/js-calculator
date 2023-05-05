let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "0";
let result = null;


const display = document.getElementById('display');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('button');
const equals = document.getElementById('equals');
const decimal = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operation');
const clear = document.getElementById('clearAll');
const deletion = document.getElementById('delete');
const numbers = document.querySelector('.number')

output.textContent=displayValue;
operators.forEach(operator=> operator.addEventListener('click', setOperator));
buttons.forEach(btn =>{ btn.addEventListener('click', handleClick)})
// Define functions for basic arithmetic operations
function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function multiply(a, b) {
    return a * b;
  }
  
 function divide(a, b) {
    if (b === 0) {
      return "Infinity"; // Handle division by zero
    }
    return a / b;
  }
  
function handleClick(e){
  
  if(e.target.className==="number" && operator === null){
    if(displayValue==="0"){
      displayValue="";
    }
    displayValue+=e.target.innerText
    display.textContent += e.target.innerText;
    output.textContent=displayValue
    firstNumber=parseFloat(displayValue)
  }
  if(e.target.className==="number" && operator !== null){
    if( display.textContent.endsWith(operator)){
      displayValue=""
    }
    displayValue+=e.target.innerText
    display.textContent+= e.target.innerText;
    output.textContent=displayValue;
    secondNumber=parseFloat(displayValue)
  }
  if(e.target.className==="number" && operator !== null && result !== null){
    firstNumber=result;
    console.log(firstNumber)
    display.textContent=`${firstNumber}${operator}${secondNumber}`
  }
  if(e.target.id==="clearAll"){
    reset()
  }
  if(e.target.id==="delete"){
    display.textContent=display.textContent.slice(0,-1);
    output.textContent=output.textContent.slice(0, -1);
    displayValue=displayValue.slice(0, -1)
  }
  if(e.target.id==="equals"){
    if(firstNumber===null || secondNumber === null){
      display.textContent+="";
    }else{
      display.textContent += "="
      operate(operator);
    }
  }
}

function setOperator(e){
  if(e.target.innerText==="+"){
    operator = "+";
    output.textContent=operator;
    display.textContent+=operator
  }
  if(e.target.innerText==="-"){
    operator= "-";
    display.textContent+=operator
    output.textContent=operator;
  }
  if(e.target.innerText==="*"){
    operator= "*";
    display.textContent+=operator
    output.textContent=operator;
  }
  if(e.target.innerText==="/"){
    operator = "/";
    display.textContent+=operator
    output.textContent=operator;
  }
}
function operate(operator){
  
  switch(operator){
    case "+":
      result = add(firstNumber, secondNumber);
      output.textContent=result;
      break;
    case "-":
      result= subtract(firstNumber, secondNumber);
      output.textContent=result;
      break;
    case "*":
      result=multiply(firstNumber, secondNumber);
      output.textContent=result;
      break;
    case "/":
      result= divide(firstNumber, secondNumber);
      output.textContent=result;
      break;
  }
  return result;
}

function reset(){
   firstNumber = null;
   operator = null;
   secondNumber = null;
   displayValue = "0";
   decimalEntered = false;
   result=null;
   output.textContent=displayValue;
   display.textContent=""
  
}
