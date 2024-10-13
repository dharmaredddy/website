// PropertyListContainer.jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import PropertyList from './PropertyList';

const PropertyListContainer = () => {
  // Sample static properties with images included directly
  const allProperties = [
    {
      id: 1,
      name: 'Modern House',
      location: 'Hyderabad',
      type: 'House',
      price: 1200000,
      size: 3000,
      bedrooms: 4,
      bathrooms: 3,
      images: [require('../assets/1.jpeg')], // Use require to load images
      parking: true, // Added parking property
    },
    {
      id: 2,
      name: 'Luxury Apartment',
      location: 'Nellore',
      type: 'Apartment',
      price: 950000,
      size: 2000,
      bedrooms: 3,
      bathrooms: 2,
      images: [require('../assets/2.jpeg')],
      parking: false,
    },
    {
      id: 3,
      name: 'Beach Condo',
      location: 'Khammam',
      type: 'Plot',
      price: 750000,
      size: 1800,
      bedrooms: 2,
      bathrooms: 2,
      images: [require('../assets/3.jpeg')],
      parking: false,
    },
    {
      id: 4,
      name: 'Commercial Space',
      location: 'Hyderabad',
      type: 'Commercial',
      price: 1500000,
      size: 4000,
      bedrooms: 0,
      bathrooms: 1,
      images: [require('../assets/4.jpeg')],
      parking: true,
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleSearch = (filters) => {
    const { location, propertyType } = filters;

    const filtered = allProperties.filter((property) => {
      const locationMatch = location ? property.location === location : true;
      const typeMatch = propertyType ? property.type === propertyType : true;
      return locationMatch && typeMatch;
    });

    setFilteredProperties(filtered);
  };

  const handleUploadImages = (id, newImages) => {
    const updatedProperties = allProperties.map((property) => {
      if (property.id === id) {
        return { ...property, images: [...property.images, ...newImages] };
      }
      return property;
    });

    setFilteredProperties(updatedProperties);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} onUploadImages={handleUploadImages} />
    </div>
  );
};

export default PropertyListContainer;
