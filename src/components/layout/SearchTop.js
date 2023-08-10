import React, { useState } from "react";
import arrowLeft from "../../img/Items/arrowLeft.png";
import arrowDown from "../../img/Items/arrowDown.png";
import { styled } from "styled-components";
import {
  getABC,
  getMostWishListed,
  getPriceHighToLow,
  getPriceLowToHigh,
} from "../../apis/Item";

const SearchTop = ({ cg_id, which, setProductData }) => {
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
  const mostWishlistedSort = async () => {
    setWhichSortBy("Most Wishlisted");
    const response = await getMostWishListed(cg_id);
    setProductData(response.data);
  };
  const priceLowToHigh = async () => {
    setWhichSortBy("Price Low To High");
    const response = await getPriceLowToHigh(cg_id);
    setProductData(response.data);
  };
  const priceHighToLow = async () => {
    setWhichSortBy("Price High To Low");
    const response = await getPriceHighToLow(cg_id);
    console.log(response);
    setProductData(response.data);
  };
  const abcSort = async () => {
    setWhichSortBy("ABC");
    const response = await getABC(cg_id);
    setProductData(response.data);
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
              onClick={priceLowToHigh}
              data-isselected={whichSortBy === "Price Low To High"}
            >
              Price Low To High
            </SortButton>
            <SortButton
              onClick={priceHighToLow}
              data-isselected={whichSortBy === "Price High To Low"}
            >
              Price High To Low
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
  background-color: white;
`;
const SortButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  border: none;

  // background-color: ${(props) =>
    props["data-isselected"] ? "rgba(46, 190, 143)" : "white"};
  // opacity:${(props) => (props["data-isselected"] ? "1" : "1")};
  background-color: white;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background-color: rgba(46, 190, 143, 0.4);
  }
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 14px;
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
