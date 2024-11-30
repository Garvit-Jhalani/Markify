import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div>
      <div class="input-container justify-center mx-auto mt-8">
        <input
          class="input"
          name="text"
          type="text"
          placeholder="Search your bookmarks here!!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />
      </div>
    </div>
  );
};

export default SearchBox;
