import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NestedModal from "./Components/NestedModal";
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
