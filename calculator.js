const display = document.getElementById('display');
let firstNumber = '';
let operator = '';
let secondNumber = '';
let currentNumber = '0';

function updateDisplay(value) {
    if (currentNumber === '0' || currentNumber === firstNumber) {
      currentNumber = value;
    } else {
      currentNumber += value;
    }
    display.textContent = currentNumber;
  }

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
      return "Cannot divide by zero!";
    }
    return a / b;
  }

  function operate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "×":
        return multiply(num1, num2);
      case "÷":
        return divide(num1, num2);
      default:
        return "Invalid operator";
    }
  }

  const numberButtons = document.querySelectorAll('.number');

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      updateDisplay(button.textContent);
    });
  });
  
  const operatorButtons = document.querySelectorAll('.operator');
  
  operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (firstNumber === '') {
        firstNumber = currentNumber;
      }
      operator = event.target.textContent;
      currentNumber = '';
      // Logging to see which operator was clicked
      console.log(`Operator ${operator} was clicked!`);
    });
  });
  
  const equalsButton = document.getElementById('equals');
  
  equalsButton.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '' && currentNumber !== '') {
      secondNumber = currentNumber;
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      display.textContent = result;
      firstNumber = result;
      secondNumber = '';
      currentNumber = '0';
      operator = '';
    }
  });
  
  // Clear button functionality
  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    currentNumber = '0';
    operator = '';
    display.textContent = currentNumber;
  });



  document.addEventListener('keydown', (event) => {
    const key = event.key;
  
    // Check if the key is a number or a dot
    if (!isNaN(key) || key === '.') {
      updateDisplay(key);
    }
  
    // Check if the key is an operator
  switch (key) {
    case '+':
    case '-':
      if (firstNumber === '') {
        firstNumber = currentNumber;
      }
      operator = key;
      currentNumber = '';
      break;
    case '*':
      if (firstNumber === '') {
        firstNumber = currentNumber;
      }
      operator = '×'; // Use the multiplication symbol you have in your HTML
      currentNumber = '';
      break;
    case '/':
      if (firstNumber === '') {
        firstNumber = currentNumber;
      }
      operator = '÷'; // Use the division symbol you have in your HTML
      currentNumber = '';
      break;
    case 'Enter': // Equals button
      if (firstNumber !== '' && operator !== '' && currentNumber !== '') {
        secondNumber = currentNumber;
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = result;
        firstNumber = result;
        secondNumber = '';
        currentNumber = '0';
        operator = '';
      }
      break;
    case 'Delete': // Clear button
      firstNumber = '';
      secondNumber = '';
      currentNumber = '0';
      operator = '';
      display.textContent = currentNumber;
      break;
    default:
      break;
    }
  });

  
