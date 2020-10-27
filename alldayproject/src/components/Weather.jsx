import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap'; 

const Weather = (props) => {

const [isLoading, setIsLoading] = useState(true);
    //destructuring 
const {latitude, longitude} = props

  

    //set our API key
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY

    //set our url
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`

const getWeather = () => {
    console.log(url)
    fetch(url)
    // .then(blob => blob.json())
    .then(function(response) {
        return response.json()
    })
        .then(response => {

            console.log({response})
            
            const {main, weather} = response
            //Fahreheit
            // main.feels_like //44
            // main.temp   // 38

            // weather[0].description // light rain

            // once we have our data, turn off our loading message
            setIsLoading(false)
        })

        // show loading text if waiting for weather to load
        if(isLoading) return (
            <div>Loading weather..</div>
        )
    }

    // ensure 'getWeather' only runs once
    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div>
            <Button type="submit"></Button>
        </div>
    )   
}



export default Weather;