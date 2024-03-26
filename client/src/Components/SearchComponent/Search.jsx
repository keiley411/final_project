// import React, { useState,useEffect } from "react";
// import "./Search.scss";

// const Search = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchBy, setSearchBy] = useState("");

//   useEffect(() => {
//     const [filteredProducts, setFilteredProducts] = useState([]);
//   });
//   useEffect(() => {
//     if (searchBy === "name") {
//       const filtered_products = products.Filter((product) =>
//         product.title.includes(searchText)
//       );
//     }
//     setFilteredProducts(filtered_products);

//     if (searchBy === "category") {
//       const filtered_products = products.Filter((product) =>
//         product.category.includes(searchText)
//       );
//     }
//     setFilteredProducts(filtered_products);
//   }, [searchBy, searchText]);

//   const handleChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const handleSelectChange = (event) => {
//     setSearchBy(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSearch({ searchText, searchBy });
//     }
//   };

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         value={searchText}
//         placeholder="Search a product..."
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//       />
  
//       <select name="" id="" value={searchBy} onChange={handleSelectChange}>
//         <option value="name"> Search by name</option>
//         <option value="categories">Search by category</option>
//       </select>
  
//       {filteredProducts.length > 0 && (
//         <div className="found-products">
//           {filteredProducts.map((product) => (
//             <div key={product.id}>
//               <img src={product.image_url} alt="" />
//               <p>{product.title}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
  
// };

// export default Search;
