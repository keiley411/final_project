import React from "react";
import { SERVER_URL } from "../../constants";
const FileInput = ({ onFileSelect, required}) => {

  const handleFileChange = async (event) => {
    const categoryImg = event.target.files[0];
    const formData = new FormData();
    formData.append("file", categoryImg);
    const response = await fetch(`${SERVER_URL}/uploads`, {
      body: formData,
      
      method: "post",
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      onFileSelect(data.filePath)
    }
  };

  return (
    <div className="file"> 
      <input
        type="file"
        name="category_img"
        required={required}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
