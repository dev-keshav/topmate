import React from "react";
import { Link } from "react-router-dom";
import SecondSectionImage from "../img/first.jpg";
import SimpleContainer from "../Components/SimpleContainer";

const landingPageStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "10vh", 
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#673EE6",
  color: "#fff",
};

const headerStyle = {
  marginBottom: "20px",
};

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#673EE6",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.3s ease",
};

const sectionContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "20px",
};

const sectionStyle = {
  width: "48%",
  padding: "20px",
  backgroundColor: "#fff",
  color: "#333",
};

const imgStyle = {
  width: "50%",
  borderRadius: "8px",
};

const footerStyle = {
  marginTop: "auto",
  padding: "20px",
  backgroundColor: "#29347A",
  color: "#fff",
};

const LandingPage = () => {
  return (
    <div>
      <div style={landingPageStyle}>
        <header style={headerStyle}>
          <h1>Welcome to My Coding Website</h1>
        </header>
        {/* <section>
          <p>
            Start your coding journey with our interactive learning platform.
          </p>
          <p>Explore various coding stacks and enhance your skills.</p>
        </section> */}
      </div>
      <div style={sectionContainerStyle}>
        <div style={sectionStyle}>
          <h2>Become the 10x Developer</h2>
          <p>This is the content of the first additional section.</p>
        </div>
        <div style={sectionStyle}>
          
          <img
            src={SecondSectionImage}
            alt="Additional Section Image"
            style={imgStyle}
          />
        </div>
      </div>
      <Link to="/courses">
        <button style={buttonStyle}>Explore Courses</button>
      </Link>
      <div>
        <SimpleContainer />
      </div>
      <footer style={footerStyle}>
        <p>&copy; 2023 My Coding Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
