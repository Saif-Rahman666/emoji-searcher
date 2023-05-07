import React from 'react';

const SearchBox = ({ searchTerm, onSearchTermChange, onSearchSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for an emoji"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <button onClick={onSearchSubmit}>Search</button>
    </div>
  );
};

export default SearchBox;
