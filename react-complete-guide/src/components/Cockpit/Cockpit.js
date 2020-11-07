import React, { useEffect, memo, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const btnElementRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("[Cockpit.js] in useEffect");
        setTimeout( () => {
            alert("saved data in cloud!");
        }, 1000);
        btnElementRef.current.click();
        return () => {
            console.log("[Cockpit.js] in clean useEffect");
        }
    }, []);

    useEffect( () => {
        console.log('[Cockpit.js] in 2nd useEffect');
        return () => {
            console.log("[Cockpit.js] in clean 2nd useEffect");
        }
    });

    const selectedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    } else {
        btnClass = classes.green;
    }

    if (props.personsLength <= 2) {
        selectedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        selectedClasses.push(classes.bold);
    }

    console.log("[Cockpit.js] ")
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={selectedClasses.join(" ")}>This is really working !</p>
            <button ref={btnElementRef} className={btnClass}
            onClick={props.clicked}>
                Toggle Persons</button>
            { ! authContext.authenticated ? <button onClick={authContext.login}>Login</button>: null }
        </div>
    );
}

export default memo(cockpit);
