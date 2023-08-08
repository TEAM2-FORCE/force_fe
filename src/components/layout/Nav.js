import React, { useState } from "react";
import {
  Logo,
  MyPageButton,
  NavContainer,
  NavCosmetic,
  NavINCIpedia,
  SearchBar,
  SearchButton,
} from "./Layout";
import searchIcon from "../../img/searchIcon.png";
import myPageIcon from "../../img/myPageIcon.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const myPageClicked = () => {
    if (isLogin) navigate("/mypage");
    else navigate("/login");
  };
  const logoClicked = () => {
    navigate("/");
  };
  const goto = (where) => {
    navigate(`/${where}`);
  };

  return (
    <NavContainer>
      <Logo onClick={logoClicked}>VEBE</Logo>
      <NavCosmetic>All Category</NavCosmetic>
      <NavINCIpedia onClick={() => goto("incipedia")}>INCIpedia</NavINCIpedia>
      <Right>
        <SearchBar>
          <Input type="text" placeholder="Search"></Input>
          <SearchButton src={searchIcon} />
        </SearchBar>
        <MyPageButton src={myPageIcon} onClick={myPageClicked} />
      </Right>
    </NavContainer>
  );
};

export default Nav;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%;
  right: 5%;
`;

const Input = styled.input`
  border: none;
  height: "1.2rem";
  outline: "none";
  width: 50%;
  position: absolute;
`;
