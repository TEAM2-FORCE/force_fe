import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import { Section } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import about from "../img/about.png";
import CategorySection from "../components/home/CategorySection";

const Home = () => {
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
          <CategorySection whereTo="moisturizer" name="Moisturizer"/>
          <CategorySection whereTo="suncare" name="Sun Care"/>
          <CategorySection whereTo="face" name="Face"/>
          <CategorySection whereTo="eye" name="Eye"/>
          <CategorySection whereTo="lip" name="Lip"/>
          <CategorySection whereTo="cleanser" name="Cleanser"/>
          <CategorySection whereTo="masks" name="Masks"/>
          <CategorySection whereTo="all" name="All"/>
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
  overflow: hidden;
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

const Category = styled.div`
  align-self: flex-start;
  margin-left: 5%;
`;
