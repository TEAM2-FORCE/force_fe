import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import { Logo } from "../components/layout/common";
import { NavCosmetic } from "../components/layout/common";
import { NavINCIpedia } from "../components/layout/common";

const Home = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>Kisse</Logo>
        <NavCosmetic>All Category</NavCosmetic>
        <NavINCIpedia>INCIpedia</NavINCIpedia>
      </Nav>
      <Section>
        <About></About>
        <h2>
          <br />
          Categories
        </h2>
        <ImageSection>
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
          <CosmeticImage />
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

const Nav = styled.div`
  display: flex;

  width: 100vw;
  height: 10vh;
  background: #fdfffd;

  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 150vh;
  width: 100vw;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 35vh;
  width: 100vw;
  background-color: #154a39;
  color: white;
`;

const FooterStyle = styled.div`
  margin-left: 6%;
`;

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

const CosmeticImage = styled.div`
  width: 23.8%;
  height: 48%;
  background: url(<path-to-image>),
    lightgray 0px -281.646px / 100% 284.444% no-repeat;
`;
