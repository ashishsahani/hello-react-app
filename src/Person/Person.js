import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Im {props.name} and I am {props.age} years old</p>
      <div>{props.children}</div>
      <div><input type='text' onChange={props.changed} value={props.name}/></div>
    </div>
  )
}

export default person
