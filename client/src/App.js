import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./Components/All";
import Option from "./Components/Option";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";
import OneCall from "./Pages/OneCall";
import Priority from "./Pages/Priority";
import NestedModal from "./Components/NestedModal";
import SidebarSmall from "./Components/SidebarSmall";
import AboutMe from "./Components/AboutMe";
import RatingFeedback from "./Components/RatingFeedback";
import Firstpage from "./Pages/Firstpage";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route
          path="/dev-keshav"
          element={
            <Stack direction="row" spacing={0}>
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
                  <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="onecall" element={<OneCall />} />
                    <Route path="prioritydm" element={<Priority />} />
                    <Route path="modal" element={<NestedModal />} />
                  </Routes>
                  <Stack>
                    <RatingFeedback />
                  </Stack>
                  <Stack className="about">
                    <AboutMe />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
