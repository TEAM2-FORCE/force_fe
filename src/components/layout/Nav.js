import React, { useState } from "react";
import {
  Logo,
  MyPageButton,
  NavContainer,
  NavCategory,
  SearchBar,
  SearchButton,
} from "./Layout";
import searchIcon from "../../img/Nav/searchIcon.png";
import myPageIcon from "../../img/Nav/myPageIcon.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import logo from "../../img/Logo/MainLogo.png";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const myPageClicked = () => {
    if (isLogin) navigate("/mypage");
    else {
      navigate("/login");
      setIsLogin(!isLogin);
    }
  };
  const logoClicked = () => {
    navigate("/");
  };
  const goto = (where) => {
    navigate(`/${where}`);
  };

  return (
    <NavContainer>
      <Left>
        <Logo onClick={logoClicked} src={logo} />
      </Left>
      <Center>
        <NavCategory>All Category</NavCategory>
        <NavCategory onClick={() => goto("incipedia")}>INCIPedia</NavCategory>
      </Center>
      <Right>
        <SearchBar>
          <input
            type="text"
            placeholder="Search Product"
            style={{
              border: "none",
              height: "1.2rem",
              outline: "none",
              width: "100%",
            }}
          ></input>
          <SearchButton src={searchIcon} />
        </SearchBar>
        <MyPageButton src={myPageIcon} onClick={myPageClicked} />
      </Right>
    </NavContainer>
  );
};

export default Nav;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
`;
const Center = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%;
  right: 5%;
`;
