import React, { useState } from 'react';
import Digit from './Digit';
import History from './History';


const Calc = () => {
    const [additionalStatus, setadditionalStatus] = useState(false);
    return(
        <div className="calc">
            <Digit 
                additionalStatus={additionalStatus} 
                setadditionalStatus={setadditionalStatus} />
            <History/>
        </div>
            
        
    )
}

export default Calc;
