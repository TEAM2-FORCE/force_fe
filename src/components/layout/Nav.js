import React, { useState } from 'react'
import { Logo, MyPageButton, NavContainer, NavCosmetic, NavINCIpedia, SearchBar, SearchButton } from './Layout'
import searchIcon from "../../img/searchIcon.png";
import myPageIcon from "../../img/myPageIcon.png";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const isLogin = useState(true);
  const navigate = useNavigate();
  const myPageClicked = () => {
    if(isLogin)
      navigate("/mypage");
    else
      navigate("/login");
  }
  const logoClicked = () => {
    navigate("/");
  }
  return (
    <NavContainer>
        <Logo onClick={logoClicked}>VEBE</Logo>
        <NavCosmetic>All Category</NavCosmetic>
        <NavINCIpedia>INCIpedia</NavINCIpedia>
        <SearchBar>
          <input
            type="text"
            placeholder="Search"
            style={{ border: "none", height: "1.2rem" }}
          ></input>
          <SearchButton src={searchIcon} />
        </SearchBar>
        <MyPageButton src={myPageIcon} onClick={myPageClicked}/>
    </NavContainer>
  )
}

export default Nav