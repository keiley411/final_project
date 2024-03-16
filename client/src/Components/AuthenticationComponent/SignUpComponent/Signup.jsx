import React, { useState } from "react";
import { useFormState } from "../../../Hooks";

const Signup = () => {
  const [data, handleChange] = useFormState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
