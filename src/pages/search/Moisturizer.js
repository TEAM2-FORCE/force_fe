import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/common";
import {
  Section
} from "../../components/layout/Layout";

import arrowLeft from "../../img/arrowLeft.png"
import arrowDown from "../../img/arrowDown.png"
import CheckItemList from "../../components/CheckItemList";

import ItemDataSection from "../../components/ItemDataSection";
import Nav from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";

const Moisturizer = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const sortClick = () => {
    setOpen(!open);
    setVisible(!visible);
  }
  const whichArrow = () =>{
    if(!open)return arrowLeft;
    else return arrowDown;
  }
  const OKButtonClicked = () => {

  }
  const CleanButtonClicked = () => {

  }

  //sort버튼별
  const mostWishlistedSort = () => {
    console.log("1");
  }
  const priceLowToHighSort = () => {
    console.log("2");
  }
  const priceHighToLow = () => {
    console.log("3");
  }
  const abcSort = () => {
    console.log("4");
  }

  return (
    <Wrapper>
      <Nav></Nav>

      <Top>
          <Left>Moisturizer</Left>

          <Right onClick = {sortClick}>
              <Text>
                Sort By
              </Text>
              <IconStyled src={whichArrow()} alt="Icon"></IconStyled>
              {visible && 
              <SortBar>
                <SortButton onClick={mostWishlistedSort}>Most Wishlisted</SortButton>
                <SortButton onClick={priceLowToHighSort}>Price Low to High</SortButton>
                <SortButton onClick={priceHighToLow}>Price High to Low</SortButton>
                <SortButton onClick={abcSort}>ABC</SortButton>
              </SortBar>
              }
              
            </Right>
        </Top>
        
      <Section>
        <Center>
          <FilterLists> 
            <Filter>
              <Text>Type</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Filter>
              <Text>Main Functions</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Filter>
              <Text>Include</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Filter>
              <Text>Exclude</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Filter>
              <Text>Vegan Label</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Decision>
              <ClearButton onClick={CleanButtonClicked}>Clear All</ClearButton>
              <OKButton onClick={OKButtonClicked}>OK</OKButton>
            </Decision>
          </FilterLists>

          <Contents>
            <ItemDataSection></ItemDataSection>
          </Contents>
        
        </Center>

      </Section>
      <Footer>
      </Footer>
    </Wrapper>
  );
};

export default Moisturizer;

const Top = styled.div`
top: 0%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
float: top;
margin-top: 2%;
margin-bottom: 1%;
`
const Left = styled.div`
float: left;
font-family: Pretendard;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 5%;
`
const Right = styled.button`
float: right;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-right: 5%;
border: none;
background-color: white;
cursor: pointer;
display: flex;
align-items: center;

position: relative;
`
const Center = styled.div`
display: flex;
width: 90%;
height: 100%;
`
const FilterLists = styled.div`
float: left;
width: 17%;
height: 100%;
margin-right: 0.5%;
`
const Filter = styled.div`
border-bottom: green solid 2px;
margin-bottom: 15px;
`
const Text = styled.div`
color: var(--dark-gray, var(--dark-gray, #414241));
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 10px 10px 10px 0px;
`
const IconStyled = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-left: 8px;
padding: 0;
`
const Decision = styled.div`
top: 0%;
width: 100%;
display: flex;
justify-content: space-between;
`
const ClearButton = styled.button`
color: var(--light-grey, #919392);
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: white;
border: none;
`

const OKButton = styled.button`
border-radius: 0.25rem;
border: 1px solid var(--dark-gray, #414241);
display: flex;
padding: 0.25rem 0.5rem;
align-items: flex-start;
gap: 0.25rem;
background-color: white;

font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Contents = styled.div`
width: 83%;
height: 100%;
margin-top: 20px;
`

const SortBar = styled.div`
position: absolute;
justify-content: center;
align-items: center;
top: 100%;
right: 0%;
width: 13rem;
height: 13rem;
`

const SortButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 25%;
width: 100%;
border: none;

background-color: white;
border-bottom: 1px solid black;

font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`