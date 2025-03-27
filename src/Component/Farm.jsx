import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const Farm = () => {
     let [count, setCount] = useState([])
            useEffect (() => {
                fetch("http://localhost:4002/farm", {method : 'GET'})
                .then(response => response.json())
                .then(data => setCount(data))      
            } , [])

  return (
    <div className='farm'>
        <img src="https://bluetokaicoffee.com/cdn/shop/files/allfarm-banner_1370x.png?v=1704352977" alt="" srcset=""/>

        <div className="farms-container">
      {count.map((farm) => (
        <div key={farm.id} className="farm-card">
          <img src={farm.image} alt={farm.title} className="farm-image" />
          <h2 className="farm-title">{farm.title}</h2>
          <p className="farm-description">{farm.description}</p>
        </div>
      ))}
    </div>

    

    </div>
  )
}

export default Farm