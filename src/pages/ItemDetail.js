import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import itemImage from "../img/itemExample.png";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const ItemDetail = () => {
  return (
    <Wrapper>
      <Nav></Nav>
      <Body>
        <ImageContainer>
          <ItemImage src={itemImage} />
        </ImageContainer>
        <ItemDescription>
          <div>
            <h1>Amino Acids + B5</h1>
            <p>The Ordinary</p>
            <br />
            <br />
            <br />
          </div>
          <div>
            <h3>Ingredients</h3>
            <p>Aqua (Water), Propanediol, Betaine, ....</p>
            <br />
            <br />
            <br />
          </div>
          <div>
            <h3>Where To Buy</h3>
            <p>Oliveyoung Web</p>
            <p>Brand Mall</p>
            <p>Oliveyoung Web</p>
            <p>Oliveyoung Web</p>
          </div>
        </ItemDescription>
      </Body>
      <Footer>
      </Footer>
    </Wrapper>
  );
};

export default ItemDetail;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ItemImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin-top: 7%;
  margin-left: 15%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
`;
