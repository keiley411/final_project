import React, { useState, useEffect } from "react";
import "./Search.scss";
import { useGetAllProductsQuery } from "../../Features/api";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  useEffect(() => {
    // console.log(products)
    console.log(searchText, searchBy);
    if (searchText.length < 3) {
      setFilteredProducts([]);
      return;
    }

    if (!isSuccess) return;
    if (searchBy === "name") {
      const filtered_products = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filtered_products);
      setFilteredProducts(filtered_products);
    }

    if (searchBy === "categories") {
      const filtered_products = products.filter((product) =>
        product.category.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filtered_products);

      setFilteredProducts(filtered_products);
    }
  }, [searchBy, searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchBy(event.target.value);
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch({ searchText, searchBy });
  //   }
  // };
  if (isLoading) {
    return <div>Loading ... </div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchText}
        placeholder="Search a product..."
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
      />

      <select name="" id="" value={searchBy} onChange={handleSelectChange}>
        <option value="name"> Search by name</option>
        <option value="categories">Search by category</option>
      </select>

      {filteredProducts.length > 0 && (
        <div className="found-products">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <img src={product.image_url} alt="" />
              <p>{product.name}</p>
              <p>price:Ksh {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
