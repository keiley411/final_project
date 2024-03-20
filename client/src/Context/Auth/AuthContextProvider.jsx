import React, { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import { SERVER_URL } from "../../constants";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = SERVER_URL;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const logoutUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/logout");
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };
  const loginUser = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/login", data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const registerUser = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/register", data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error;
    }
  };

  const verifyToken = async () => {
    try {
      const response = await axios.get("/verifyToken");
      setUser(response.data.user);
      setIsLoading(false);
    } catch (error) {
      setUser(null);
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        loginUser,
        logoutUser,
        registerUser,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
