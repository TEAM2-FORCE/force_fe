import React, { useState } from "react";
import styled from "styled-components";
import emptyStar from "../img/Ingredients/emptyStar2.png"
import fullStar from "../img/Ingredients/fullStar.png"
import blue from "../img/Ingredients/blue.png";
import pink from "../img/Ingredients/pink.png";

const BookmarkIngredient = () => {
  const [bookmark, setBookmark] = useState(false);
  const whichHeart = ()=>{
    if(!bookmark)return emptyStar;
    else return fullStar;
  }
  const wishClick = ()=>{
    setBookmark(!bookmark);
  }

  return (
    <Card>       
      <Contents>
        <IngredientInfo>
          <IngredientName>1,2-Hexanediol</IngredientName>
          <WishButton onClick={wishClick}>
          <img src={whichHeart()} alt="wish" width="20px"></img>
          </WishButton>
        </IngredientInfo>  
      </Contents>
      <Marks>
      <MarkImage src={blue} alt="testingX"></MarkImage>
        <MarkImage src={pink} alt="ingredientX"></MarkImage>
      </Marks>
      
      <Text>
      Antibacterial, moisturizing, preservative성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징성분주요특징주요특징성분주요특징성분주요특징성분
      </Text>
    </Card>
  );
};

export default BookmarkIngredient;

const Card = styled.div`
flex-direction: column;
background-color: white;
gap: 10px;
width: 90%;
max-height: 25rem;
margin: 25px;
position: relative;
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
const Marks = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 8px;
text-align: center;
width: 17%;

font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;

padding: 10px;
`
const MarkImage = styled.img`
width: 40%;
margin-right: 2%;
`
const Text = styled.div`
color: var(--mid-gray, #696B69);
/* Mid text */E
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 1%;
`