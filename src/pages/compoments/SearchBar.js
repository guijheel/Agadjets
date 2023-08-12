import React, { useState } from "react";
import { AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
import "./SearchBar.css"; // Importez votre feuille de styles CSS

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Effectuer la recherche en utilisant la valeur de searchValue
    console.log("Recherche :", searchValue);
  };

  const handleToggleInput = () => {
    setInputVisible(!inputVisible);
    setSearchValue(""); // Réinitialiser la valeur de recherche
  };

  return (
    <div className="search-container">
      {inputVisible && (
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher..."
          value={searchValue}
          onChange={handleInputChange}
        />
      )}
      {inputVisible ? (
        <>
          <button className="search-icon-button" onClick={handleSearch}>
          <AiOutlineSearch size={25}/>
          </button>
          <span className="close-icon" onClick={handleToggleInput}>
          <AiOutlineClose size={25}/>
          </span>
        </>
      ) : (
        <button className="search-icon-button" onClick={handleToggleInput}>
           <AiOutlineSearch size={25}/>
        </button>
      )}
    </div>
  );
};

export default SearchBar;



