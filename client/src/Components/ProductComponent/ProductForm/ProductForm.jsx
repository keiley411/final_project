import React, { useState } from "react";
import FileInput from "../../Shared/FileInput";
import {
  useAdminUser,
  useAuthenticatedUser,
  useFormState,
} from "../../../Hooks";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../Features/api";

import { SERVER_URL } from "../../../constants";
import Caution from "../../IconComponent/Caution";

const ProductForm = ({ category_id, initial_data, isEditing }) => {
  const [user, isAdmin] = useAdminUser(true);
  const [addProduct, result] = useAddProductMutation();
  const [updateProduct, updateResult] = useUpdateProductMutation();


  const [imagePath, setImagePath] = useState();
  const [data, handleChange, reset] = useFormState(
    initial_data
      ? initial_data
      : {
          name: "",
          description: "",
          price: 0,
        }
  );

  const handleSubmit = async (event) => {
    console.log(data);
    event.preventDefault();
    const newProduct = {
      ...data,
      image_url: imagePath,
      category: {
        connect: {
          id: category_id,
        },
      },
    };
    if (isEditing) {
      delete newProduct.category_id;
      if(!newProduct.image_url) {
        newProduct.image_url = initial_data.image_url;
      }
      updateProduct(newProduct);
      console.log(newProduct)
      return;
    } else {
      addProduct(newProduct);
    }
    reset();
  };
  const handleFileSelect = async (filePath) => {
    setImagePath(filePath);
  };

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError) {
    console.error(result.error);
    return (
      <div>
        <p style={{ color: "red" }}>
          <Caution />
        </p>
      </div>
    );
  }

  return (
    <div className="product-form-component">
      {(data.image_url || imagePath) && (
        <img
          width={200}
          height={200}
          src={`${SERVER_URL}/${
           imagePath ? imagePath : data.image_url
          }`}
          alt="productPreview"
        />
      )}
      <form onSubmit={handleSubmit} className="product-form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            value={data.description}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            value={data.price}
            required
            onChange={handleChange}
          />
        </label>
        <FileInput onFileSelect={handleFileSelect} />
        <button>{isEditing ? "Update Product" : "Add product"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
