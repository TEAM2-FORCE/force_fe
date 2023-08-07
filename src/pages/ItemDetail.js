import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import {
  Nav,
  Footer,
  FooterStyle,
  Logo,
  NavCosmetic,
  NavINCIpedia,
  SearchBar,
  SearchButton,
  MyPageButton,
} from "../components/layout/Layout";

import searchIcon from "../img/searchIcon.png";
import myPageIcon from "../img/myPageIcon.png";
import itemImage from "../img/itemExample.png";

const ItemDetail = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>VEBE</Logo>
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
        <MyPageButton src={myPageIcon} />
      </Nav>
      <Body>
        <ImageContainer>
          <ItemImage src={itemImage} />
        </ImageContainer>
        <ItemDescription>
          <div>
            <h1>Amino Acids + B5</h1>
            <p>The Ordinary</p>
            <br />
            <br />
            <br />
          </div>
          <div>
            <h3>Ingredients</h3>
            <p>Aqua (Water), Propanediol, Betaine, ....</p>
            <br />
            <br />
            <br />
          </div>
          <div>
            <h3>Where To Buy</h3>
            <p>Oliveyoung Web</p>
            <p>Brand Mall</p>
            <p>Oliveyoung Web</p>
            <p>Oliveyoung Web</p>
          </div>
        </ItemDescription>
      </Body>
      <Footer>
        <FooterStyle>
          <h3>Contact Us</h3>
          <div>Tel : 02-1234-5678</div>
          <div>
            Mail : ouremail@gmail.com
            <br />
            <br />
          </div>
          <h3>Copyright</h3>
          <div>Image by valuavitaly on Freepik</div>
        </FooterStyle>
      </Footer>
    </Wrapper>
  );
};

export default ItemDetail;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ItemImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin-top: 7%;
  margin-left: 15%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
`;
