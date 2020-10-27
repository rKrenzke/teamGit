import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from './components/Weather';
import Zomato from './components/Zomato';


function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function error(error_message) {
          console.error('An error has occured while retrieving location', error_message)
        });
    } else {
      console.log('geolocation is not enabled on this browser')
    };
  }

  // ensure 'getLocation' only runs once
  useEffect(() => {
    getLocation()
  }, [])

  //if lat or long is not set, return a loading message
  if (!latitude || !longitude) return (
    <div>Getting your location...</div>
  )

  useEffect(()=> {
    getLocation();
  }, [])

  return (
    <div className="App">

      <Container>
        <div>
          <Weather longitude={longitude} latitude={latitude} />
          <Zomato latitude={latitude} longitude={longitude}/>
        </div>
      </Container>
      {/* <Nasa longitude={longitude} latitude={latitude} /> */}
      {getLocation()}
    </div>
  );
}
export default App;

// <Nasa longitude={longitude} latitude={latitude} />
// <Weather longitude={longitude} latitude={latitude} />
// {getLocation()}