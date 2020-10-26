import React, { useState } from 'react';
import './App.css';

function App() {
  //state variable set to location
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
    </div>
  );
}

export default App;
