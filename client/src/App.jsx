import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home_page from "./Components/HomePageComponents/Home_page";
import Login from "./Components/AuthenticationComponent/LoginComponent/Login";
import Signup from "./Components/AuthenticationComponent/SignUpComponent/Signup";
import NotFound from "./Components/NotFoundComponent/NotFound";
import Category from "./Components/CategoryComponent/Category";
import Admin from "./Components/Admin-page/Admin";
import { Contact } from "./Components/ContactComponent/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_page />}>
          <Route path="category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
      
      </Routes>
    </Router>
  );
};

export default App;
