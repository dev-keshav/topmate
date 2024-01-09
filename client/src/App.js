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
import DevKeshav from "./Pages/DevKeshav";
import OneCallPage from "./Pages/OneCallPage";
import PriorityDmPage from "./Pages/PriorityDmPage";

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="/dev-keshav" element={<DevKeshav />} />
                <Route path="/dev-keshav/onecall" element={<OneCallPage />} />
                <Route path="/dev-keshav/prioritydm" element={<PriorityDmPage />} />
                <Route path="/dev-keshav/modal" element={<NestedModal />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            
          
        
      </BrowserRouter>
    </>
  );
}

export default App;
