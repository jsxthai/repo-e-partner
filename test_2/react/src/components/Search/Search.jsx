import React, { useState } from "react";
import "./styles.css";

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // variable use for debounce
  // const typingTimeoutRef = useRef(null);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);

    // debounce basic
    // if (typingTimeoutRef.current) {
    //   clearTimeout(typingTimeoutRef.current);
    // }

    // if (!onSubmit) return;
    // typingTimeoutRef.current = setTimeout(() => {
    //   onSubmit({ searchTerm });
    // }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    if (searchTerm.length < 1) return;
    onSubmit({ searchTerm });

    setSearchTerm("");
  };

  return (
    <form className="Search__form" onSubmit={handleSubmit}>
      <input
        className="Search__input"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search ID or Name"
      />
      <button type="submit" className="button Search__btn">
        Search
      </button>
    </form>
  );
};

export default Search;
