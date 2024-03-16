import React, { useState } from "react";

import "./admin.scss";
import FileInput from "../Shared/FileInput";
import { SERVER_URL } from "../../constants";

const Admin = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState({ category_name: "" });
  const [imagePath, setImagePath] = useState();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      title: data.category_name,
      image_url: imagePath,
    };
    console.log(postData);
    // POST /categories/new postData
  };
  const handleFileSelect = (filePath) => {
    console.log(filePath);
    setImagePath(filePath);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <div className="category">
      {imagePath && (
        <img
          width={400}
          height={400}
          src={`${SERVER_URL}/${imagePath}`}
          alt="categoryPreview"
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category_name"
          value={data.category_name}
          required
          onChange={handleChange}
        />
        <FileInput onFileSelect={handleFileSelect} />
        <button>Add Category</button>
      </form>
    </div>
  );
};

export default Admin;
