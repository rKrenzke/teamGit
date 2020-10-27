import React, { useState } from 'react';


let key ="37c3095143d59b0edec8ec8f95d123fe";

const Zomato = (props) => {
    let lat = props.latitude;
    let lon = props.longitude;

    let latitude = 39.791000;
    let longtitude = -86.148003;


    const getRestaurants = () => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`, {
            headers: {
              Accept: "application/json",
              "User-Key": "37c3095143d59b0edec8ec8f95d123fe"
            }
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {getRestaurants()}
            <h1>Hello</h1>
        </div>
    )
}

    export default Zomato;
