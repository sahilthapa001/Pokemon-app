import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokemon"
      className="w-full max-w-lg p-3 mb-4 border border-gray-300 rounded-lg text-lg shadow-sm focus:outline-none focus:border-blue-500 transition-colors"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
