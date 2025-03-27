import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Product = () => {
    let [count, setCount] = useState([])
        useEffect (() => {
            fetch("http://localhost:4002/products", {method : 'GET'})
            .then(response => response.json())
            .then(data => setCount(data))      
        } , [])

  return (
    <section className="explore-section">
      <h2 className="section-title">Explore our <span>Coffee Shop</span></h2>
      <p className="section-description">
        There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
      </p>
      <div className="explore-grid">
        {count.map((item) => (
          <div key={item.id} className="explore-card">
            <img src={item.image} alt={item.title} className="explore-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
