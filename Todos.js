import React, { Component } from 'react';

export default class Child extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  save(){
    const input = document.getElementById('input');
    this.props.update(input.value);
  }

  render(){
    return (
      <div>
        <input type = "text" id="input"/>
        <button onClick ={this.save}>Click to sort</button>
      </div>
    );////onChange = {(event) => {this.props.update(event.target.value)}}/>
  }
}