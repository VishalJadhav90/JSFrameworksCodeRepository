import React, { Component } from 'react';
import './UserInput.css'

class UserInput extends Component {
    render() {
        return (
            <input type="text" onChange={this.props.changed} className="UserInput" value={this.props.username}/>
        );
    }
}

export default UserInput;