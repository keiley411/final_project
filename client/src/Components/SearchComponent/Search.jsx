import React, { useState, useEffect } from "react";
import "./Search.scss";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useGetAllProductsQuery } from "../../Features/api";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // State to store selected product ID
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

  const handleProductClick = (product) => {
    setSelectedProductId(product.id);
  };

  if (isLoading) {
    return <div>Loading ... </div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }

  // Redirect to the product page if a product is selected
  if (selectedProductId) {
    return <Redirect to={`/product/${selectedProductId}`} />;
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
        <option value="name"> Search by name</option>
        <option value="categories">Search by category</option>
      </select>

      {filteredProducts.length > 0 && (
        <div className="found-products">
          {filteredProducts.map((product) => (
            <div className="product-list"key={product.id} onClick={() => handleProductClick(product.id)}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image_url} alt="" />
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
