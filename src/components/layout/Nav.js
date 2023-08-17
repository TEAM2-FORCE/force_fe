import React, { useState } from "react";
import {
  Logo,
  MyPageButton,
  NavContainer,
  NavCategory,
  SearchBar,
  SearchButton,
  Container,
} from "./Layout";
import searchIcon from "../../img/Nav/searchIcon.png";
import myPageIcon from "../../img/Nav/myPageIcon.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import logo from "../../img/Logo/MainLogo.png";
import DropDown from "../DropDown";
import { isAuthenticated } from "../../apis/Googlelogin";

const Nav = () => {
  const navigate = useNavigate();
  const myPageClicked = () => {
    if (isAuthenticated()) navigate("/mypage");
    else {
      navigate("/login");
    }
  };
  const logoClicked = () => {
    navigate("/");
  };
  const goto = (where) => {
    if (
      (window.location === "http://localhost:3000/incipedia" ||
        window.location === "https://vebe.netlify.app/incipedia") &&
      where === "incipedia"
    )
      window.location.reload();
    navigate(`/${where}`);
  };

  const [dropDown, setDropDown] = useState(false);

  const allCategoryHover = () => {
    setDropDown(true);
  };

  const removeHover = () => {
    setDropDown(false);
  };

  const [userInput, setUserInput] = useState("");

  const getInputValue = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const searchClick = () => {
    // const response = await getItemSearch(userInput);
    // console.log(response);
    // setProductDatas(response.data);
    navigate("/products", {
      state: {
        userInput: userInput,
      },
    });
    const input = document.querySelectorAll("input");
    input.value = "";
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      searchClick();
    }
  };

  const write = () => {
    // console.log(typeof token == 'undefined');
  };
  return (
    <Container onClick={write}>
      <NavContainer>
        <Left>
          <Logo onClick={logoClicked} src={logo} />
        </Left>
        <Center>
          <NavCategory
            onMouseOver={allCategoryHover}
            onMouseLeave={removeHover}
          >
            All Category
          </NavCategory>
          <NavCategory onClick={() => goto("ingredients")}>
            INCIPedia
          </NavCategory>
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
              onChange={getInputValue}
              onKeyDown={activeEnter}
            ></input>
            <SearchButton src={searchIcon} onClick={searchClick} />
          </SearchBar>
          <MyPageButton src={myPageIcon} onClick={myPageClicked} />
        </Right>
      </NavContainer>
      {dropDown && <DropDown setDropDown={setDropDown} />}
    </Container>
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
