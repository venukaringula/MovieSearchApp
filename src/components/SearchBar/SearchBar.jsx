import { useState } from "react";

function SearchBar({ searchMovies }) {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {

    if (searchText.trim() !== "") {
      searchMovies(searchText);
    }

  };

  const handleKeyDown = (event) => {

    if (event.key === "Enter") {
      handleSearch();
    }

  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;