import React, {useEffect, useState} from 'react';
import { Card, CardImg } from 'reactstrap';


const baseURL='https://api.nasa.gov/planetary/earth/assets';
const nasaKey = 'gWQwU9oVIst5HeoryDnfutr5hdZCaIkRB3h8mSpo';
// const longitude=props.longitude;
// const latitude=props.latitude;
const longitude=-112.366669;//surprise, AZ
const latitude=33.630554;//Surprise, AZ
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


// Indy - https://api.nasa.gov/planetary/earth/assets?lon=-86.158066&lat=39.768402&date=2020-10-26&&dim=0.10&api_key=gWQwU9oVIst5HeoryDnfutr5hdZCaIkRB3h8mSpo
// Surprise - https://api.nasa.gov/planetary/earth/assets?lon=-112.366669&lat=33.630554&date=2020-10-26&&dim=0.10&api_key=gWQwU9oVIst5HeoryDnfutr5hdZCaIkRB3h8mSpo


//TODO url iteration is correct, need to figure out how to grab picture


const Nasa = ()=>{
    const [picture,setPicture]=useState('');
    
    
    
    const fetchPicture=()=>{
        const url = `${baseURL}?lon=${longitude}&lat=${latitude}&date=${date}&&dim=.2&api_key=${nasaKey}`
        console.log(url)
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPicture(data.url))
    }
    useEffect(()=>{
        fetchPicture();
    }, [])


        return(
                   <div>
                       {fetchPicture}
                       <h1>NASA</h1>
                       <Card>
                        
                           <CardImg top width="50%" src={picture} alt="Card Image cap"/>
            
                       </Card>
                   </div>
        )
    }



export default Nasa;