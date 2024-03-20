import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormState } from "../../../Hooks";
import "./Login.scss";
import AuthContext from "../../../Context/Auth/AuthContext";

const Login = () => {
  const [data, handleChange, reset] = useFormState({
    user_name: "",
    password: "",
  });

  const navigate = useNavigate();
  const {isLoading, loginUser} = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(data)
      .then(() => {
        reset();
        return navigate("/");
      })
      .catch(console.error);
  };

  if (isLoading) {
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
