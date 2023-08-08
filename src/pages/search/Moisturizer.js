import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/common";
import {
  Section
} from "../../components/layout/Layout";
import CheckItemList from "../../components/CheckItemList";

import ItemDataSection from "../../components/ItemDataSection";
import Nav from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";
import SearchTop from "../../components/layout/SearchTop";

const Moisturizer = () => {
  const OKButtonClicked = () => {

  }
  const CleanButtonClicked = () => {

  }

  return (
    <Wrapper>
      <Nav></Nav>

      <Top>
        <SearchTop which="Moisturizer"></SearchTop>
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