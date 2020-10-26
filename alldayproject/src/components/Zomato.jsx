import React from 'react';


//TODO: 
const Zomato = (props) => {
  let latitude = 39.791000 ;
  let longitude = -86.148003;
 
 fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
  headers: {
    Accept: "application/json",
    "User-Key": "168381088d4e1f30408aa5d6df8bd7d8"
  }

  .then(response => response.json())
  .then(data => console.log(data))
})
  
  return(
    <div>
      <h1>Testing</h1>
    </div>
  )
}

export default Zomato;
