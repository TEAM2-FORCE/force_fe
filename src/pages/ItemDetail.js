import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Modal from "./Modal";

import veganmark1 from "../img/VeganMark/veganMark1.png";
import veganmark2 from "../img/VeganMark/veganMark2.png";
import emptyHeart from "../img/Items/emptyHeart2.png";
import fullHeart from "../img/Items/fullHeart.png";
import { useLocation } from "react-router-dom";

const ItemDetail = () => {
  const { state } = useLocation();
  const product = state;
  console.log(product);
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

  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  const whichVeganMark = () => {};

  // 구매처 이미지 띄우는 로직
  // const sellingSiteImage = (site) => {
  // 	if (site === "Oliveyoung") {
  // 		return 올리브영 이미지
  // 	}
  // 	else if (site === "Sephora") {
  // 		return 세포라 이미지
  // 	}
  // 	else if (site) === "Etude" {
  // 		return 에뛰드 이미지
  // 	}
  // }

  // 비건 마크 띄우는 로직
  // const veganMarkImage = (mark) => {
  // 	if (mark === "KoreaCertificate...") {
  // 		return 한국 비건 인증서 이미지
  // 	}
  // 	else if (mark === "StandardCertificate") {
  // 		return 표준 비건 인증서 이미지
  // 	}
  // }

  return (
    <Wrapper>
      <Nav></Nav>
      <Body>
        <ImageContainer>
          <ItemImage src={product.pd_image} />
        </ImageContainer>
        <ItemDescription>
          <div style={{ width: "95%" }}>
            <Container>
              <h1 style={{ margin: 0 }}>{product.pd_name}</h1>
              <IconImage
                src={whichHeart()}
                alt="wish"
                onClick={wishClick}
              ></IconImage>
            </Container>
            <h3 style={{ fontWeight: 500, marginTop: "0.5rem" }}>
              {product.pd_brand}
            </h3>
            <VeganMarkContainer>
              {/* {product.veganmark.map((mark) => {
								<VeganMark key={veganmarkID} src={veganMarkImage} onClick={handleClick}/>
							})} */}
              <VeganMark
                src={veganmark1}
                alt="KoreaCertification"
                onClick={handleClick}
              />
              <VeganMark
                src={veganmark2}
                alt="StandardCertification"
                onClick={handleClick}
              />
            </VeganMarkContainer>
            <br />
            <br />
          </div>
          <div>
            <h3>Ingredients</h3>
            <P style={{ marginTop: "0.8rem" }}>
              Aqua (Water), Propanediol, Betaine, ....
              {/* {product.ingredient} 표시 */}
            </P>
            <br />
            <br />
            <br />
          </div>
          <div style={{ width: "95%" }}>
            <h3>Where To Buy</h3>
            <Container>
              {/* {product.sellingSite.map((site, i)=>{
								<Image src={sellingSiteImage} key={i} 클릭하면 그 페이지로 링크/>
								사이트마다 키가 있는건 아니라서 인덱스로 키를 대신함
							})} */}
              <P>Oliveyoung Web</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
            </Container>
            <Container>
              <P>Oliveyoung Web</P>
            </Container>
          </div>
        </ItemDescription>
      </Body>
      <Footer></Footer>
      {modal && <Modal setModal={setModal} />}
      {/* 모달에 비건마크 아이디 번호에 따라 다르게 세팅, 비건마크 이미지 프롭스 넘겨줘야함
			e.target.id에 따른 다른 비건마크와 설명이 나오게! */}
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
