import React, { Component } from 'react';

export default class WeatherMessage extends Component {
    render() {
        const { cityName, temp, isLoading } = this.props;
        const loadingMessage = <h3>Loading...</h3>;
        const showingMessage = <h3>{cityName} is now {temp}<sup>o</sup>C</h3>;
        const waitingMessage = <h3>Enter your city name</h3>;
        if (isLoading) return loadingMessage;
        if (cityName === null) return waitingMessage;
        return showingMessage;
    }
}