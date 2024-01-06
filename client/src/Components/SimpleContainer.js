import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Arrow from "../img/arrow.png";

const imgStyle = {
  marginTop: "50px",
  marginBottom: "50px",
  transform: "rotate(90deg)",
};

const containerStyle = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  borderRadius: "15px",
  // boxShadow: "0 0px 20px rgba(0, 0, 0, 0.5)",
};

const headingStyle = {
  color: "#2A2C7C",
};

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          paddingTop: "100px",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            marginBottom: "50px",
            textDecoration: "underline",
            fontFamily: 'cursive'
          }}
          variant="h4"
          sx={headingStyle}
          mt={2}
        >
          What Sets Us Apart
        </Typography>
        <Container maxWidth="sm" style={containerStyle}>
          <Box
            sx={{
              ...containerStyle,
              bgcolor: "#B4B0D8",
              height: "28vh",
              width: "100%", // Full width on small screens
            }}
          >
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
              <Typography variant="h5" sx={{ color: "#2A2C7C", fontWeight: 900 }} mt={2} m={2}>
                Comprehensive Learning Paths
              </Typography>
              <Typography variant="p" sx={{headingStyle, fontFamily: 'cursive'}} mt={2}>
                Dive into a curated collection of courses covering a wide array
                of programming languages and frameworks. From foundational
                languages like JavaScript and Java to cutting-edge technologies
                like React, Next.js, Node.js, and more – we've got you covered.
              </Typography>
            </div>
          </Box>
        </Container>
        <img src={Arrow} alt="Additional Section Image" style={imgStyle} />
        <Container maxWidth="sm" style={containerStyle}>
          <Box
            sx={{
              ...containerStyle,
              bgcolor: "#DAB5D5",
              height: "26vh",
              width: "100%", // Full width on small screens
            }}
          >
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
              <Typography variant="h5" sx={{ color: "#892F92", fontWeight: 900 }} mt={2} m={2}>
                Real-world Projects
              </Typography>
              <Typography variant="p" sx={{headingStyle, fontFamily: 'cursive'}} mt={2}>
                Theory is essential, but hands-on experience is where true
                mastery happens. Every learning path is complemented with
                real-world projects that challenge you to apply your knowledge,
                fostering a deeper understanding of the concepts.
              </Typography>
            </div>
          </Box>
        </Container>
        <img src={Arrow} alt="Additional Section Image" style={imgStyle} />
        <Container maxWidth="sm" style={containerStyle}>
          <Box
            sx={{
              ...containerStyle,
              bgcolor: "#FBCFD0",
              height: "26vh",
              width: "100%", // Full width on small screens
            }}
          >
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
              <Typography variant="h5" sx={{ color: "#E26362", fontWeight: 900 }} mt={2} m={2}>
                Expert Instructors
              </Typography>
              <Typography variant="p" sx={{headingStyle, fontFamily: 'cursive'}} mt={2}>
                Learn from industry experts and seasoned professionals who bring
                real-world experience to the virtual classroom. Our instructors
                are passionate about teaching and committed to your success.
              </Typography>
            </div>
          </Box>
        </Container>
        <img src={Arrow} alt="Additional Section Image" style={imgStyle} />

        <Container maxWidth="sm" style={containerStyle}>
          <Box
            sx={{
              ...containerStyle,
              bgcolor: "#82ddd7",
              height: "26vh",
              width: "100%", // Full width on small screens
            }}
          >
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
              <Typography variant="h5" sx={{ color: "#10a399", fontWeight: 900 }} mt={2} m={2}>
                Interactive Coding Playground
              </Typography>
              <Typography variant="p" sx={{headingStyle, fontFamily: 'cursive'}} mt={2}>
                Practice what you learn in our interactive coding playground.
                Write, test, and debug code directly within the platform,
                gaining practical skills that are essential in the software
                development field.
              </Typography>
            </div>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}
