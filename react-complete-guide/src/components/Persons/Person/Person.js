import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[Person.js] getDerivedStateFromProps");
        return state;
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        console.log("[Person.js] ", this.context.login, this.context.authenticated);
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[Person.js] rendering");
        return (
            <Aux>
                    {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                    <p onClick={this.props.click}>I am {this.props.name}, I am {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
            </Aux>
        );
    
        // return (
        //     [
        //         <p key="id1" onClick={this.props.click}>I am {this.props.name}, I am {this.props.age} years old</p>,
        //         <p key="id2" >{this.props.children}</p>,
        //         <input key="id3" type="text" onChange={this.props.changed} value={this.props.name}/>
        //     ]
        // );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);