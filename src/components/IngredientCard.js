import React, { useState } from "react";
import styled from "styled-components";
// import ingredientExample from "../img/Ingredients/ingredientExample.png";
import emptyStar from "../img/Ingredients/emptyStar.png";
import fullStar from "../img/Ingredients/fullStar.png";
import blue from "../img/Ingredients/blue.png"
import pink from "../img/Ingredients/pink.png"
import { useNavigate } from "react-router-dom";

const IngredientCard = ({ingredient}) => {
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState(false);
  const whichHeart = ()=>{
    if(!bookmark)return emptyStar;
    else return fullStar;
  }
  const wishClick = ()=>{
    setBookmark(!bookmark);
  }
  const cardClicked = () => {
    navigate("/ingredientdetail", {state: ingredient})
  }

  return (
    <Card onClick={cardClicked}>
      {/* { isMypage &&
        <Picture>
        <img src={ingredientExample} alt="ingredient"></img>
      </Picture>

      } */}
       
      <Contents>
        <IngredientInfo>
          <IngredientName>{ingredient.igd_name}</IngredientName>
          <WishButton onClick={wishClick}>
          <img src={whichHeart()} alt="wish" width="20px"></img>
          </WishButton>
        </IngredientInfo>
        <div>{ingredient.igd_main_ftn}</div>    
      </Contents>
      <Bottom>
      <MarkImage src={blue} alt="testingX"></MarkImage>
        <MarkImage src={pink} alt="ingredientX"></MarkImage>
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
max-height: 25rem;
margin: 25px;
position: relative;
`;
// const Picture = styled.div`
// display: flex;
// flex-direction: center;
// justify-content: center;
// align-items: center;
// display: flex;
// gap: 20px;
// height: 10rem;
// margin-bottom: 3px;
// `;


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
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const IngredientName = styled.div`
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;

`

const WishButton = styled.button`
border: none;
background-color: white;
cursor: pointer;
display: flex;
justify-content: space-center;
align-items: center;
`
const Bottom = styled.div`
display: flex;
justify-content: flex-start;
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
const MarkImage = styled.img`
width: 40%;
margin-right: 2%;
`
