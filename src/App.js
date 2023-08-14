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
import GoogleOAuth2RedirectHandler from "./pages/GoogleOAuth2RedirectHandler";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/incipediadetail" element={<IncipediaDetail />} />
        <Route path="/incipedia" element={<INCIpedia />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/listuppage" element={<ListUpPage />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/oauth2redirect"
          element={<GoogleOAuth2RedirectHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
