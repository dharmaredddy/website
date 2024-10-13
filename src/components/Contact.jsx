import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../styles/Contact.css'; // Import your CSS file

const Contact = () => {
  const phoneNumber = "+12345678901"; // Replace with your WhatsApp number
  const address = "123 Main St, Anytown, USA"; // Replace with your address

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-info">Email: support@realestate.com</p>
      <p className="contact-info">Phone: 8790610106</p>
      <p>
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-whatsapp"></i> <span>Contact us on WhatsApp</span>
        </a>
      </p>
      <p>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fas fa-map-marker-alt"></i> <span>View on Google Maps</span>
        </a>
      </p>
    </div>
  );
};

export default Contact;
