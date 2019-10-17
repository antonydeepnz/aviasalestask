import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Filter from './Filter'
import Ticket from './Ticket'
import Radio from './Radio'

class AviasalesApp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      list: ["rerwer",3,5,7,8,"dsfsdf"],
      tickets: [],
      typeChecker: '',
      stopsFilter: ''
    };
    this.update = this.update.bind(this);
    this.generateID = this.generateID.bind(this);
    this.setChecker - this.setChecker.bind(this);
  }

  componentDidMount(){
    fetch('https://front-test.beta.aviasales.ru/search',)
      .then(res => res.json())
      .then(json => {
        const id = json.searchId;
        fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
          .then(res => res.json())
          .then(json => {
            const obj = json.tickets.filter((item) => item.price < 20000);
            obj.map(item => this.setState({tickets: this.state.tickets.concat(item)}));
            console.log(this.state.tickets);
      })
    })
  }

  update(value){
    console.log(this.state.list);
    this.setState({list: this.state.list.concat(value)});
    //this.setState({name: value});
    this.render();
  }

  setChecker(value){
    //this.setState({typeChecker: value});
    console.log(value);
  }

  generateID() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };

  render() {
    const ticketsList = this.state.tickets.map(item => 
    <Ticket key={this.generateID()} 
            price={item.price} 
            icon={item.carrier} 
            segments={item.segments} />);
    
    return (
      <div className='wrapper'>
        <div className="filter-wrapper">
          <Filter />
        </div>
        <div className="tickets-wrapper">
          <Radio setChecker={this.setChecker}/>
          {ticketsList}
        </div>
           
      </div>
    );
  }
}
render(<AviasalesApp />, document.getElementById('root'));
