import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';



export default function Searchbox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9f72dc84cecb2559616ed1f889cafc0d";

    let weatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric `
            );

            let jsonResponse = await response.json(); //parsing of json response into normal readable format
            // console.log(jsonResponse);
        } catch (err) {
            throw err;
        }

        let response = await fetch
            (`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric `);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_Min: jsonResponse.main.temp_min,
            temp_Max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }


    let handleCityChange = (event) => {
        setCity(event.target.value);
    };

    let handleCountryChange = (event) => {
        setCountry(event.target.value);
    };


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // console.log("City entered is:", city);
            // console.log("Country entered is:", country);
            setCity("");
            setCountry("");
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
        } catch {
            setError(true);
        }

    };

    return (
        <>
            <div className='SearchBox'>

                <form onSubmit={handleSubmit}>
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handleCityChange} />
                    <br></br><br></br><br></br>

                    <TextField
                        id="country"
                        label="Country Name"
                        variant="outlined"
                        required
                        value={country}
                        onChange={handleCountryChange} />

                    <br></br><br></br>

                    <Button variant="contained" type='submit'>
                        Search
                    </Button>
                    {error && <p style={{ color: "red" }}>No Such Place in API!!</p>}
                </form>
            </div>
        </>
    )
}