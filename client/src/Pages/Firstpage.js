import React, { useState } from "react";
import SecondSectionImage from "../img/first.jpeg";
import SimpleContainer from "../Components/SimpleContainer";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import QuoteImage from "../img/quote.png";
import PipCImage from "../img/pipC.png";
import CourseBox from "../Components/CourseBox";
import CourseList from "../Components/CourseList";

const landingPageStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minHeight: "60vh",
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#4DD5CD",
  color: "#1C1F1F",
};

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 420,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#F7F7F7",
}));

const headerStyle = {
  marginBottom: "20px",
  fontFamily: "Cedarville Cursive",
  fontSize: "30px",
  transform: "rotate(-5deg)",
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
  width: "80%",
  marginTop: "-130px",
  zIndex: "3",
  marginLeft: "120px",
  boxShadow: "0px 0px 500px rgba(0, 0, 0, 0.5)",
  backgroundColor: "#F7F7F7",
};

const imgStyle = {
  width: "70%",
  borderRadius: "8px",
  boxShadow: "0 0px 20px rgba(0, 0, 0, 0.5)",
  transform: "rotate(-10deg)",
  marginTop: "-80px",
  cursor: "pointer",
  transition: "transform 0.3s ease",
};

const sectionStyle = {
  width: "50%",
  padding: "20px",
  backgroundColor: "#F7F7F7",
  color: "#333",
  borderRadius: "20px",
};

const footerStyle = {
  marginTop: "auto",
  padding: "20px",
  backgroundColor: "#1c1f1f",
  color: "#fff",
};

const LandingPage = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isSecHovered, setIsSecHovered] = useState(false);


  return (
    <div>
      <div style={landingPageStyle}>
        <div>
          <img
            style={{
              width: "20vw",
              height: "40vh",
              transform: "rotate(10deg)",
            }}
            src={PipCImage}
          />
        </div>
        <div style={{ marginRight: "330px" }}>
          <header style={headerStyle}>
            <h1>Welcome to PipC</h1>
          </header>
          <section>
            <p style={{ fontFamily: "system-ui" }}>
              <span
                style={{
                  fontWeight: 900,
                  color: "#636363",
                  fontFamily: "cursive",
                  fontSize: "20px",
                }}
              >
                Unlock the World of Coding Excellence:{" "}
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "Cedarville Cursive",
                  fontWeight: "900",
                  color: "#3c847f",
                  textDecoration: "underline",
                }}
              >
                Learn, Build, and Master Programming
              </span>
            </p>
          </section>
        </div>
      </div>
      <div style={sectionContainerStyle}>
        <div style={sectionStyle}>
          <Stack direction="row" spacing={2}>
            <DemoPaper variant="">
              <Typography
                sx={{
                  paddingBottom: 4,
                  fontFamily: "cursive",
                  textDecoration: "overline red",
                }}
                variant="h4"
              >
                Learn, Code, Excel
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cursive",
                  fontWeight: 500,
                  color: "#3C847F",
                }}
                variant="h6"
              >
                Welcome to the ultimate destination for mastering coding and
                software development. Whether you're a beginner or an
                experienced programmer, our platform is designed to empower you
                on your coding journey. Explore, learn, and build with
                confidence.
              </Typography>
            </DemoPaper>
          </Stack>
        </div>
        <div style={sectionStyle}>
          <img
            src={SecondSectionImage}
            alt="Additional Section Image"
            style={{
              ...imgStyle,
              transform: isHovered ? "rotate(0deg)" : imgStyle.transform,
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
        </div>
        <div>
          <img
            style={{
              width: "20vw",
              height: "40vh",
              boxShadow: "0 0px 20px rgba(0, 0, 0, 0.5)",
              cursor: 'pointer',
              transition: "transform 0.3s ease",
              transform: isSecHovered ? "rotate(0deg)" : "rotate(10deg)",
            }}
            src={QuoteImage}
            onMouseOver={() => setIsSecHovered(true)}
            onMouseOut={() => setIsSecHovered(false)}
          />
        </div>
      </div>
      <div>
        <SimpleContainer />
      </div>
      <Stack sx={{ paddingX: '25vw', paddingY: '20vh'}}>
        <CourseList />
      </Stack>
      <footer style={footerStyle}>
        <p>&copy; 2023 My Coding Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
