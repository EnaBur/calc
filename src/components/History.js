import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const History = ({ solution, solutions, setSolutions }) => {
    //const [solutionValue, setSolutionValue] = useState('');
    //solutionValue = {solution};
    //setSolutionValue({...solutionValue, solution});

    const addHistory = () => {
        return solutions.map((sol, index) => (
            <button className="historySolution" key={index}>
            {sol}
            </button>
        ));
    };
    const handleDelete = (e) => {
        const i = e.target.key;
        solutions.splice(i, 1);
        setSolutions([...solutions]);
    }
    return(
        <div className="screen">
            <h1>History</h1>
            <div className='historyButtons'>{addHistory()}</div>
            <div className="dataHistory">
                <button className='trash' onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    )
}

export default History;