import React from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const History = () => {
    return(
        <div className="screen">
            <h1>History</h1>
            <div className="dataHistory">
                <button className='trash'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    )
}

export default History;