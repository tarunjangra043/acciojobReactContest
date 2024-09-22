import React, { useState } from 'react';
import '../styles/Calculator.css';  

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (input1 === '' || input2 === '') {
      setErrorMessage('Inputs cannot be empty');
      return false;
    }
    if (isNaN(input1) || isNaN(input2)) {
      setErrorMessage('Inputs must be valid numbers');
      return false;
    }
    setErrorMessage('');  
    return true;
  };

  const calculate = (operation) => {
    if (!validateInputs()) return;

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res;

    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setErrorMessage('Cannot divide by zero');
          return;
        }
        res = num1 / num2;
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second number"
      />
      <div className="button-group">
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('subtract')}>-</button>
        <button onClick={() => calculate('multiply')}>*</button>
        <button onClick={() => calculate('divide')}>/</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {result !== null && !errorMessage && (
        <p className="success">Result: {result}</p>
      )}
    </div>
  );
};

export default Calculator;
