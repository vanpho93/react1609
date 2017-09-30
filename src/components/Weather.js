import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'Hanoi',
            temp: 30
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(cityName) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        axios.get(url + cityName)
        .then(response => {
            const temp = response.data.main.temp;
            this.setState({ temp, cityName });
        })
        .catch(error => console.log(error));
    }

    render() {
        const { cityName, temp } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                <h3>{cityName} is now {temp}<sup>o</sup>C</h3>
                <br />
                <input ref="txtCityName" placeholder="Enter your city name" className="form-control"/>
                <br /><br />
                <button className="btn btn-primary" onClick={() => this.getWeather(this.refs.txtCityName.value)}>
                    Get weather
                </button>
            </div>
        );
    }
}
