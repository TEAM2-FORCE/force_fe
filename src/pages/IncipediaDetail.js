import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import ItemCard from "../components/ItemCard";

import emptyStar from "../img/Ingredients/emptyStar2.png";
import fullStar from "../img/Ingredients/fullStar.png";

const IncipediaDetail = () => {
  const [favorite, setFavorite] = useState(false);
  const whichStar = () => {
    if (!favorite) {
      return emptyStar;
    } else {
      return fullStar;
    }
  };
  const favoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <Wrapper>
      <Nav />
      <Body>
        <BodySection>
          <Container>
            <h1>1,2-Hexanediol</h1>
            <IconImage
              src={whichStar()}
              alt="favorite"
              onClick={favoriteClick}
            ></IconImage>
          </Container>
          <div style={{ fontSize: "1.5rem" }}>
            Antibacterial, moisturizing, preservative
          </div>
          <br />
          <br />
          <br />
          <br />
          <Container2>
            <h2>Products Including</h2>
            <More>View More</More>
          </Container2>
          <ProductContainer>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </ProductContainer>
        </BodySection>
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default IncipediaDetail;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IconImage = styled.img`
  height: 32px;
  object-fit: contain;
  margin-left: 10px;
`;

const BodySection = styled.div`
  width: 88%;
`;

const More = styled.div`
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
