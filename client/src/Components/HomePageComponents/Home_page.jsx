import React, { useContext } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import Search from "../SearchComponent/Search";
import Category_Nav from "../CategoryComponent/Category_Nav";
import { useAuthenticatedUser } from "../../Hooks";
import AuthContext from "../../Context/Auth/AuthContext";
import CartIcon from "../IconComponent/CartIcon";
import Favourite from "../IconComponent/Favourite";
import Footer from "../FooterComponent/Footer";
import Cart from "../CartComponent/Cart";
import "./Home_page.scss";
import { toggleCart } from "../../Features/Cart/CartSlice";
import { useDispatch } from "react-redux";

const Home_page = () => {
  const { logoutUser } = useContext(AuthContext);
  const [user, isLoading] = useAuthenticatedUser();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const handleCartOpen = () => {
    console.log("open cart");
    dispatch(toggleCart());
  };

  return (
    <>
      <Cart />

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
            {user && user.role === "admin" && (
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
            )}
            <li>
              <Link to={"/"} className="category-link">
                <p className="category-p"> Category</p>

                <Category_Nav className="category-component" />
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="nav2">
          <Search
            handleSearch={(data) => {
              console.log(data);
            }}
          />
        </div> */}
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
              <img
                src={`${
                  user.image_url
                    ? user.image_url
                    : `https://ui-avatars.com/api/?name=${user.user_name}&size=40&rounded=true`
                }`}
                alt={`${user.user_name} avatar`}
              />
              <button onClick={handleLogout} className="header-btn">
                Logout
              </button>
            </>
          )}
        </div>

        <Favourite width={25} height={25} />
        <button onClick={handleCartOpen}>
          <CartIcon width={25} height={25} />
        </button>
        <DarkModeToggle />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer height={40} width={40} />
    </>
  );
};

export default Home_page;
