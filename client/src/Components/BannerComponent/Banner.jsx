import React from "react";
import discount from "../../assets/images/discount.png";
import browse from "../../assets/images/browse.jpg";
import "./Banner.scss"
const Banner = () => {
  return (
    <div className="header-component">
      <img src={discount} alt="discount" className="discount" />
      <p>Welcome to</p>
      <h4>JABARI FURNITURES</h4>
      <img src={browse} alt="browse" />
    </div>
  );
};

export default Banner;
