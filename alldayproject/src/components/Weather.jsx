import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap'; 

const Weather = (props) => {

    //variables to hold our weather, info get from our fetch
    const [temp, setTemp] = useState('')
    const [feelslike, setFeelsLike] = useState('')
    const [weather, setWeather] = useState('')

    // determine if we are loading the weather
    const [isLoading, setIsLoading] = useState(true);

    // determine if we show the weather as f or c
    const [showFahrenheit, setShowFahrenheit] = useState(true)

    /**
     * 
     */
    const displayTemp = (val) => {
        if(!showFahrenheit) {
            //round down to 2 decimals places
            return Math.floor(((val - 32) * 5/9) * 100) / 100
        }
        //show fahrenheit
        return Math.floor(val)
    }

    //destructuring 
    const {latitude, longitude} = props

    //set our API key
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY

    //set our url
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`

    const getWeather = () => {
        console.log(url)
        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(response => {

                console.log({response})
                
                const {main, weather} = response
                //Fahrenheit
                setTemp(main.temp);//44 Fahrenheit
                setFeelsLike(main.feels_like)  // 38 Fahrenheit
                setWeather(weather[0].description) // light rain

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
            Temp is: {displayTemp(temp)}&deg;<br />
            Feels like: {displayTemp(feelslike)}&deg;<br />
            Weather: {weather}<br />
            <Button type="submit" onClick={() => setShowFahrenheit(!showFahrenheit)}>Temp Toggle</Button>
        </div>
    )   
}



export default Weather;