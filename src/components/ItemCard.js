import React, { useState } from "react";
import styled from "styled-components";
import itemExample from "../img/Items/itemExample.png";
import emptyHeart from "../img/Items/emptyHeart2.png";
import fullHeart from "../img/Items/fullHeart.png";
import testingX from "../img/Ingredients/testingX.png";
import ingredientX from "../img/Ingredients/ingredientX.png";
import { useNavigate } from "react-router-dom";

const ItemCard = ({cg_id, product}) => {
  const navigate = useNavigate();
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

  const cardclicked = () => {
    navigate('/itemdetail', {state : product});
  }

  return (
    <Card onClick={cardclicked}>
      <Picture>
        <img src={itemExample} alt="item" height="70%"></img>
      </Picture>
      <Contents>
        <IngredientInfo>
          <ProductName>{product.pd_name}</ProductName>
          <WishButton onClick={wishClick}>
            <img src={whichHeart()} alt="wish" style={{width: "1rem", objectFit: "contain", margin: "0.2rem"}}></img>
          </WishButton>
        </IngredientInfo>
        <div>{product.pd_brand}</div>
        <div>KRW {product.pd_price}</div>
      </Contents>
      <Bottom>
        <MarkImage src={testingX} alt="testingX"></MarkImage>
        <MarkImage src={ingredientX} alt="ingredientX"></MarkImage>
      </Bottom>
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
  flex-direction: column;
  background-color: white;
  gap: 10px;
  max-height: 25rem;
  max-width: 20%;
  margin: 2%;
  position: relative;

`;

const Picture = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 75%
  margin-bottom: 1%;
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
`;
const IngredientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
`;
const ProductName = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 90%;
  height: 110px;
  overflow: hidden;
`;

const WishButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
`;
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
`;
const MarkImage = styled.img`
width: 40%;
margin: 0.1%;
`
