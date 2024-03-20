import React, { useContext, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Category from "../CategoryComponent/Category_list";
import "./Home_page.scss";
import Search from "../SearchComponent/Search";
import Category_list from "../CategoryComponent/Category_list";
import { useLogoutUserMutation, useVerifyTokenQuery } from "../../Features/api";
import { useAuthenticatedUser } from "../../Hooks";
import AuthContext from "../../Context/Auth/AuthContext";
import CartIcon from "../IconComponent/CartIcon";
import Favourite from "../IconComponent/Favourite";

const Home_page = () => {
  const { logoutUser } = useContext(AuthContext);
  const [user, isLoading] = useAuthenticatedUser();

  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };

  const signPage = () => {
    navigate("/sign");
  };

  const handleLogout = () => {
    console.log("Logout User");
    logoutUser();
  };

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
        <Favourite width={25} height={25} />
        <CartIcon width={25} height={25}/>
        <DarkModeToggle />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default Home_page;
