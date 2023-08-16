import React from "react";
import styled from "styled-components";
import cautious from "../../img/Ingredients/cautious.png";
import { useNavigate } from "react-router-dom";
import BookmarkClick from "./BookmarkClick";
import { isAuthenticated } from "../../apis/Googlelogin";

const IngredientCard = ({ igd_id, ingredient }) => {
  const navigate = useNavigate();
  const cardClicked = () => {
    navigate("/incipediadetail", { state: ingredient });
  };

  return (
    <Card onClick={cardClicked}>
      <Contents>
        <IngredientInfo>
          <IngredientName>{ingredient.igd_name}</IngredientName>
          <SmallBookmark>
            {
              isAuthenticated() ? 
            <BookmarkClick igd_id={igd_id} detail={false} isBookmarked={ingredient.bookmarked_igd}></BookmarkClick>
            :
            <BookmarkClick igd_id={igd_id} detail={false} isBookmarked={false}></BookmarkClick>
            }
          </SmallBookmark>
        </IngredientInfo>
        {ingredient.igd_info}
      </Contents>
      <Bottom>
        <MarkImage src={cautious} alt="ingredientX"></MarkImage>
      </Bottom>
    </Card>
  );
};

export default IngredientCard;

const Card = styled.div`
  flex-direction: column;
  background-color: white;
  width: 20%;
  height: 100px;
  margin: 30px 20px;
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
  overflow: hidden;
`;
const IngredientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const IngredientName = styled.div`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// const WishButton = styled.button`
// border: none;
// background-color: white;
// cursor: pointer;
// display: flex;
// justify-content: space-center;
// align-items: center;
// `
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
`;
const MarkImage = styled.img`
  width: 40%;
  margin-right: 2%;
`;
const SmallBookmark = styled.div``;
