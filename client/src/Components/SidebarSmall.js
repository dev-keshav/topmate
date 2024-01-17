import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import pic from '../Photo/new-file.png'
import PipCImg from "../img/pipC.png";


const mystyle = {
  width: "100vw",
  height: "15vh",
  backgroundColor: "#4DD5CD",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};


const Sidebar = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/v1/api/profileData")
    .then((response) => response.json())
    .then((data) => setProfileData(data))
    .catch((error) => console.log("Error fetching data:", error))
  }, [])
  return (
    <div className="sidebar_inner_small" style={mystyle}>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
      <img
          style={{
            width: '15vw',
            height: '10vh',
            transform: "rotate(10deg)",
            marginLeft: '5px'
          }}
          alt=""
          src={PipCImg}
        />
        <Avatar
          alt="Remy Sharp"
          src={pic}
          sx={{ marginLeft: '10px', width: '80px', height: '80px' }}
        />
      </Stack>
      <Typography variant="p" component="div" ml={'12px'} sx={{ fontWeight: '600', fontFamily: 'Exo' }} >
      {profileData?.name || 'Default Name'}
      </Typography>
      <Typography variant="p" component="div" ml={'30px'} mr={'20px'} sx={{ fontWeight: '200', fontFamily: 'Dosis' }}>
      {profileData?.small_experience || 'Default Experience'}
      </Typography>
    </div>
  );
};

export default Sidebar;
