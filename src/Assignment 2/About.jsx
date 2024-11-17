import React, { useState } from 'react';
import './About.css';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., send the data to an API)
    alert('Message submitted!');
  };

  return (
    <div className="about-us-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Bake Delight</strong>, a bakery that has been bringing the finest baked goods to your table since 2010. We believe in using only the freshest ingredients, combined with a pinch of love, to create mouthwatering treats that bring joy to every occasion. Whether you're stopping by for a quick breakfast pastry or ordering a custom cake for a special event, we promise you the highest quality and taste.
        </p>
        <p>
          Our mission is simple: to spread happiness through delicious food. We value creativity, quality, and customer satisfaction above all else, and we are proud to be a part of your celebrations.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/BakeDelight" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/BakeDelight" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com/BakeDelight" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need to place a special order, please feel free to reach out to us!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-details">
          <h3>Our Contact Details</h3>
          <p>Address: 123 Sweet Street, Dessert City, DC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: <a href="mailto:contact@bak delight.com">contact@bakdelight.com</a></p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
