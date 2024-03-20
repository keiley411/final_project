import React,{useState} from "react";
import "./Search.scss";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch({ searchText, searchBy });
    }
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchText}
        placeholder="Search a product..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <select name="" id="" value={searchBy} onChange={handleSelectChange}>
        <option value="name"> Search by name</option>
        <option value="categories">Search by category</option>
      </select>
    </div>
  );
};

export default Search;
