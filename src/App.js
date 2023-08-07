import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ItemDetail from "./pages/ItemDetail";
import Moisturizer from "./pages/search/Moisturizer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/moisturizer" element={<Moisturizer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
