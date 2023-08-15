import React from "react";
import styled from "styled-components";
import testingX from "../../img/Ingredients/testingX.png";
import ingredientX from "../../img/Ingredients/ingredientX.png";
import { useNavigate } from "react-router-dom";
import WishlistClick from "./WishlistClick";

const ItemCard = ({ product }) => {
  const navigate = useNavigate();

  const cardClicked = () => {
    navigate("/itemdetail", {
      state: {
        product: product,
      },
    });
  };

  return (
    <Card onClick={cardClicked}>
      <Center>
        <Picture src={product.pd_image} alt="item" />
      </Center>
      <Contents>
        <IngredientInfo>
          <ProductName>{product.pd_name}</ProductName>
          <WishlistClick pd_id={product.pd_id} detail={false} />
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
const Center = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  margin-bottom: 1%;
`;

const Picture = styled.img`
  align-items: center;
  display: flex;
  width: 90%;
  height: 90%;
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
`;
