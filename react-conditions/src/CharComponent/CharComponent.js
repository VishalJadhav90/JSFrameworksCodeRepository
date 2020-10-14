import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
            <div className="charDiv">
                <p onClick={props.click}>{props.char}</p>
            </div>
        )
}

export default charComponent;