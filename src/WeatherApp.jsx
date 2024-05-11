import Searchbox from './Searchbox';
import Infobox from './Infobox';
import { useState } from 'react';



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelslike: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: ""
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }} >
            <h2>Weather Application By Atharav</h2>
            <Searchbox updateInfo={updateInfo} />
            <Infobox info={weatherInfo} />
        </ div >
    )
}