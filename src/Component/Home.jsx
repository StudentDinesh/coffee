import React from 'react'
import coffeeImage from "../assets/banner1.jpg";
import cup from "../assets/cup1.png";
import cups from "../assets/cup2.png";
import cupes from "../assets/cup3.png";
import baristaImage from "../assets/abo1.png";
import Product from './Product';
import gallery from "../assets/ga1.png";
import gallery1 from "../assets/ga2.png";
import gallery2 from "../assets/ga3.png";
import gallery3 from "../assets/ga4.png";
import gallery4 from "../assets/ga5.png";
import gallery5 from "../assets/ga6.png";
import Commen from './Commen';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setError("🤗 Email field cannot be empty.");
      setSuccess("");
    } else if (!validateEmail(email)) {
      setError("🤨 Please enter a valid email address.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("🤩 Thank you for subscribing!");
      setEmail(""); // Clear the input field after successful submission
    }
  };

  return (
    <div>
        <section className="content">
      <div className="content-left">
        <h1>Great coffee <br /> for some joy</h1>
        <p>
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
      </div>

      <div className="content-right">
        <div className="coffee-image-container">
          <img src={coffeeImage} alt="Mocha Coffee" className="coffee-image" />
        </div>
        <div className="coffee-info">
          <h3>Cappuccino</h3>
        </div>
      </div>

      <div className="content-rights3">
        <div className="coffee-image-container">
          <img src={cup} alt="Mocha Coffee" className="coffee-image" />
        </div>
        <div className="coffee-info">
          <h3>Espresso</h3>
        </div>
      </div>

      <div className="content-rights2">
        <div className="coffee-image-container">
          <img src={cups} alt="Mocha Coffee" className="coffee-image" />
        </div>
        <div className="coffee-info">
          <h3>latte</h3>
        </div>
      </div>

      <div className="content-rights1">
        <div className="coffee-image-container">
          <img src={cupes} alt="Mocha Coffee" className="coffee-image" />
        </div>
        <div className="coffee-info">
          <h3>Mocha</h3>
        </div>
      </div>
    </section>

    <div>
        <section className="story-section">
      <div className="story-images">
        <div className="main-image">
          <img src={baristaImage} alt="Barista Team" />
        </div>
      </div>
      <div className="story-content">
        <h2>Our story</h2>
        <p>
          Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia.
          We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that
          country's coffee. The fruity acidity of this single-origin coffee is balanced by its sweet honey notes,
          creating soft, light notes with a light character.
        </p>
      </div>
    </section>
 </div>


    <Product/>

    <div className='galls'>
    <h2 className="name">Coffee gallery</h2>
    <div className='gall'>
        <img src={gallery} alt="Barista Team" />   
        <img src={gallery1} alt="Barista Team" />    
        <img src={gallery2} alt="Barista Team" />     
    </div>
    <div className='gall'>
        <img src={gallery3} alt="Barista Team" />   
        <img src={gallery4} alt="Barista Team" />    
        <img src={gallery5} alt="Barista Team" />
    </div>
    </div>

     <div className="happy-hours">
      <div className="content1">
        <h2>Happy hours - get <span>25% off</span></h2>
        <p>
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
        <Link to="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu,+India/@11.006248,76.960398,11z/data=!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" className="order-btn">VISIT NOW</Link>      </div>
    </div>

        <Commen/>

        <section className="coffee-shops">
      <div className="container">
        <h2>Visit our coffee shops</h2>
        <p>
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>

        <div className="shop-info">
          {/* Google Map Embed */}
          <div className="map">
            <iframe
              title="Coffee Shop Location"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Coimbatore&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
              </iframe>
          </div>

          {/* Working Hours */}
          <div className="working-hours">
            <h3>Working Hours</h3>
            <ul>
              <li>
                Monday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Tuesday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Wednesday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Thursday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Friday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Saturday <span>10:00AM – 07:00PM</span>
              </li>
              <li>
                Sunday <span className="closed">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>Coffee Cafe</h2>
          <p>
            There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
          </p>
          <p className="copyright">Copyright ©2025 Coffee cafe. All rights reserved.</p>
        </div>

        {/* Center Section - Contact */}
        <div className="footer-center">
          <h3>CONTACT US</h3>
          <p>19/4 Arabica Springs Road, Coimbatore, 624614</p>
          <p>
            Call Us: <strong>9874563210</strong>
          </p>
          <p>coffeecafe@company.com</p>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-right">
          <h3>SUBSCRIBE TO NEWSLETTER</h3>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "input-error" : ""}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <p className="newsletter-text">
            Sign up with your email address to receive news and updates </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Home