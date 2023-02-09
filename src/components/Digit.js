import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Digit = ({ additionalStatus, setadditionalStatus }) => {
  const [inputValue, setInputValue] = useState("");
  const [solution, setSolv] = useState("");

  const operators = ['+', '-', '*', '/', '=', '.', '%'];

  const calculation = (input) => {
    if (solution !== '') {
        setInputValue(solution);
        setSolv('');
    }

    if (
        (operators.includes(input) && inputValue === '') ||
        (operators.includes(input) && operators.includes(inputValue.slice(-1)))
    ) {
      return;
    }
    if (!isNaN(input) || input === '.') {
        setInputValue(inputValue + input);
    } else if (input === 'sqrt') {
      const number = parseFloat(inputValue);
      if (!isNaN(number)) {
        setSolv(Math.sqrt(number).toString());
        setInputValue(solution);
      }
    } else if (input === '^2') {
        setSolv((inputValue * inputValue).toString());
        setInputValue(solution);
    } else if (operators.includes(input)) {
      if (input === '=') {
        const expression = inputValue;
            try {
              setSolv(eval(expression).toString());
              setInputValue(solution);
            } catch (error) {
              setSolv("Error");
              setInputValue("Error");
            }
          } else {
            setInputValue(inputValue + input);
          }     
    }

    if (input === "0" && inputValue === "") {
      return;
    }
  };
      
  const addNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => calculation(i)} className="num">
          {i}
        </button>
      );
    }
    return digits;
  };

  const handleDel = () => {
    setInputValue(inputValue.slice(0, -1));
    setSolv('');
  };

  const keyMap = {
    Backspace: handleDel,
    Enter: () => calculation("="),
    "+": () => calculation("+"),
    "-": () => calculation("-"),
    "*": () => calculation("*"),
    "/": () => calculation("/"),
    "%": () => calculation("%"),
    ".": () => calculation("."),
  };
  
  const handleKeyDown = (event) => {
    const keyHandler = keyMap[event.key];
    if (keyHandler) {
      keyHandler();
    }
  };

  useEffect(() => {
    const handleNumberKeyDown = (event) => {
      const number = parseInt(event.key);
      if (!isNaN(number)) {
        calculation(number);
      }
    };

    window.addEventListener("keydown", handleNumberKeyDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleNumberKeyDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calculation, handleKeyDown]);

  return (
    <div className="calculator">
      <div className="inputField">
      <input
            type="text"
            id="input"
            name="input"
            placeholder="0"
            value={solution !== '' ? solution : inputValue}
        />

      </div>

      <button
        className="hamburger"
        onClick={() => setadditionalStatus(!additionalStatus)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`keyboard ${additionalStatus ? 'move-simple' : ''}`}>
        <div className={`additional ${additionalStatus ? 'show-additional' : ''}`}>
          <button>ln</button>
          <button id="addit-style">log</button>
          <button>10^x</button>
          <button>|x|</button>
          <button onClick={() => calculation('3.14')}>pie</button>
          <button>x^y</button>
        </div>

        <div className="numbers">
          <button onClick={() => calculation('%')}>%</button>
          <button>CE</button>
          <button>C</button>
          <button id="addit-style">1/x</button>
          <button onClick={() => calculation('^2')} id="addit-style">sqr</button>
          <button onClick={() => calculation('sqrt')} id="addit-style">sqrt</button>

          {addNumbers()}

          <button onClick={() => calculation('*(-1)')}>neg</button>
          <button onClick={() => setInputValue("0")}>0</button>
          <button onClick={() => calculation('.')}>.</button>
        </div>
        <div className="simple">
            <button onClick={handleDel}>del</button>
            <button onClick={() => calculation('/')} id='addit-style'>/</button>
            <button onClick={() => calculation('*')}>x</button>
            <button onClick={() => calculation('-')}>-</button>
            <button onClick={() => calculation('+')}>+</button>
            <button onClick={() => calculation('=')} id='equality'>=</button>
        </div>
                
        </div>
    </div>
    )
    
}

export default Digit;