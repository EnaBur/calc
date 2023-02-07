import React, { useState } from 'react';
import Additional from './Additional';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Digit = ({ additionalStatus, setadditionalStatus }) => {

    const hide = () => {
        //setadditionalStatus(!additionalStatus);
        let skriveni = document.getElementsByTagName('Additional');
        //skriveni.style.visibility = 'hidden';
    };

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
                <button onClick={() => ""} className='znamenka' key={i}>{i}</button>
                //{/*<button onClick={() => calculate=(i.toString())} className='znamenka' key={i}>{i}</button>*/}
            )
        }
        return digits;
    }

    return(
        <div className='calculator'>
            <div className="inputField">
                <input type="number" id="input" name="input" placeholder="0" ></input>
            </div>
            {/*<button onClick={() => setadditionalStatus(!additionalStatus)} className="hamburger"></button>*/}
            <button className='hamburger' onClick={hide()}><FontAwesomeIcon icon={faBars} /></button>
        
            <div className="keyboard">

                <Additional/>

                <div className="numbers">
                    <button  onClick={() => calculation('%')}>%</button>
                    <button>CE</button>
                    <button>C</button>
                    <button id='addit-style'>1/x</button>
                    <button id='addit-style'>sqr</button>
                    <button id='addit-style'>sqrt</button>
                    
        	        { addNumbers() }

                    {/* <button class="znamenka">7</button>
                    <button class="znamenka">8</button>
                    <button class="znamenka">9</button>
                    <button class="znamenka">4</button>
                    <button class="znamenka">5</button>
                    <button class="znamenka">6</button>
                    <button class="znamenka">1</button>
                    <button class="znamenka">2</button>
                    <button class="znamenka">3</button> */}
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