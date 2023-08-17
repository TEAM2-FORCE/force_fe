import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import { Section } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import CategorySection from "../components/home/CategorySection";
import { Banner } from "../components/home/Banner";

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
          <CategorySection whereTo="products" name="Make Up" cg_id={1} />
          <CategorySection whereTo="products" name="Skin Care" cg_id={2} />
          <CategorySection whereTo="products" name="Sun Care" cg_id={3} />
          <CategorySection whereTo="products" name="Masks" cg_id={4} />
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
  font-family: Pretendard;
`;
