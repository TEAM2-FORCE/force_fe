import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import {
  Nav,
  Section,
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

// import Moisturizer from "../img/Moisturizer.png";
// import SunCare from "../img/SunCare.png";
// import Mask from "../img/Mask.png";
// import Eye from "../img/Eye.png";
// import Face from "../img/Face.png";
// import Lip from "../img/Lip.png";
// import Cleanser from "../img/Cleanser.png";
// import AllProducts from "../img/AllProducts.png";

const Home = () => {
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
      <Section>
        <About></About>
        <Category>
          <h2>
            <br />
            Categories
          </h2>
        </Category>
        <ImageSection>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
          <CosmeticImage></CosmeticImage>
        </ImageSection>
      </Section>
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

export default Home;

const About = styled.div`
  width: 90%;
  height: 30%;
  background: url(<path-to-image>),
    lightgray 0px -281.646px / 100% 284.444% no-repeat;
`;

const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-evenly;
  align-content: space-between;
  width: 90%;
  height: 50%;
  margin-top: 0;
`;

const CosmeticImage = styled.button`
  width: 23.8%;
  height: 48%;
  background: url(), lightgray 0px -281.646px / 100% 284.444% no-repeat;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
  }
  border: none;
`;

const Category = styled.div`
  align-self: flex-start;
  margin-left: 5%;
`;