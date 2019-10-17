import React, { Component } from 'react';

export default class Filter extends Component{
  constructor(){
    this.state = {
      labels: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
    }
  }

  render(){
    const ChekersList = this.state.labels.map((item, index) => {
      return <TrasferChecker key={index} label={item} />
    })
    return(
      <div className="filter">
        <p>Количество пересадок</p>
        <div className="checkers">
          {ChekersList}
        </div> 
      </div>
    );
  }
}

const TrasferChecker = (props) => {
  return(
    <li key={props.key}><input type="checkbox" />{props.label}</li>
  );
}