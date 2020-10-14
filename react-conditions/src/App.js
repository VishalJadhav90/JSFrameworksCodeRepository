import React, { Component } from 'react';
import './App.css';
import ValidateString from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import charComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username: ''
  }

  changeHandler(event) {
    this.setState({username: event.target.value});
  }

  removeCharacter(index) {
    let username = [...this.state.username]
    username.splice(index, 1)
    this.setState({username: username.join('')})
  }

  render() {
    let charComps = [...this.state.username].map((char, index)=>{
      return (<CharComponent char={char} click={this.removeCharacter.bind(this, index)} key={index}/>)
    })

    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler.bind(this)} value={this.state.username}/>
        <p>You have entered {this.state.username}</p>
        <ValidateString username={this.state.username}></ValidateString>
        {charComps}
      </div>
    );
  }
}

export default App;
