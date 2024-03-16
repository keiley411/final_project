import React,{useState} from "react";

const Category = () => {
 
  return (
    <div>
      <li className="dropdown">
        <a href="/category" className="button">
          Category
        </a>
        
          <ul className="dropdown-content">
            <li>
              <a href="/showroom">showroom</a>
            </li>
            <li>
              <a href="/diningroom">dining-room</a>
            </li>
            <li>
              <a href="/bedroom">beds</a>
            </li>
            <li>
              <a href="/bedroom">cabinets</a>
            </li>
            <li>
              <a href="/bedroom">outdoor</a>
            </li>
            <li>
              <a href="/bedroom">office</a>
            </li>
            <li>
              <a href="/bedroom">living-room</a>
            </li>
          </ul>
       
      </li>
    </div>
  );
};

export default Category;
