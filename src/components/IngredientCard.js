import React, { useState } from "react";
import styled from "styled-components";
import ingredientExample from "../img/Ingredients/ingredientExample.png";
import emptyStar from "../img/Ingredients/emptyStar.png";
import fullStar from "../img/Ingredients/fullStar.png";
import testingX from "../img/Ingredients/testingX.png";
import ingredientX from "../img/Ingredients/ingredientX.png";

const IngredientCard = () => {
  const [bookmark, setBookmark] = useState(false);
  const whichHeart = () => {
    if (!bookmark) return emptyStar;
    else return fullStar;
  };
  const wishClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <Card>
      <Picture>
        <img src={ingredientExample} alt="ingredient"></img>
      </Picture>
      <Contents>
        <IngredientInfo>
          <IngredientName>1,2-Hexanediol</IngredientName>
          <WishButton onClick={wishClick}>
            <img src={whichHeart()} alt="wish"></img>
          </WishButton>
        </IngredientInfo>
        <div>Antibacterial, moisturizing, preservative</div>
      </Contents>
      <Bottom>
        <MarkImage src={testingX} alt="testingX"></MarkImage>
        <MarkImage src={ingredientX} alt="ingredientX"></MarkImage>
      </Bottom>
    </Card>
  );
};

export default IngredientCard;

const Card = styled.div`
  flex-direction: column;
  background-color: white;
  gap: 10px;
  width: 20%;
  min-width: 18%;
  max-height: 25rem;
  margin: 25px;
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
`;
const IngredientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
`;
const IngredientName = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

// const Testing = styled.div`
// justify-content: center;
// align-items: center;
// gap: 0.625rem;
// border-radius: 1rem;
// background: var(--label-color-1, #FFB7EF);
// padding: 3px 5px 3px 5px;
// margin-right: 5px;
// `
// const Ingredients = styled.div`
// justify-content: center;
// align-items: center;
// gap: 0.625rem;
// border-radius: 1rem;
// background: var(--label-color-2, #FFDBA5);
// padding: 3px 5px 3px 5px;
// `

const MarkImage = styled.img`
  width: 40%;
  margin: 0.1%;
`;
