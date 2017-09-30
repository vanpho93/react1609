import React, { Component } from 'react';

export default class Weather extends Component {
    componentDidMount() {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h3>Saigon is now 33</h3>
                <br />
                <input ref="txtCityName" placeholder="Enter your city name" className="form-control"/>
                <br /><br />
                <button className="btn btn-primary">Get weather</button>
            </div>
        );
    }
}
