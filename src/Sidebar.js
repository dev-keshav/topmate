import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import pic from './Photo/new-file.png'

const mystyle = {
  width: "28vw",
  height: "100vh",
  backgroundColor: "#4DD5CD",
  // display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "40px",
  paddingRight: "40px",
};

const twoCards = {
  margin: 4,
  marginTop: '25px',
  backgroundColor: "#71DDD7",
  color: "black",
  width: "100px",
  height: "100px",
  // fontSize: "16px",
  borderRadius: "12px",
  borderStyle: "none",
  // fontWeight: 'bold',
  marginRight: "15px",
  // fontSize: '25px',
  // fontWeight: 'bold'
};

const Sidebar = () => {
  return (
    <div className="sidebar_inner" style={mystyle}>
      <Stack>
        <Avatar
          alt="Remy Sharp"
          src={pic}
          sx={{ width: '200px', height: '200px', marginBottom: '40px' }}
        />
        {/* <img src={pic} /> */}
      </Stack>
      <Typography variant="h4" component="div" mb={'12px'} sx={{ fontWeight: '600', fontFamily: 'Exo' }} >
        Keshav Kumar
      </Typography>
      <Typography variant="h6" component="div" ml={'30px'} mr={'20px'} sx={{ fontWeight: '600', fontFamily: 'Dosis' }}>
        Youngest Developer | Computer Science Student | 2+Years of
        Web Development Experience
      </Typography>
      <div sx={{ display: "flex", }}>
        <button style={twoCards}><p>Top</p><h1>1%</h1></button>
        <button style={twoCards}><p>booking</p><h1>87</h1></button>
      </div>
    </div>
    // <Container maxWidth="lg" sx={{ maxHeight: '100%', backgroundColor: "#4DD5CD" }}>Sidebar</Container>
  );
};

export default Sidebar;
