import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    render() {
        return (
          // we don't have to add a class attribute
          // There will be one div for a component to start
          <div className = "App" >
            <h1> Hello in react </h1>
            <Person name='Max' age='23'></Person>
            <Person name='Angel' age='18'></Person>
          </div >
        );
        //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hello from React'))
    }
}

export default App;
