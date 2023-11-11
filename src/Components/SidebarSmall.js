import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
// import pic from './Photo/new-file.png'
import pic from '../Photo/new-file.png'

const mystyle = {
  width: "100vw",
  height: "15vh",
  backgroundColor: "#4DD5CD",
//   display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // paddingLeft: "20px",
  // paddingRight: "20px",
};

// const twoCards = {
//   margin: 4,
//   marginTop: '15px',
//   backgroundColor: "#71DDD7",
//   color: "black",
//   width: "60px",
//   height: "60px",
//   borderRadius: "12px",
//   borderStyle: "none",
//   marginRight: "15px",
// };

const Sidebar = () => {
  return (
    <div className="sidebar_inner_small" style={mystyle}>
      <Stack>
        <Avatar
          alt="Remy Sharp"
          src={pic}
          sx={{ marginLeft: '30px', width: '80px', height: '80px' }}
        />
        {/* <img src={pic} /> */}
      </Stack>
      <Typography variant="p" component="div" ml={'12px'} sx={{ fontWeight: '600', fontFamily: 'Exo' }} >
        Keshav Kumar
      </Typography>
      <Typography variant="p" component="div" ml={'30px'} mr={'20px'} sx={{ fontWeight: '200', fontFamily: 'Dosis' }}>
        2+Years of
        Web Development Experience
      </Typography>
      {/* <div sx={{ display: "flex", }}>
        <button style={twoCards}><p>Top</p>1%</button>
        <button style={twoCards}><p>booking</p><h4>87</h4></button>
      </div> */}
    </div>
    // <Container maxWidth="lg" sx={{ maxHeight: '100%', backgroundColor: "#4DD5CD" }}>Sidebar</Container>
  );
};

export default Sidebar;
