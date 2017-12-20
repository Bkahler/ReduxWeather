import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData){

    if(!cityData){
      return null
    };

    const name = cityData.city.name;
    const temps = _.map(cityData.list.map( weather=> weather.main.temp ), (temp)=> (temp * (9/5)) - 459.67 )
    const pressures = cityData.list.map( weather=> weather.main.pressure )
    const humidities = cityData.list.map( weather=> weather.main.humidity )

    return(
      <tr key={name}>
        <td> {name}</td>
        <td> <Chart data={temps} color='blue' units='f'/> </td>
        <td> <Chart data={pressures} color='red' units='hPA'/> </td>
        <td> <Chart data={humidities} color='green' units='%'/> </td>
      </tr>
    );
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (f)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
};

function mapStateToProps({ weather }){
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
