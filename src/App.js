import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      {name:'Max', age : 29},
      {name:'Manu', age :13},
      {name:'Angel', age : 34}
    ]
  }
  switchHandlerMethod = (changeName)=> {
    //console.log('called')
    // Don't do that
    // this.state.persons[0].name = 'Kol';
    // use special property
    this.setState({
      persons:[
        {name:changeName, age : 29},
        {name:'Joe', age :13},
        {name:'Jill', age : 34}
      ]
    })
  }
    render() {
        return (
          // we don't have to add a class attribute
          // There will be one div for a component to start
          <div className = "App" >
            <h1> Hello in react </h1>
            <button onClick={this.switchHandlerMethod.bind(this,'KBB')}>Switch</button>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click= {this.switchHandlerMethod.bind(this,'Max')}>
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchHandlerMethod.bind(this,'Mac')}>
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
              This is a text
            </Person>
          </div >
        );
        //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hello from React'))
    }
}

export default App;
