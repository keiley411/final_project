import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const Category_list = ({className}) => {
  return (
    <div className={`dropdown ${className}`}>
      <ul className="dropdown-content">
        <li>
          <Link to={"/category/showroom"}>Showroom</Link>
        </li>
        <li>
          <Link to={"/category/diningroom"}>Dining-Room</Link>
        </li>
        <li>
          <Link to={"/category/bedroom"}>BedRoom</Link>
        </li>
        <li>
          <Link to={"/category/admin"}>Cabinets</Link>
        </li>
        <li>
          <Link to={"/category/outdoor"}>Outdoor</Link>
        </li>
        <li>
          <Link to={"/category/ofice"}>Office</Link>
        </li>
        <li>
          <Link to={"/category/living-room"}>Living-Room</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category_list;
