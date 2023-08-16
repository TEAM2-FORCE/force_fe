import React, { useState } from "react";
import { styled } from "styled-components";
import {
  deleteIngredientBookmark,
  postIngredientBookmark,
} from "../../apis/Ingredient";
import emptyStar from "../../img/Ingredients/emptyStar2.png";
import fullStar from "../../img/Ingredients/fullStar.png";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../apis/Googlelogin";

const BookmarkClick = ({ igd_id, detail, isBookmarked }) => {
  const navigate = useNavigate();
  //이건 수정해야 함
  const islogin = isAuthenticated();
  const [bookmark, setBookmark] = useState(isBookmarked);
  const whichStar = () => {
    if (!bookmark) return emptyStar;
    else return fullStar;
  };
  const bookmarkClicked = async (event) => {
    event.stopPropagation();
    //여기에 로그인되어있는지 확인하는 거 해야 함
    if (islogin) {
      if (!bookmark) await postIngredientBookmark(igd_id);
      else {
        await deleteIngredientBookmark(igd_id);
      }      
    } else {
      navigate("/login");
    }

    setBookmark(!bookmark);
  };
  return (
    <>
      {detail ? (
        <BookmarkButton onClick={bookmarkClicked}>
          <img src={whichStar()} alt="wish" width="20px"></img>
        </BookmarkButton>
      ) : (
        <IconImage src={whichStar()} alt="favorite" onClick={bookmarkClicked} />
      )}
    </>
  );
};

export default BookmarkClick;

const BookmarkButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-center;
  align-items: center;
`;
const IconImage = styled.img`
  height: 32px;
  object-fit: contain;
  margin-left: 10px;
`;
