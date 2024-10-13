// SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  
  const [propertyType, setPropertyType] = useState('');


  const handleSearch = () => {
    // Pass all filter values back to the parent component
    onSearch({ location, propertyType});
  };

  return (
    <div className="search-bar">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Select Location"
      >
        <option value="">Select Location</option>
        <option value="Khammam">Khammam</option>
        <option value="Nellore">Nellore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      

      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="">Select Property Type</option>
        <option value="Plot">Plot</option>
        <option value="Commercial">Commercial</option>
        <option value="Apartment">Apartment/House</option>
      
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
