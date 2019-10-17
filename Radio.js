import React, { Component } from 'react';

export default class Radio extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="radio-wrapper">
        <button onClick={() => {this.props.setChecker('this.target.value')}}>click</button>
        <RadioButton text="Самый дешевый" onClick={this.props.setChecker}/>
        <RadioButton text="Самый быстрый"/>
      </div>
    );
  }
}//() => {this.props.setChecker('this.target.value')}

const RadioButton = (props) => {
  return (
    <div className="radio" onClick={() => {props.setChecker('this.target.value')}}>
      <input type="radio" />
      <label>{props.text}</label>
    </div>
  );
}