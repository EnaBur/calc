import React, { useState } from 'react';
import Digit from './Digit';
import History from './History';

const Calc = () => {
    const [additionalStatus, setadditionalStatus] = useState(false);
    const [solution, setSolv] = useState('');
    const [solutions, setSolutions] = useState([]);

  return (
    <div className="calc">
      <Digit 
        additionalStatus={additionalStatus} 
        setadditionalStatus={setadditionalStatus}
        solution={solution}
        setSolv={setSolv}
        solutions={solutions}
        setSolutions={setSolutions}
      />
      <History
        
        solution={solution}
        solutions={solutions}
        setSolutions = {setSolutions}
      />
    </div>
  );
};

export default Calc;
