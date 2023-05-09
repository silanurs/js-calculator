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
    if (b == "0") {
      return "Undefined"; // Handle division by zero
    }
    return a / b;
  }
  
function handleClick(e){
  
  if(e.target.className==="number" && operator === null){
    if(displayValue==="0"){
      displayValue="";
    }
    displayValue+=e.target.innerText;
    display.textContent += e.target.innerText;
    output.textContent=displayValue
    firstNumber=parseFloat(displayValue)
  }
  if(e.target.className==="number" && operator != null){
    if(display.textContent.endsWith(operator)){
      displayValue="";
      secondNumber=null;
    }
    displayValue+=e.target.innerText
    display.textContent+= e.target.innerText;
    output.textContent=displayValue;
    secondNumber=parseFloat(displayValue);
    operate(operator)
    firstNumber=result
    operator=null;
  }
  if(e.target.id==="decimal"){
    if(firstNumber==null){
      display.textContent=""
      displayValue+=""
    }
    if(secondNumber==null){
      display.textContent="";
      displayValue+="";
    }
    displayValue += "."
    display.textContent+="."
    output.textContent=displayValue
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
    if(firstNumber===null){
      display.textContent+="";
    }else{
      display.textContent += "="
      operate(operator);
     output.textContent=result;
     operator=null;
     firstNumber=result;
     secondNumber=null
     if(operator==null){
      display.textContent=firstNumber;
     }
    }
  }

}

function setOperator(e){
  if(displayValue=="0"){
    operator=null
    output.textContent="0"
    display.textContent=""
  }
  if(displayValue != "0"){
    if(display.textContent.endsWith(operator)){
      display.textContent+=""
    }else{
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
      if(e.target.innerText==="x"){
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
  }
}
function operate(operator){
  
  switch(operator){
    case "+":
      result = add(firstNumber, secondNumber);
      
      break;
    case "-":
      result= subtract(firstNumber, secondNumber);
      
      break;
    case "*":
      result=multiply(firstNumber, secondNumber);
      
      break;
    case "/":
      result= divide(firstNumber, secondNumber);
     
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
