import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import { Section } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import CategorySection from "../components/home/CategorySection";
import {Banner} from "../components/Banner";

const Home = () => {
  return (
    <Wrapper>
      <Nav></Nav>
      <Section>
        <About>
          <Banner></Banner>
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
  width: 100%;
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
