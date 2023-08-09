import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { SearchBar, SearchButton, Section } from "../components/layout/Layout";
import CheckItemList from "../components/CheckItemList";
import searchIcon from "../img/Nav/searchIcon.png";
import IngredientDataSection from "../components/IngredientDataSection";

const INCIpedia = () => {
  const OKButtonClicked = () => {};
  const CleanButtonClicked = () => {};

  return (
    <Wrapper>
      <Nav></Nav>

      <Top>
        <Left>INCIpedia</Left>
      </Top>

      <Section>
        <Center>
          <FilterLists>
            <Search>
              <SearchBar>
                <input
                  type="text"
                  placeholder="Search Ingredient"
                  style={{
                    border: "none",
                    height: "1.2rem",
                    outline: "none",
                    width: "100%",
                  }}
                ></input>
                <SearchButton src={searchIcon} />
              </SearchBar>
            </Search>
            <Filter>
              <Text>Search By Name</Text>
              <CheckItemList></CheckItemList>
            </Filter>
            <Filter>
              <Text>Go To...</Text>
              <Alphabets>
                <Alp>A</Alp>
                <Alp>B</Alp>
                <Alp>C</Alp>
                <Alp>D</Alp>
                <Alp>E</Alp>
                <Alp>F</Alp>
                <Alp>G</Alp>
                <Alp>H</Alp>
                <Alp>I</Alp>
                <Alp>J</Alp>
                <Alp>K</Alp>
                <Alp>L</Alp>
                <Alp>M</Alp>
                <Alp>N</Alp>
                <Alp>O</Alp>
                <Alp>P</Alp>
                <Alp>Q</Alp>
                <Alp>R</Alp>
                <Alp>S</Alp>
                <Alp>T</Alp>
                <Alp>U</Alp>
                <Alp>V</Alp>
                <Alp>W</Alp>
                <Alp>X</Alp>
                <Alp>Y</Alp>
                <Alp>Z</Alp>
              </Alphabets>
            </Filter>
            <Decision>
              <ClearButton onClick={CleanButtonClicked}>Clear All</ClearButton>
              <OKButton onClick={OKButtonClicked}>OK</OKButton>
            </Decision>
          </FilterLists>

          <Contents>
            <IngredientDataSection></IngredientDataSection>
          </Contents>
        </Center>
      </Section>
      <Footer></Footer>
    </Wrapper>
  );
};

export default INCIpedia;

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
`;
const Left = styled.div`
  float: left;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5%;
`;
const Center = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
`;

const FilterLists = styled.div`
  float: left;
  width: 17%;
  height: 100%;
  margin-right: 0.5%;
  display: flex;
  flex-direction: column;
`;
const Search = styled.div`
  width: 80%;
  height: 5%;
  margin: 3%;
`;
const Filter = styled.div`
  border-bottom: green solid 2px;
  margin-bottom: 15px;
`;
const Text = styled.div`
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 10px 10px 0px;
`;
const Decision = styled.div`
  top: 0%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ClearButton = styled.button`
  color: var(--light-grey, #919392);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: white;
  border: none;
`;

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
`;
const Contents = styled.div`
  width: 83%;
  height: 100%;
  margin-top: 20px;
`;

const Alphabets = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
const Alp = styled.div`
  width: 10%;
`;
