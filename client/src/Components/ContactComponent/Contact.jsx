import React, { useState } from "react";
import { useFormState } from "../../Hooks";
import "./Contact.scss";
export const Contact = () => {
  const [data, handleChange, reset] = useFormState({
    name: "",
    email: "",
    company: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    setIsSubmitted(true);
  };


  return (
    <>
      <div className="form-container">
        <h1>CONTACT US FOR ANY QUESTIONS</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="group1">
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
            </div>
            <div className="group2">
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
        ) : (
          <div className="success-message">
            <p>Thank you! Your message has been submitted successfully.</p>
          </div>
        )}
      </div>
    </>
  );
};
