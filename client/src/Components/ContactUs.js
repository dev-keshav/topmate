import React, { useState } from "react";
import "./contactUs.css";
import { TextField } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: '#4BD0C8'}}>
      <div className="contact-form-container">
        <div className="contact-left">
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: "50px",
              fontFamily: "Cursive",
            }}
          >
            {" "}
            Let's talk
          </h1>
          <h3 className="form-left-para">Ask us anything or just to say hi! 😉✌️</h3>
          <div className="contact-left-icon">
            <div className="call-icon-div">
              <LocalPhoneIcon sx={{ marginTop: '15px', marginRight: '15px'}} />
              <p>+91 1234567899</p>
            </div>
            <div className="mail-icon-div">
              <AttachEmailIcon sx={{ marginTop: '15px', marginRight: '15px'}} />
              <p>hellousers@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1
            style={{
              fontWeight: "lighter",
              marginBottom: "6vh",
              textDecoration: "overline red",
              fontFamily: "Cursive",
            }}
          >
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                className="contact-text-field"
                required
                type="name"
                value={formData.name}
                onChange={handleChange}
                id="standard-basic"
                label="Name"
                variant="standard"
              />
            </div>
            <div className="form-group">
              <TextField
                className="contact-text-field"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </div>
            <div className="form-group">
              <TextField
                className="contact-text-field"
                required
                type="message"
                value={formData.message}
                onChange={handleChange}
                id="standard-basic"
                label="Message"
                variant="standard"
              />
            </div>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
