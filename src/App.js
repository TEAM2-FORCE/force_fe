import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ItemDetail from "./pages/ItemDetail";
import INCIpedia from "./pages/INCIpedia";
import All from "./pages/search/All";
import Masks from "./pages/search/Masks";
import SunCare from "./pages/search/SunCare";
import ScrollToTop from "./components/ScrollToTop";
import IncipediaDetail from "./pages/IncipediaDetail";
import MakeUp from "./pages/search/MakeUp";
import SkinCare from "./pages/search/SkinCare";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/incipediadetail" element={<IncipediaDetail />} />
        <Route path="/incipedia" element={<INCIpedia />} />
        <Route path="/all" element={<All />} />
        <Route path="/skinCare" element={<SkinCare />} />
        <Route path="/makeUp" element={<MakeUp />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/sunCare" element={<SunCare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
