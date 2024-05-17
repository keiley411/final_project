import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Features/api";
import { SERVER_URL } from "../../constants";
import "./Search.scss";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  useEffect(() => {
    if (searchText.length < 3) {
      setFilteredProducts([]);
      return;
    }

    if (!isSuccess) return;
    if (searchBy === "name") {
      const filtered_products = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered_products);
    }

    if (searchBy === "categories") {
      const filtered_products = products.filter((product) =>
        product.category.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered_products);
    }
  }, [searchBy, searchText, isSuccess, products]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  if (isLoading) {
    return <div>Loading ... </div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }

  if (selectedProductId) {
    return <Link to={`/products/${selectedProductId}`}></Link>;
  }

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchText}
        placeholder="Search a product..."
        onChange={handleChange}
      />

      <select name="" id="" value={searchBy} onChange={handleSelectChange}>
        <option value="name">Search by name</option>
        <option value="categories">Search by category</option>
      </select>

      {filteredProducts.length > 0 && (
        <div className="found-products">
          {filteredProducts.map((product) => (
            <div
              className="product-list"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={`${SERVER_URL}/${product.image_url}`}
                  alt=""
                  width={200}
                  height={200}
                  
                />
                <p>{product.name}</p>
                <p>Ksh {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
