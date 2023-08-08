import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ItemDetail from "./pages/ItemDetail";
import Moisturizer from "./pages/search/Moisturizer";
import INCIpedia from "./pages/INCIpedia";
import All from "./pages/search/All";
import Cleanser from "./pages/search/Cleanser";
import Eye from "./pages/search/Eye";
import Face from "./pages/search/Face";
import Lip from "./pages/search/Lip";
import Masks from "./pages/search/Masks";
import SunCare from "./pages/search/SunCare";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/moisturizer" element={<Moisturizer />} />
        <Route path="/incipedia" element={<INCIpedia />} />
        <Route path="/all" element={<All />} />
        <Route path="/cleanser" element={<Cleanser />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/face" element={<Face />} />
        <Route path="/lip" element={<Lip />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/sunCare" element={<SunCare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
