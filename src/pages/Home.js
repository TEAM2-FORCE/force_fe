import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import {
  Section,
} from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import moisturizer from "../img/Moisturizer.png";
import sunCare from "../img/SunCare.png";
import mask from "../img/Mask.png";
import eye from "../img/Eye.png";
import face from "../img/Face.png";
import lip from "../img/Lip.png";
import cleanser from "../img/Cleanser.png";
import allProducts from "../img/AllProducts.png";

const Home = () => {
  return (
    <Wrapper>
      <Nav></Nav>
      <Section>
        <About></About>
        <Category>
          <h2>
            <br />
            Categories
          </h2>
        </Category>
        <ImageSection>
          <CosmeticImage src={moisturizer}></CosmeticImage>
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

const CosmeticImage = styled.img`
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
