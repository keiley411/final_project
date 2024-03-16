import React, { useState } from "react";
import { useFormState } from "../../Hooks";

export const Contact = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  //   phone_number: "",
  //   message: "",
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setData((previousData) => {
  //     return {
  //       ...previousData,
  //       [name]: value,
  //     };
  //   });
  // };

  const [data, handleChange] = useFormState({
    name: "",
    email: "",
    company: "",
    phone_number: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={data.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={data.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <label>Message:</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
