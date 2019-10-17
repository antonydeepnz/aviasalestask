import React, {Component} from 'react'

const getTerm = (num) => {
  const number = +(num.toString().slice(-1));
  const term = '';
    if(number == 0) {
      return 'Без пересадок'
    }
    if(number == 1) {
      term = 'ка';
    }
    if(number > 1) {
      term = 'ки';
    }
    if(number > 4) {
      term = 'ок';
    }
  return `${num} пересад${term}`
}

const minutesRound = (t) => {
  const time = +(t.toString().slice(-1));

  if(time <= 2){
    return t.toString().slice(0,1).concat(0);
    }
    else if(time >= 7){
      return (+(t.toString().slice(0,1))+1).toString().concat(0);
    } else {
      return +t.toString().slice(0,1).concat(5);
    }
}

const endTime = (h,m) => {
  const hours = h, minutes = m, nextDay = '';
  if(m > 60) {
    minutes = (m % 60);
    hours += 1; 
  }
  if(h >= 24) {
    hours = (h % 24);
    (hours < 10)? hours = '0' + hours: hours;
    nextDay = '+1';
  }
  return `${hours}:${minutes}${nextDay}`
}

const routeTimeFunc = (start, end) => {
  const startTime = new Date(start);
  const endTimeH = Number(startTime.getHours()) + Math.floor(end / 60);
  const endTimeM = Number(startTime.getMinutes()) + Number(end % 60);
  
  return `${startTime.getHours()}:${minutesRound(startTime.getMinutes())} - ${endTime(endTimeH,endTimeM)}`
}

export default class Ticket extends Component {
  constructor(){
    super();

  }

  render(){
    //const priceFinal = price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + P;
    const segments = this.props.segments;
/*
    const fligthDetails = this.props.segments.map(item => {
      return(
        <div>
          <Destination 
            date={item.date}
            origin={item.origin} 
            destination={item.destination} 
            duration={item.duration} 
            stops={item.stops} />
        </div>
      );
      console.log(item);
    })*/
    const flightFrom = 
        <Destination 
          date={segments[0].date}
          origin={segments[0].origin} 
          destination={segments[0].destination} 
          duration={segments[0].duration} 
          stops={segments[0].stops} />;

    const flightTo = 
        <Destination 
          date={segments[0].date}
          origin={segments[1].origin} 
          destination={segments[1].destination} 
          duration={segments[1].duration}
          stops={segments[1].stops} />;

    return(
      <div className="ticket">
        <div className="ticket-header">
          <h3>{this.props.price} P</h3>
          <CompanyIcon companyIcon={this.props.icon}/>
        </div>
        {flightFrom}
        {flightTo}
      </div>
    );
  }
}

const CompanyIcon = (props) => {
  return (
    <img src={`https://pics.avs.io/99/36/${props.companyIcon}.png`}/>
  );
}//

const Destination = (props) => { 
  
 
  return (
    <div className="destination">
      <Route origin={props.origin} 
            destination={props.destination} 
            date={props.date}
            duration={props.duration} />
      <Duration duration={props.duration}/>
      <Stops stops={props.stops}/>
    </div>
  );
}

const Route = (props) => {
  const route = `${props.origin} - ${props.destination}`;
  const routeTime = routeTimeFunc(props.date, props.duration);
  return (
    <div>
        <p>{route}</p>
        <p>{routeTime}</p>
    </div>
  );
}

const Duration = (props) => {
  const duration = Math.floor(props.duration / 60) + 'ч ' + minutesRound(props.duration % 60) + 'м';
  return(
    <div>
        <p>в пути</p>
        <p>{duration}</p>
    </div>
  );
}

const Stops = (props) => {
  const stopsCount = getTerm(props.stops.length);
  const stops = props.stops.join(', ');
  return(
    <div>
        <p>{stopsCount}</p>
        <p>{stops}</p>
      </div>
  );
}


////////
/*
function getTermination(num){
  const number = +(num.toString().slice(-2));
  let term = '';
  if(number > 10 && number < 15)
    {
      term = 'ок';
    }
    else
    { 
    number = +(num.toString().slice(-1));
      if(number == 0) { term = "ев";}
      if(number == 1 ) { term = "й";}
      if(number > 1 ) { term = "я";}
      if(number > 4 ) { term = "ев";}
    } 
    const res = `${num} комментари${term}`;
    console.log(res);
}
*/