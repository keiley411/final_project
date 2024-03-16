import React, { useState } from "react";
import "./Home_page.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Category from "../CategoryComponent/Category";

const Home_page = () => {
  // Define toggleDropdown function directly within Home_page component
  
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/login");
  };

  const signPage = () => {
    navigate("/sign");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav1">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <Link to={'/category'}>Category</Link>
            </li>
          </ul>
        </div>
        <div className="nav2">
          <li>
            <a href="/admin">Admin</a>
          </li>

          <input
            type="button"
            value="search"
            style={{ border: "1px solid black", borderRadius: "10px" }}
          />
        </div>
        <div>
          <button onClick={loginPage}>Login</button>
          <button onClick={signPage}>SignUp</button>
        </div>
        <DarkModeToggle />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default Home_page;
