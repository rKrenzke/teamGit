import React, { useEffect, useState } from 'react';
import './App.css';
import Zomato from './components/Zomato';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
  };

  return (
    <div className="App">
      {getLocation()}
      <Zomato latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;

// <Nasa longitude={longitude} latitude={latitude} />
// <Weather longitude={longitude} latitude={latitude} />