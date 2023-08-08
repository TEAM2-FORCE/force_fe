import React from 'react'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import moisturizer from "../../img/Moisturizer.png";
import suncare from "../../img/SunCare.png";
import mask from "../../img/Mask.png";
import eye from "../../img/Eye.png";
import face from "../../img/Face.png";
import lip from "../../img/Lip.png";
import cleanser from "../../img/Cleanser.png";
import all from "../../img/AllProducts.png";

const CategorySection = ({whereTo, name}) => {
  const navigate = useNavigate();
  const goto = (where) => {
    navigate(`/${where}`);
  };
  const imageMapping = {
    moisturizer: moisturizer,
    suncare: suncare,
    masks: mask,
    eye: eye,
    face: face,
    lip: lip,
    cleanser: cleanser,
    all: all,
  };
  return (
    <>
    <ImageWrapper onClick={() => goto(whereTo)}>
    <Image src={imageMapping[whereTo]} alt="Image" />
      <TextContainer>
        <h3>{name}</h3>
      </TextContainer>
    </ImageWrapper>
    </>
  )
}

export default CategorySection;

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
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border: none;
  &:hover {
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