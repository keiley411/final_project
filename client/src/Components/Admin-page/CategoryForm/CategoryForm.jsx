import React, { useState } from "react";
import FileInput from "../../Shared/FileInput";
import { SERVER_URL } from "../../../constants";
import "./category-form.scss";
import { useAddCategoryMutation } from "../../../Features/api";
import Caution from "../../IconComponent/Caution";

const CategoryForm = () => {
  const [addCategory, result] = useAddCategoryMutation();
  const [data, setData] = useState({ category_name: "" });
  const [imagePath, setImagePath] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      title: data.category_name,
      image_url: imagePath,
    };
    console.log(postData);
   
    addCategory(postData);
  };

  const handleFileSelect = async (filePath) => {
    console.log("filepath ", filePath);
    setImagePath(filePath);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError) {
    return (
      <div className="category-form-component">
        {" "}
        <p style={{ color: "red" }}>
          <Caution />
          {result.error}
        </p>
      </div>
    );
  }

  return (
    <div className="category-form-component">
      {imagePath && (
        <img
          width={200}
          height={200}
          src={`${SERVER_URL}/${imagePath}`}
          alt="categoryPreview"
        />
      )}
      <form onSubmit={handleSubmit} className="category-form">
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

export default CategoryForm;
