import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Digit = ({ additionalStatus, setadditionalStatus }) => {
    const [inputValue, setInputValue] = useState("");
    const [solution, setSolv] = useState("");
  
    const operators = ['+', '-', '*', '/', '=', '.'];
  
    const calculation = (input) => {
        if (solution !== '') {
            setInputValue("");
            setSolv("");
        }
        
        if (
            operators.includes(input) && inputValue === "" ||
            operators.includes(input) && operators.includes(inputValue.slice(-1))
        ) {
          return;
        }
      
        if (!isNaN(input) || input === '.') {
            setInputValue(inputValue + input);
        } else if (operators.includes(input)) {
            if (input === '=' && !operators.includes(inputValue.slice(-1))) {
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
  };

  const keyMap = {
    Backspace: handleDel,
    Enter: () => calculation("="),
    "+": () => calculation("+"),
    "-": () => calculation("-"),
    "*": () => calculation("*"),
    "/": () => calculation("/"),
  };
  
  const handleKeyDown = (event) => {
    const keyHandler = keyMap[event.key];
    if (keyHandler) {
      keyHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const number = parseInt(event.key);
      if (!isNaN(number)) {
        calculation(number);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calculation]);

  useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
        document.removeEventListener("keydown", handleKeyDown);
        };
  }, []);

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
          <button>pie</button>
          <button>x^y</button>
        </div>

        <div className="numbers">
          <button onClick={() => calculation('%')}>%</button>
          <button>CE</button>
          <button>C</button>
          <button id="addit-style">1/x</button>
          <button id="addit-style">sqr</button>
          <button id="addit-style">sqrt</button>

          {addNumbers()}

          <button>neg</button>
          <button onClick={() => setInputValue("0")}>0</button>
          <button>.</button>
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