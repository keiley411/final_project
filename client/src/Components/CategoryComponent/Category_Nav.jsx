import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";
import { useGetAllCategoriesQuery } from "../../Features/api";

const Category_Nav = ({className}) => {
  const result = useGetAllCategoriesQuery(); 
  if(result.isLoading) {
    return <div>Loading....</div>
  }
  

  return (
    <div className={`dropdown ${className}`}>
      <ul className="dropdown-content">
        {result.data.map((category) =>{
          return(
           <li>
              <Link to={`/categories/${category.id}`}>{category.title}</Link>
            </li>
          )
        })}
        
      </ul>
    </div>
  );
};

export default Category_Nav;
