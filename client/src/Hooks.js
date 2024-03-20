import { useState } from "react";

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
