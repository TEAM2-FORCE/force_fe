import React, { useState } from "react";
import arrowLeft from "../../img/Items/arrowLeft.png";
import arrowDown from "../../img/Items/arrowDown.png";
import { styled } from "styled-components";

const SearchTop = ({ which }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [whichSortBy, setWhichSortBy] = useState("Most Wishlisted");
  const sortClick = () => {
    setOpen(!open);
    setVisible(!visible);
  };
  const whichArrow = () => {
    if (!open) return arrowLeft;
    else return arrowDown;
  };

  //sort버튼별
  const mostWishlistedSort = () => {
    setWhichSortBy("Most Wishlisted");
  };
  const abcSort = () => {
    setWhichSortBy("ABC");
  };
  return (
    <>
      <Left>{which}</Left>

      <Right onClick={sortClick}>
        <Text>{whichSortBy}</Text>
        <IconStyled src={whichArrow()} alt="Icon"></IconStyled>
        {visible && (
          <SortBar>
            <SortButton
              onClick={mostWishlistedSort}
              data-isselected={whichSortBy === "Most Wishlisted"}
            >
              Most Wishlisted
            </SortButton>
            <SortButton
              onClick={abcSort}
              data-isselected={whichSortBy === "ABC"}
            >
              ABC
            </SortButton>
          </SortBar>
        )}
      </Right>
    </>
  );
};

export default SearchTop;

const Left = styled.div`
  float: left;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5%;
`;
const Right = styled.button`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 13rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-right: 5%;
  border: none;
  background-color: white;
  cursor: pointer;

  position: relative;
  border-bottom: 1px solid black;
`;

const SortBar = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 100%;
  right: 0%;
  width: 13rem;
  height: 13rem;
  z-index: 1;
`;
const SortButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  border: none;

  background-color: ${(props) => (props["data-isselected"] ? "grey" : "white")};
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 10px 10px 0px;
  width: 100%;
`;
const IconStyled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 8px;
  padding: 0;
`;