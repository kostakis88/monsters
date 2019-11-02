import React from 'react';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input 
      type="search"
      placeholder={placeholder}
      className="search"
      onChange={handleChange}
    />
  );
}

export default SearchBox;