import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to schedule a consultation, feel free to reach out to us.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
