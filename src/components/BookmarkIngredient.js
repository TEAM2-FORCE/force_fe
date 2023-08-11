import React, { useState } from "react";
import styled from "styled-components";
import blue from "../img/Ingredients/blue.png";
import pink from "../img/Ingredients/pink.png";
import BookmarkClick from "./BookmarkClick";

const BookmarkIngredient = ({bookmarkIngredient}) => {

  return (
    <Card>       
      <Contents>
        <IngredientInfo>
          <IngredientName>{bookmarkIngredient.igd_name}</IngredientName>
          <BookmarkClick></BookmarkClick>
        </IngredientInfo>  
      </Contents>
      <Marks>
      <MarkImage src={blue} alt="testingX"></MarkImage>
        <MarkImage src={pink} alt="ingredientX"></MarkImage>
      </Marks>
      
      <Text>
      {bookmarkIngredient.igd_main_ftn}
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