import React from 'react'
import frame from "../assets/fr1.png";
import prod from "../assets/pr1.png";
import prod1 from "../assets/pr2.png";
import prod2 from "../assets/pr3.png";
import prod3 from "../assets/pr4.png";
import prod4 from "../assets/pr5.png";
import { useState } from 'react';


const About = () => {
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
    <>
   <div className="about-container">
      <div className="about-card">
        <h2 className="about-title">About us</h2>
        <p className="about-text">
          There are people who can’t start their day without having a freshly brewed cup of coffee,
          and we understand them.
        </p>
      </div>
    </div>

    <div className="about-container1">
      <div className="about-images">
        <img src={frame} alt="Cafe 1" className="about-image main" />
      </div>
      <div className="about-content1">
        <h2 className="about-title1">Enjoy the best high-quality coffee</h2>
        <p className="about-text1">
          Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia.
          We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of
          that country’s coffee.A coffee café is more than just a place to grab a cup of coffee—it’s a cozy retreat where people gather to relax, work, or catch up with friends. 
          The rich aroma of freshly brewed coffee fills the air, creating a warm and inviting atmosphere. Whether you prefer a classic espresso, a creamy latte, or a refreshing iced coffee, there’s something for every coffee lover. 
          Many cafés also offer a selection of pastries and light snacks to complement the drinks. 
          With comfortable seating, soft music, and friendly service, a coffee café provides the perfect escape from the hustle and bustle of daily life.
        </p>
      </div>
    </div>

    <section className="partners-section">
      <h2 className="partners-title">Our partners</h2>
      <p className="partners-description">
        There are people who can’t start their day without having a freshly brewed cup of coffee, and we understand them.
      </p>
      <div className="partners-logos">
        <img src={prod} alt="Partner 1" className="partner-logo" />
        <img src={prod1} alt="Partner 2" className="partner-logo" />
        <img src={prod2} alt="Partner 3" className="partner-logo" />
        <img src={prod3} alt="Partner 4" className="partner-logo" />
        <img src={prod4} alt="Partner 5" className="partner-logo" />
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
    </>
  )
}

export default About