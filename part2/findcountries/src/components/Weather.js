import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather(props) {
    const [weather, setWeather] = useState([]);
    const { city } = props;
    
    useEffect(() => {
        const weatherReq = "http://api.weatherstack.com/current" +
            `?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}` +
            `&query=${city}`;

        axios
            .get(weatherReq)
            .then(response => {
                console.log("response:", response);
                setWeather(response.data.current);
            });
    }, [city]);

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p><b>Temperature: </b>{weather.temperature} Celsius</p><br/>
            <img src={weather.weather_icons} alt={weather.weather_descriptions}/><br/>
            <p><b>Wind: </b>{weather.wind_speed} kph towards {weather.wind_dir}</p>
        </div>
    );
}

export default Weather;