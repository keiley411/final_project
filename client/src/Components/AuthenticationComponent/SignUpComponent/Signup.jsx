import React, { useState } from "react";
import { useFormState } from "../../../Hooks";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss"
import { SERVER_URL } from "../../../constants";
import { useRegisterUserMutation } from "../../../Features/api";
const Signup = () => {
  const [data, handleChange,reset] = useFormState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [registerUser, result] = useRegisterUserMutation()
const navigate = useNavigate()
  const handleSubmit = async(event) => {
    event.preventDefault();
    registerUser(data)
    .unwrap()
    .then((response) => {
      reset();
      return navigate("/login");
    })
    .catch(console.error);
  };

  return (
    <>
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <label>
            Username:{" "}
            <input
              type="text"
              name="user_name"
              value={data.user_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirm Password:{" "}
            <input
              type="password"
              name="confirm_password"
              value={data.confirm_password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
          <div className="login-link">
            {" "}
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
