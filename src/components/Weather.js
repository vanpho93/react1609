import React, { Component } from 'react';
import WeatherMessage from './WeatherMessage';
import getWeatherApi from '../apis/getTempApi';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: null,
            temp: null,
            isLoading: false
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather() {
        const cityName = this.refs.txtCityName.value;
        this.setState({ isLoading: true });
        getWeatherApi(cityName)
        .then(temp => this.setState({ cityName, temp, isLoading: false }))
        .catch(error => {
            alert('Cannot find your city name.');
            this.setState({ cityName: null, temp: null, isLoading: false });
        });
        this.refs.txtCityName.value = '';
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <WeatherMessage {...this.state} />
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
