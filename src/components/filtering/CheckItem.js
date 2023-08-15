import React, { useState } from "react";
import { styled } from "styled-components";
import fullStar from "../../img/Ingredients/fullStar.png";
import checked from "../../img/Common/checked.png";
import unchecked from "../../img/Common/unchecked.png";

const CheckItem = ({ingredient, check, setCheck}) => {
  const [boxCheck, setBoxCheck] = useState(false); // 박스체크
    const wish = ingredient.igd_isBookmarked;

  const changeCheck = () => {
    if(!boxCheck){
      // console.log("체크");
      setCheck([...check, ingredient.igd_name]);
    }
    if(boxCheck){
      // console.log("체크 해제");
      setCheck(check.filter((item) => item !== ingredient.igd_name));

    }
    setBoxCheck(!boxCheck);
  };
  const whichCheckbox = () => {
    if (boxCheck) return checked;
    else return unchecked;
  };

  return (
    <Item>
      <Button onClick={changeCheck}>
        <img src={whichCheckbox()} alt="checkbox"></img>
      </Button>
      <Text>{ingredient.igd_name}</Text>
      <Right>
        {wish && <Image src={fullStar} alt="wishList"></Image>}
      </Right>
    </Item>
  );
};

export default CheckItem;

const Item = styled.div`
  display: flex;
  margin: 7px 5px 5px 15px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  width: 13px;
  height: 13px;
  margin-right: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 10px;
  height: 10px;
  object-fit: cover;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Right = styled.div`
  margin-left: 5px;
`;
