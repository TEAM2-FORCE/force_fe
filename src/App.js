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
import ReLogin from "./pages/ReLogin";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/bookmark" element={<BookmarkPage />} />
        <Route path="/mypage/wishlist" element={<WishlistPage />} />
        <Route path="/products" element={<ListUpPage />} />
        <Route path="/products/:category" element={<ListUpPage />} />
        <Route path="/products/detail" element={<ItemDetail />} />
        <Route path="/ingredients" element={<INCIpedia />} />
        <Route path="/ingredients/detail" element={<IncipediaDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/relogin" element={<ReLogin />} />
        <Route
          path="/oauth2redirect"
          element={<GoogleOAuth2RedirectHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
