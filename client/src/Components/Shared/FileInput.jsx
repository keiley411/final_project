import React from "react";

const SERVER_URL = "http://localhost:3000";

const FileInput = ({ onFileSelect}) => {

  const handleFileChange = async (event) => {
    const categoryImg = event.target.files[0];
    const formData = new FormData();
    formData.append("file", categoryImg);
    const response = await fetch(`${SERVER_URL}/uploads`, {
      body: formData,
      // headers:{
      //     // "Content-Type":"applicaton/x-www-form-urlencoded"
      //     "Content-Type":"multipart/form-data"
      // },
      method: "post",
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      onFileSelect(data.filePath)
    }
  };

  return (
    <div>
      <input
        type="file"
        name="category_img"
        required
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
