import React, { useEffect, useState } from 'react';
import {Card, CardBody, CardTitle, CardText, Container} from 'reactstrap';
import ZomatoResults from './ZomatoResults';

let key ="37c3095143d59b0edec8ec8f95d123fe";

const Zomato = (props) => {
    const [restaurants, setRestaurants] = useState();
    console.log(props.latitude);
    console.log(props.longitude);

    let latitude = 42.963795;
    let longitude = -85.670006;
   
    const getRestaurants = () => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`, {
            headers: {
              Accept: "application/json",
              "User-Key": "a9ffffa524fd243625973b4af6e2d736"
            }
          })
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(err => console.log(err));
    }

    // useEffect(() => {
        if(props.latitude && props.longitude && !restaurants){
        getRestaurants();
        console.log(restaurants)
        }
    // }, [])


    return (
        <div>
            <Container className="zomato">
                {restaurants ? <ZomatoResults results={restaurants}/> : null}
            </Container>
        </div>
    )
}

    export default Zomato;


    // let latitude = 39.791000;
    // let longitude = -86.148003;
