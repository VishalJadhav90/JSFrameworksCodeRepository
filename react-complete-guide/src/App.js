import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {id: "dkjfls", name: 'Max', age: 28},
      {id: "w3udsf", name: 'Manu', age: 49},
      {id: "3kfjl3", name: 'Stephanie', age: 28}
    ],
    otherState: 'some other value',
    username: 'enter username',
    showDetails: false
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

    this.setState({
      persons: persons
    })
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
    let persons = null;
    if (this.state.showDetails) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age}
                  click={this.deleteNameHandler.bind(this, index)}
                  changed={(event)=>{this.nameChangedHandler(event, person.id)}}
                />
              )
            })
          }
          <p>{this.state.otherState}</p>
          <UserInput
            username={this.state.username}
            changed={this.usernameChangeHandler}></UserInput>
          <UserOutput
            username={this.state.username}></UserOutput>
          <UserOutput
            username={this.state.username}></UserOutput>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am a react App !!!</h1>
        <button 
          onClick={this.toggleViewDetails}>
            Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1', null, "this seems to work"));
  }
}

export default App;


// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 49},
//       {name: 'Stephanie', age:28}
//     ],
//     otherState: 'some other value'
//   });

  
//   const switchNameHandler = () => {
//     //this.state.persons[0].name = 'Maximus'; DO NOT do this, as this would not work
//     setPersonsState({
//       persons: [
//         {name: 'Maximus', age: 28},
//         {name: 'Manu', age: 49},
//         {name: 'Stephanie', age:28}
//       ]
//     })
//   };

//   return (
//       <div className="App">
//         <h1>Hi, I am a react App !!!</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies, Racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         <p>{personsState.otherState}</p>
//       </div>
//   );
// }

// export default app;