import React from "react";
import styled from "styled-components";

import moisturizer from "../../img/Moisturizer.png";
import sunCare from "../../img/SunCare.png";
import mask from "../../img/Mask.png";
import eye from "../../img/Eye.png";
import face from "../../img/Face.png";
import lip from "../../img/Lip.png";
import cleanser from "../../img/Cleanser.png";
import allProducts from "../../img/AllProducts.png";

const ImageHover = () => {
  return (
    <div>
      <ImageWrapper>
        <Image src={moisturizer} alt="Image" />
        <TextContainer>
          <h3>Moisturizer</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={sunCare} alt="Image" />
        <TextContainer>
          <h3>Sun Care</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={cleanser} alt="Image" />
        <TextContainer>
          <h3>Cleanser</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={mask} alt="Image" />
        <TextContainer>
          <h3>Mask</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={face} alt="Image" />
        <TextContainer>
          <h3>Face</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={eye} alt="Image" />
        <TextContainer>
          <h3>Eye</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={lip} alt="Image" />
        <TextContainer>
          <h3>Lip</h3>
        </TextContainer>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={allProducts} alt="Image" />
        <TextContainer>
          <h3>All Products</h3>
        </TextContainer>
      </ImageWrapper>
    </div>
  );
};

export default ImageHover;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block; //인라인 블록을 해주어야 요소들끼리 겹치게 만들어줄 수 있음!!
  width: 23.8%;
  height: 48%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  &:hover {
    filter: brightness(0.6);
    cursor: pointer;
    z-index: 0;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  &:hover {
    z-index: 2;
  }
`;
