import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./Components/All";
import Option from "./Components/Option";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";
import OneCall from "./Pages/OneCall";
import Priority from "./Pages/Priority";
import NestedModal from "./Components/NestedModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Stack direction="row" spacing={2}>
          <Stack sx={{ position: "fixed", zIndex: 1 }}>
            <Sidebar />
          </Stack>
          <Stack
            sx={{
              paddingLeft: "38vw",
              paddingTop: "50px",
              position: "relative",
            }}
            spacing={4}
          >
            <Option />
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/onecall" element={<OneCall />} />
              <Route path="/prioritydm" element={<Priority />} />
              <Route path="/modal" element={<NestedModal />} />
            </Routes>
          </Stack>
        </Stack>
      </BrowserRouter>
    </>
  );
}

export default App;
