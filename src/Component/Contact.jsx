import React from 'react'
import conimg from "../assets/contact.png";
import { useState } from 'react';


const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      message: "",
    });
  
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


    const validateForm = () => {
      let newErrors = {};
  
      if (!formData.name.trim()) {
        newErrors.name = "Name is required.";
      }
  
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      }
  
      if (!formData.message.trim()) {
        newErrors.message = "Message cannot be empty.";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input change
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    };

  return (
    <>
<div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-text">
          There are people who can’t start their day without having a freshly brewed cup of coffee,
          and we understand them.
        </p>
      </div>
    </div>

    <div className="contact-container1">
      <div className="contact-box">
        <div className="contact-form">
          <h2 className="contact-title">Write us</h2>
          <p className="contact-subtitle">
            We will receive your message and our support team will respond within a few minutes.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`contact-input ${errors.name ? "input-error" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`contact-input ${errors.email ? "input-error" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            className={`contact-textarea ${errors.message ? "input-error" : ""}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}

          <button className="contact-submit" onClick={handleSubmit}>Submit</button>
        </div>

        <div className="contact-image">
          <img src={conimg} alt="Cafe" />
        </div>
      </div>
    </div>

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
              loading="lazy"
            ></iframe>
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
</>
   )
}

export default Contact