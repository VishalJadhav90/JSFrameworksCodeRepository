import React from 'react';

const validateString = (props) => {
    let message = null;
    if (props.username.length < 5) {
        message = (<p>Text too short</p>);
    } else {
        message = (<p>Text long enough</p>);
    }
    return message;
}

export default validateString;