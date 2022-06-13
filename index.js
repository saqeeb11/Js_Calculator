const calculatorDisplay = document.querySelector('h1');
const operaterbtn = document.querySelectorAll('.operator');
const calcbtns = document.querySelectorAll('button');
const clear = document.getElementById('clear-btn');
const deletebtn = document.getElementById('delete-btn');

let firstValue = 0;
let operatorValue = '';
let nextValue = false;

function numberValue(number) {
  if (nextValue) {
    calculatorDisplay.textContent = number;
    nextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  if (nextValue) return;
  if(!calculatorDisplay.textContent.includes(operaterbtn.value)){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  
  if(operator !== '='){
    calculatorDisplay.textContent = currentValue + operator
  }
  else{
    let calValue = eval(calculatorDisplay.textContent)
    calculatorDisplay.textContent = calValue;
}
}

calcbtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => numberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

function deleteAll() {
  let val = calculatorDisplay.textContent.slice(0, -1);
  calculatorDisplay.textContent = val;
}

function clearAll() {
  firstValue = 0;
  operatorValue = '';
  nextValue = false;
  calculatorDisplay.textContent = '';
}

deletebtn.addEventListener('click', deleteAll);
clear.addEventListener('click', clearAll);