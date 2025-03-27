import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const Commen = () => {
     let [count, setCount] = useState([])
            useEffect (() => {
                fetch("http://localhost:4001/testimonials", {method : 'GET'})
                .then(response => response.json())
                .then(data => setCount(data))      
            } , [])
  return (
    <div>
        <section className="testimonials">
      <h2>Hear from our awesome clients</h2>
      <p>
        There are people who can’t start their day without having a freshly
        brewed cup of coffee and we understand them.
      </p>
      <div className="testimonial-container">
        {count.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">❝</div>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.quote}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.role}</span>
            <div className="quote-icon-bottom">❞</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Commen