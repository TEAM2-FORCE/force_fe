import React, { useState } from "react";
import styled from "styled-components";
import itemExample from "../img/itemExample.png"
import emptyHeart from "../img/emptyHeart.png"
import fullHeart from "../img/fullHeart.png"

const ItemCard = () => {
  const [wish, setWish] = useState(false);
  const whichHeart = ()=>{
    if(!wish)return emptyHeart;
    else return fullHeart;
  }
  const wishClick = ()=>{
    setWish(!wish);
  }

  return (
    <Card>
      <Picture>
        <img src={itemExample} alt="item"></img>
      </Picture>
      <Contents>
        <IngredientInfo>
          <ProductName>ProductName</ProductName>
          <WishButton onClick={wishClick}>
          <img src={whichHeart()} alt="wish"></img>
          </WishButton>
        </IngredientInfo>
        <div>The Ordinary</div>
        <div>{10000}원</div>      
      </Contents>
      <Bottom>
        <Testing>Testing {"X"}</Testing>
        <Ingredients>Ingredients {"X"}</Ingredients>
      </Bottom>
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
flex-direction: column;
background-color: white;
gap: 10px;
width: 15%;
height: 17rem;
margin-left: 25px;
margin-right: 25px;
`;

const Picture = styled.div`
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
display: flex;
gap: 20px;
height: 10rem;
margin-bottom: 3px;
`;

const Contents = styled.div`
display: flex;
flex-direction: center;
justify-content: left;
flex-direction: column;
color: black;
margin-left: 7px;

font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

`
const IngredientInfo = styled.div`
display: flex;
justify-content: space-between;
margin-right: 5px;
`
const ProductName = styled.div`
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const WishButton = styled.button`
border: none;
background-color: white;
cursor: pointer;
display: flex;
`
const Bottom = styled.div`
display: flex;
justify-content: space-around;
margin-top: 8px;
text-align: center;

font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;

padding-left: 10px;
padding-right: 10px;
`

const Testing = styled.div`
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 1rem;
background: var(--label-color-1, #FFB7EF);
padding: 3px 5px 3px 5px;
margin-right: 5px;
`
const Ingredients = styled.div`
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 1rem;
background: var(--label-color-2, #FFDBA5);
padding: 3px 5px 3px 5px;
`