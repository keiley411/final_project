import { useContext, useEffect, useState } from "react";
import { useVerifyTokenQuery } from "./Features/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Context/Auth/AuthContext";

export const useFormState = (formData) => {
  const [data, setData] = useState(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const reset = () => {
    setData(formData);
  };

  return [data, handleChange, reset];
};

export const useAuthenticatedUser = (isLogin = false) => {
  const {user, isLoading,verifyToken} = useContext(AuthContext)
  

  useEffect(() => {
    verifyToken()
    
  }, []);

  return [user, isLoading];
};

export const useAdminUser = () => {
  const [user, isLoading] = useAuthenticatedUser();

  if(isLoading) {
    return [null, false]
  }

  if(!user){
    return [null, false]
  }

  return [user,  user.role === "admin"]
};
