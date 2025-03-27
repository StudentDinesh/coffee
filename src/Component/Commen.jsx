import React from 'react'


const Commen = () => {
const testimonials=[
        {
            "name": "John Doe",
            "role": "WEB-DESIGNER",
            "image": "https://randomuser.me/api/portraits/men/1.jpg",
            "quote":
              "Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique."
          },
          {
            "name": "Mark Davidson",
            "role": "BLOGGER",
            "image": "https://randomuser.me/api/portraits/men/2.jpg",
            "quote":
              "Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique."
          },
          {
            "name": "Anita May",
            "role": "BLOGGER",
            "image": "https://randomuser.me/api/portraits/women/1.jpg",
            "quote":
              "Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique."
          }
      ]
  return (
    <div>
        <section className="testimonials">
      <h2>Hear from our awesome clients</h2>
      <p>
        There are people who can’t start their day without having a freshly
        brewed cup of coffee and we understand them.
      </p>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
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