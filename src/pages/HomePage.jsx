import React from 'react';
import '../styles/Homepage.css'; // CSS for styling
// Import the SearchBar component
import { FaBuilding, FaHome, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Icons for services
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // For Google Maps
import PropertySearchPage from '../components/PropertyListContainer'; // Import the new PropertyListContainer

const Homepage = () => {
  // Handler for search logic
  

  return (
    <div>

      {/* Property Listings */}
      <PropertySearchPage />

      {/* About Us */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are a leading real estate agency committed to helping you find your dream property. With over 20 years of experience, we ensure a seamless and trustworthy buying experience.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service">
            <FaHome className="service-icon" />
            <h3>Buying</h3>
            <p>Find your perfect property from our wide range of options.</p>
          </div>
          <div className="service">
            <FaBuilding className="service-icon" />
            <h3>Selling</h3>
            <p>Sell your property at the best market prices.</p>
          </div>
          <div className="service">
            <FaHome className="service-icon" />
            <h3>Building</h3>
            <p>Building beautiful homes one dream at a time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"This agency helped me find the perfect home for my family. The team was extremely professional and supportive throughout the process."</p>
          <p>- John Doe</p>
        </div>
        <div className="testimonial">
          <p>"A seamless experience from start to finish. Highly recommend their services."</p>
          <p>- Jane Smith</p>
        </div>
      </section>

      {/* WhatsApp & Map */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-options">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
          <a href="tel:+91-8790610105" className="call-button">
            <FaPhoneAlt /> Call Us
          </a>
          <div className="map">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ height: '300px', width: '100%' }}
                center={{ lat: 40.73061, lng: -73.935242 }}
                zoom={12}
              >
                <Marker position={{ lat: 40.73061, lng: -73.935242 }} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
