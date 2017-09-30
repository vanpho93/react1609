import axios from 'axios';

function sleep2second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 500);
    });
}

function getWeather(cityName) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    return sleep2second()
    .then(() => axios.get(url + cityName))
    .then(response => response.data.main.temp);
}

export default getWeather;
