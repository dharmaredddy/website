import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PropertyList.css';

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <div className="property-images">
            {property.images.map((image, index) => (
              <img key={index} src={image} alt={`${property.name} ${index}`} />
            ))}
          </div>
          <h2>{property.name}</h2>
          <p>Location: {property.location}</p>
          <p>Type: {property.type}</p>
          <p>Price: ₹{property.price}</p>
          <p>Size: {property.size} sqft</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      bathrooms: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      parking: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PropertyList;
