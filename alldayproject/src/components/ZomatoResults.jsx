import React from 'react';
import {Table} from 'reactstrap';

const ZomatoResults = (props) => {
    console.log(props)

    const restaurantMapper = () => {
        return props.results.nearby_restaurants.map((restaurant) => {
            console.log(restaurant)
            return(
                <tr>
                    <td>{restaurant.restaurant.name}</td>
                    <td>{restaurant.restaurant.cuisines}</td>
                    <td>${restaurant.restaurant.average_cost_for_two}</td>
                    <td>{restaurant.restaurant.location.address}</td>
                </tr>
            )
        })
    }
    

    return(
        <div>
            <div className="zomatoHeader">
                    <h2>Local Restaurants</h2>
                </div>
            <Table className="zomatoTable" striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Average Dinner $</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {restaurantMapper()}
                </tbody>
            </Table>
        </div>
    )
}

export default ZomatoResults;