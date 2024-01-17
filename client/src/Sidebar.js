import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import pic from "./Photo/new-file.png";
import PipCImg from "../src/img/pipC.png";

const mystyle = {
  width: "28vw",
  height: "100vh",
  backgroundColor: "#4DD5CD",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "40px",
  paddingRight: "40px",
};

const twoCards = {
  margin: 4,
  marginTop: "25px",
  backgroundColor: "#71DDD7",
  color: "black",
  width: "100px",
  height: "100px",
  borderRadius: "12px",
  borderStyle: "none",
  marginRight: "15px",
};

const Sidebar = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/v1/api/profileData")
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <div className="sidebar_inner" style={mystyle}>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{
            width: "10vw",
            height: "20vh",
            transform: "rotate(10deg)",
            marginLeft: "-150px"
          }}
          alt=""
          src={PipCImg}
        />
        <Avatar
          alt="Remy Sharp"
          src={pic}
          sx={{ width: "200px", height: "200px", marginBottom: "40px" }}
        />
      </Stack>
      <Typography
        variant="h4"
        component="div"
        mb={"12px"}
        sx={{ fontWeight: "600", fontFamily: "Exo" }}
      >
        {profileData?.name || "Default Name"}
      </Typography>
      <Typography
        variant="h6"
        component="div"
        ml={"30px"}
        mr={"20px"}
        sx={{ fontWeight: "600", fontFamily: "Dosis" }}
      >
        {profileData?.large_experience || "Default Experience"}
      </Typography>
      <div sx={{ display: "flex" }}>
        <button style={twoCards}>
          <p>Top</p>
          <h1>1%</h1>
        </button>
        <button style={twoCards}>
          <p>booking</p>
          <h1>87</h1>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
