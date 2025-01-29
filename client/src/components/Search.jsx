import React from "react";

function Search() {
  return (
    <div className="bg-gray-100 rounded-full flex items-center gap-2 p-2 mb-10">
      <svg
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black">
        <circle cx="10.5" cy="10.5" r="7.5"></circle>
        <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
      </svg>
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent"
      />
    </div>
  );
}

export default Search;
