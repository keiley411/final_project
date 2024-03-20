import React, { useState } from "react";
import FileInput from "../../Shared/FileInput";
import { useFormState } from "../../../Hooks";
import { useAddProductMutation } from "../../../Features/api";

const ProductForm = () => {
  const [addProduct, result] = useAddProductMutation();
  const [filePath, setFilePath] = useState();
  const [data, handleChange, reset] = useFormState({
    name: "",
    description: "",
    price: 0,
  });
  const handleSubmit = async (event) => {
    console.log(data);
    event.preventDefault();
    addProduct({ image_url: filePath, ...data });
  };
  const handleFileSelect = async (filePath) => {
    console.log("filepath ", filePath);
    setImagePath(filePath);
  };

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError) {
    return (
      <div className="product-form-component">
        {" "}
        <p style={{ color: "red" }}>
          <Caution />
          {result.error}
        </p>
      </div>
    );
  }
  return (
    <div className="product-form-component">
      {imagePath && (
        <img
          width={200}
          height={200}
          src={`${SERVER_URL}/${imagePath}`}
          alt="productPreview"
        />
      )}
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          value={data.name}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={data.description}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={data.price}
          required
          onChange={handleChange}
        />
        <FileInput onFileSelect={handleFileSelect} />
        <button>Add product</button>
      </form>
    </div>
  );
};

export default ProductForm;
