import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ItemDetail from "./pages/ItemDetail";
import INCIpedia from "./pages/INCIpedia";
import ScrollToTop from "./components/ScrollToTop";
import IncipediaDetail from "./pages/IncipediaDetail";
import BookmarkPage from "./pages/BookmarkPage";
import WishlistPage from "./pages/WishlistPage";
import ListUpPage from "./pages/ListUpPage";


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
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/listuppage" element={<ListUpPage />} />
        {/* <Route path="/all" element={<All />} />
        <Route path="/skinCare" element={<SkinCare />} />
        <Route path="/makeUp" element={<MakeUp />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/sunCare" element={<SunCare />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
