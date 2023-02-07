import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Digit = ({ additionalStatus, setadditionalStatus }) => {

    //const hide = () => {
        //setadditionalStatus(!additionalStatus);
        //let skriveni = document.getElementsByTagName('Additional');
        //skriveni.style.visibility = 'hidden';
    //};

    const [calculate, setCalc] = useState("");
    const [solution, setSolv] = useState("");

    const operators = ['+', '-', '*', '/', '=', '.'];

    const calculation = inputValue => {
        if( 
            operators.includes(inputValue) && calculate === '' ||
            operators.includes(inputValue) && operators.includes(calculate.slice(-1))
        ) {
            return;
        }
        setCalc(calculate + inputValue);
    }

    const addNumbers = () => {
        const digits = [];
        for(let i=1; i<10; i++) {
            digits.push(
                <button onClick={() => document.getElementById("input").value=i} className='num' key={i}>{i}</button>
                
            )
        }
        return digits;
    }

    return(
        <div className='calculator'>
            <div className="inputField">
                <input type="number" id="input" name="input" placeholder="0" ></input>
            </div>
            
            <button className='hamburger' onClick={() => setadditionalStatus(!additionalStatus)}><FontAwesomeIcon icon={faBars} /></button>
        
            <div className={`keyboard ${additionalStatus ? 'move-simple' : ''}`}>

            <div className={`additional ${additionalStatus ? 'show-additional' : ''}`}>
                <button>ln</button>
                <button id='addit-style'>log</button>
                <button>10^x</button>
                <button>|x|</button>
                <button>pie</button>
                <button>x^y</button>
            </div>

                <div className="numbers">
                    <button  onClick={() => calculation('%')}>%</button>
                    <button>CE</button>
                    <button>C</button>
                    <button id='addit-style'>1/x</button>
                    <button id='addit-style'>sqr</button>
                    <button id='addit-style'>sqrt</button>
                    
        	        { addNumbers() }

                    <button >neg</button>
                    <button >0</button>
                    <button >.</button>
                </div>
                <div className="simple">
                    <button >del</button>
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