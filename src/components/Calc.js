import React, { useState } from 'react';
import Digit from './Digit';
import History from './History';


const Calc = () => {
    const [additionalStatus, setadditionalStatus] = useState(false);
    const [solution, setSolv] = useState('');
    return(
        <div className="calc">
            <Digit 
                additionalStatus={additionalStatus} 
                setadditionalStatus={setadditionalStatus}
                solution = {solution}
                setSolv = {setSolv}
                 />
            <History
                solution = {solution}
            />
        </div>
            
        
    )
}

export default Calc;
