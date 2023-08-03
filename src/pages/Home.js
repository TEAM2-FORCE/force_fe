import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";

const Home = () => {
  return (
    <Wrapper>
      <Header>헤더</Header>
      <Body>바디</Body>
      <Footer>푸터</Footer>
    </Wrapper>
  );
};

export default Home;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100vw;
  background-color: #9dc8c8;
`;
