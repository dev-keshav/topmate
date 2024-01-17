import React from "react";
import All from "../Components/All";
import { Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import SidebarSmall from "../Components/SidebarSmall";
import Option from "../Components/Option";
import RatingFeedback from "../Components/RatingFeedback";
import OneCall from "./OneCall";
import AboutMe from "../Components/AboutMe";

function OneCallPage() {
  return (
    <div>
      <Stack className="side_bar_large">
        <Sidebar />
      </Stack>
      <Stack className="side_bar_small">
        <SidebarSmall />
      </Stack>
      <Stack className="main_cont" spacing={4}>
        <Stack className="option_div">
          <Option />
        </Stack>
        <Stack className="content_div">
          <OneCall />
          <Stack>
            <RatingFeedback />
          </Stack>
          <Stack className="about">
            <AboutMe />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default OneCallPage;
