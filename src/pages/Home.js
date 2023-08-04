import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  Logo,
  NavCosmetic,
  NavINCIpedia,
} from "../components/layout/common";
import { Nav, Section, Footer } from "../components/layout/Layout";

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
