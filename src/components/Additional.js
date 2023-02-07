import React from 'react';

const Additional = (additionalStatus) => {
    return(
        <div className={`additional ${additionalStatus ? 'show-additional' : ''}`}>
                    <button>ln</button>
                    <button id='addit-style'>log</button>
                    <button>10^x</button>
                    <button>|x|</button>
                    <button>pie</button>
                    <button>x^y</button>
                </div>
    )
}

export default Additional;
