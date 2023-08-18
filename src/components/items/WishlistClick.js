import React, { useState } from "react";
import { styled } from "styled-components";
import emptyHeart from "../../img/Items/emptyHeart2.png";
import fullHeart from "../../img/Items/fullHeart.png";
import { useNavigate } from "react-router-dom";
import { deleteItemWishlist, postItemWishlist } from "../../apis/Item";
import { isAuthenticated } from "../../apis/Googlelogin";

const WishlistClick = ({ pd_id, detail, isWishlisted }) => {
  const navigate = useNavigate();
  //이건 수정해야 함
  const islogin = isAuthenticated();
  const [wish, setWish] = useState(isWishlisted);
  const whichHeart = () => {
    if (!wish) return emptyHeart;
    else return fullHeart;
  };
  const wishlistClicked = async (event) => {
    event.stopPropagation();
    //여기에 로그인되어있는지 확인하는 거 해야 함
    if (islogin) {
      if (!wish) await postItemWishlist(pd_id);
      else {
        await deleteItemWishlist(pd_id);
      }
    } else {
      navigate("/login");
    }
    setWish(!wish);
  };
  return (
    <>
      {/* 디자인이 조금 달라서 혹시나 몰라서 주석처리로 저장
    <WishButton onClick={wishClick}>
            <img
              src={whichHeart()}
              alt="wish"
              style={{ width: "1rem", objectFit: "contain", margin: "0.2rem" }}
            ></img>
          </WishButton> */}
      {detail ? (
        <WishlistButton onClick={wishlistClicked}>
          <img src={whichHeart()} alt="wish" width="30px"></img>
        </WishlistButton>
      ) : (
        <IconImage
          src={whichHeart()}
          alt="favorite"
          onClick={wishlistClicked}
        />
      )}
    </>
  );
};

export default WishlistClick;

const WishlistButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-center;
  align-items: center;
  // background-color: yellow;
`;

const IconImage = styled.img`
  height: 24px;
  object-fit: contain;
`;
