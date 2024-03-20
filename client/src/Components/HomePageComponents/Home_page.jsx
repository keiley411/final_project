import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Category from "../CategoryComponent/Category_list";
import "./Home_page.scss";
import Search from "../SearchComponent/Search";
import Category_list from "../CategoryComponent/Category_list";
import { useLogoutUserMutation, useVerifyTokenQuery } from "../../Features/api";

const Home_page = () => {
  // Define toggleDropdown function directly within Home_page component

  const {
    data: user,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useVerifyTokenQuery();
  const [
    logoutUser,
    result
  ] = useLogoutUserMutation()

  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };

  const signPage = () => {
    navigate("/sign");
  };

  const handleLogout = async () => {
    console.log('Logout User');
    logoutUser();
  }

  console.log('User ', user, ' error ', error, ' isLoading ', isLoading)
  return (
    <>
      <div className="navbar">
        <div className="nav1">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link to={"/category"} className="category-link">
                <p className="category-p"> Category</p>

                <Category_list className="category-component" />
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="cat">
          <Category />
        </div> */}
        <div className="nav2">
          <Search />
        </div>
        <div className="header-actions">
          {!user ? (
            <>
              <button onClick={loginPage} className="header-btn">
                Login
              </button>
              <button onClick={signPage} className="header-btn">
                SignUp
              </button>
            </>
          ) : (
            <>
            <img src={user.image_url} alt={`${user.user_name} avatar`} />
            <button onClick={handleLogout} className="header-btn">
              Logout
            </button>
            </>
          )}
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
