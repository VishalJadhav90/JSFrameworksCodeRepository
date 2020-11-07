import React, { Component, useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

import norway from '../assets/norway.jpg';
import baby from '../assets/baby.jpg';
import northern_lights from '../assets/northern_lights.jpg';
import underwears from '../assets/underwears.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] In the constructor");
  }

  state = {
    persons: [
      {id: "dkjfls", name: 'Max', age: 28},
      {id: "w3udsf", name: 'Manu', age: 49},
      {id: "3kfjl3", name: 'Stephanie', age: 28}
    ],
    otherState: 'some other value',
    username: 'enter username',
    showDetails: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  deleteNameHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const perIndex = this.state.persons.findIndex(person => {
      return id===person.id
    })
    const person = {...this.state.persons[perIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[perIndex] = person;

    this.setState((prevState, props) => {
      return {
              persons: persons,
              changeCounter: prevState.changeCounter + 1
             }
    });
  }

  loginHandler = () => {
    this.setState((prevState, props) => {
      return {
        authenticated: true
      }
    });
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  toggleViewDetails = () => {
    let status = this.state.showDetails;
    this.setState({
      showDetails: !status
    })
  }

  render() {
    console.log("[App.js] render");
    let persons = null;
    
    if (this.state.showDetails) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deleteNameHandler} 
            changed={this.nameChangedHandler} />
    }


  
    return (
      <Aux>
        <button onClick={() => {
          this.setState({'showCockpit': !this.state.showCockpit})
          }}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            clicked={this.toggleViewDetails}
            showPersons={this.state.showDetails}/> : null}
          {persons}
        </AuthContext.Provider>
        <div className={classes.divimg}>
          <img src={norway} className={classes.img}></img>
        </div>
        <div className={classes.divimg}>
          <img src={baby} className={classes.img}></img>
        </div>
        <div className={classes.divimg}>
          <img src={northern_lights} className={classes.img}></img>
        </div>
        <div className={classes.divimg}>
          <img src={underwears} className={classes.img}></img>
        </div>
      </Aux>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1', null, "this seems to work"));
  }
}

export default withClass(App, classes.App);