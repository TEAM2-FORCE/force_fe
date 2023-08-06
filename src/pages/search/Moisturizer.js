import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/common";
import {
  Nav,
  Section,
  Footer,
  FooterStyle,
  Logo,
  NavCosmetic,
  NavINCIpedia,
} from "../../components/layout/Layout";

const Moisturizer = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>VEBE</Logo>
        <NavCosmetic>All Category</NavCosmetic>
        <NavINCIpedia>INCIpedia</NavINCIpedia>
      </Nav>
      <Section>
        
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

export default Moisturizer;

// const Filter = styled.div`
// `