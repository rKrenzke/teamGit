import React, { useEffect, useState } from 'react';
import {Card, CardBody, CardTitle, CardText, Container} from 'reactstrap';
import ZomatoResults from './ZomatoResults';

let key ="37c3095143d59b0edec8ec8f95d123fe";

const Zomato = (props) => {
    const [restaurants, setRestaurants] = useState([]);

    let latitude = 42.963795;
    let longitude = -85.670006;
   
    const getRestaurants = () => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
            headers: {
              Accept: "application/json",
              "User-Key": "37c3095143d59b0edec8ec8f95d123fe"
            }
          })
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getRestaurants();
    }, [])


    return (
        <div>
            {getRestaurants}
            <Container className="zomato">
                <ZomatoResults results={restaurants} />
            </Container>
        </div>
    )
}

    export default Zomato;


    // let latitude = 39.791000;
    // let longitude = -86.148003;
