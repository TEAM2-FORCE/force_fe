import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import { Section } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import about from "../img/about.png";
import moisturizer from "../img/Moisturizer.png";
import sunCare from "../img/SunCare.png";
import mask from "../img/Mask.png";
import eye from "../img/Eye.png";
import face from "../img/Face.png";
import lip from "../img/Lip.png";
import cleanser from "../img/Cleanser.png";
import allProducts from "../img/AllProducts.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goto = (where) => {
    navigate(`/${where}`);
  };

  return (
    <Wrapper>
      <Nav></Nav>
      <Section>
        <About>
          <AboutImage src={about} alt="Image" />
        </About>
        <Category>
          <h2>
            <br />
            Categories
          </h2>
        </Category>
        <ImageSection>
          <ImageWrapper onClick={() => goto("moisturizer")}>
            <Image src={moisturizer} alt="Image" />
            <TextContainer>
              <h3>Moisturizer</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("suncare")}>
            <Image src={sunCare} alt="Image" />
            <TextContainer>
              <h3>Sun Care</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("cleanser")}>
            <Image src={cleanser} alt="Image" />
            <TextContainer>
              <h3>Cleanser</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("masks")}>
            <Image src={mask} alt="Image" />
            <TextContainer>
              <h3>Mask</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("face")}>
            <Image src={face} alt="Image" />
            <TextContainer>
              <h3>Face</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("eye")}>
            <Image src={eye} alt="Image" />
            <TextContainer>
              <h3>Eye</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("lip")}>
            <Image src={lip} alt="Image" />
            <TextContainer>
              <h3>Lip</h3>
            </TextContainer>
          </ImageWrapper>
          <ImageWrapper onClick={() => goto("all")}>
            <Image src={allProducts} alt="Image" />
            <TextContainer>
              <h3>All Products</h3>
            </TextContainer>
          </ImageWrapper>
        </ImageSection>
      </Section>
      <Footer></Footer>
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

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block; //인라인 블록을 해주어야 요소들끼리 겹치게 만들어줄 수 있음!!
  width: 23.8%;
  height: 48%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border: none;
  &:hover {
    cursor: pointer;
    z-index: 0;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  &:hover {
    z-index: 2;
  }
`;

const Category = styled.div`
  align-self: flex-start;
  margin-left: 5%;
`;
