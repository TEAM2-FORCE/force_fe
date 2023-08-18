import React from "react";
import styled from "styled-components";
// import testingX from "../../img/Ingredients/testingX.png";
// import ingredientX from "../../img/Ingredients/ingredientX.png";
import { useNavigate } from "react-router-dom";
import WishlistClick from "./WishlistClick";

const ItemCard = ({ product }) => {
  const navigate = useNavigate();

  const cardClicked = () => {
    navigate("/products/detail", { state: { product: product } });
  };

  const priceMark = () => {
    const price = product.pd_price;
    if(product.pd_price >= 1000){
    const formattedPrice = price.toLocaleString('en-US');
    return formattedPrice;
    }
    return price;
  }

  return (
    <Card onClick={cardClicked}>
      <Center>
        <Picture src={product.pd_image} alt="item" />
      </Center>
      <Contents>
      <BrandText>{product.pd_brand}</BrandText>
        <IngredientInfo>
          <ProductName>{product.pd_name}</ProductName>
          <WishlistClick
            pd_id={product.pd_id}
            detail={false}
            isWishlisted={product.wished_pd}
          />
        </IngredientInfo>        
        <div>KRW {priceMark()}</div>
      </Contents>
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
  width: 100%;
  height: 50%;
  margin-bottom: 1%;
  overflow: hidden;
  
`;

const Picture = styled.img`
  align-items: center;
  display: flex;
  width: 100%;
  // height: 100%;
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
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 90%;
  height: 41px;
  overflow: hidden;
  margin-bottom: 5px;
`;
const BrandText = styled.div`
color: var(--dark-gray, var(--dark-gray, #414241));
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`