import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/common";
import itemImage from "../img/itemExample.png";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import veganmark1 from "../img/veganMark1.png";
import veganmark2 from "../img/veganMark2.png";
import emptyHeart from "../img/emptyHeart2.png";
import fullHeart from "../img/fullHeart.png";

const ItemDetail = () => {
  const [wish, setWish] = useState(false);
  const whichHeart = () => {
    if (!wish) {
      return emptyHeart;
    } else {
      return fullHeart;
    }
  };
  const wishClick = () => {
    setWish(!wish);
  };

  return (
    <Wrapper>
      <Nav></Nav>
      <Body>
        <ImageContainer>
          <ItemImage src={itemImage} />
        </ImageContainer>
        <ItemDescription>
          <div style={{ width: "95%" }}>
            <Container>
              <h1 style={{ margin: 0 }}>Amino Acids + B5</h1>
              <IconImage
                src={whichHeart()}
                alt="wish"
                onClick={wishClick}
              ></IconImage>
            </Container>
            <h3 style={{ fontWeight: 500, marginTop: "0.5rem" }}>
              The Ordinary
            </h3>
            <VeganMarkContainer>
              <VeganMark src={veganmark1} alt="Mark" />
              <VeganMark src={veganmark2} alt="Mark" />
            </VeganMarkContainer>
            <br />
            <br />
          </div>
          <div>
            <h3>Ingredients</h3>
            <P style={{ marginTop: "0.8rem" }}>
              Aqua (Water), Propanediol, Betaine, ....
            </P>
            <br />
            <br />
            <br />
          </div>
          <div style={{ width: "95%" }}>
            <h3>Where To Buy</h3>
            <Container>
              <P>Oliveyoung Web</P>
              <P>100,000 KRW</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
              <P>100,000 KRW</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
              <P>100,000 KRW</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
              <P>100,000 KRW</P>
            </Container>
            {/* <P>Oliveyoung Web</P>
            <P>Brand Mall</P>
            <P>Oliveyoung Web</P>
            <P>Oliveyoung Web</P> */}
          </div>
        </ItemDescription>
      </Body>
      <Footer></Footer>
    </Wrapper>
  );
};

export default ItemDetail;

const Body = styled.div`
  display: flex;
  justify-content: center;
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
  margin-top: 3%;
  margin-left: 15%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
  margin-left: 10%;
`;

const VeganMarkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 2rem;
  gap: 0.75rem;
  margin-top: 0;
`;
const VeganMark = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const P = styled.p`
  font-size: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconImage = styled.img`
  height: 24px;
  object-fit: contain;
`;
