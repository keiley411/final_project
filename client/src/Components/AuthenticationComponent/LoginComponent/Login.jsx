import React, { useState } from "react";
import { SERVER_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useFormState } from "../../../Hooks";
import "./Login.scss";
import { useLoginUserMutation } from "../../../Features/api";
const Login = () => {
  const [data, handleChange, reset] = useFormState({
    user_name: "",
    password: "",
  });
  console.log(data);
  const navigate = useNavigate();
  const [loginUser, result] = useLoginUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(data)
      .unwrap()
      .then((response) => {
        reset();
        return navigate("/");
      })
      .catch(console.error);
  };

  if (result.isLoading) {
    return <div>Loading ... </div>;
  }
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
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
            Password:{" "}
            <input
              type="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
