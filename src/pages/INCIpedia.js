import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { SearchBar, SearchButton, Section } from "../components/layout/Layout";
import searchIcon from "../img/Nav/searchIcon.png";
import IngredientDataSection from "../components/ingredients/IngredientDataSection";
import { getAllIngredients, getFilteredIngredients } from "../apis/Ingredient";
import { getIngredientSearch } from "../apis/Ingredient";
import onImg from "../img/Common/on.png";
import offImg from "../img/Common/off.png";

const INCIpedia = () => {
  const [ingredientData, setIngredientData] = useState([]);
  const [on, setOn] = useState(false);
  const [filteredIngredientData, setFilteredIngredientData] = useState([]);
  const alphabets = new Array(26)
    .fill()
    .map((_, idx) => String.fromCharCode(65 + idx));

  const changeCheck = async () => {
    if (!on) {
      try {
        const response = await getFilteredIngredients();
        console.log(response);
        setFilteredIngredientData(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    }
    if (on) {
      try {
        const response = await getAllIngredients();
        console.log(response);
        setFilteredIngredientData(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    }
    setOn(!on);
  };
  const onOff = () => {
    if (on) return onImg;
    else return offImg;
  };
  const alphabetClicked = (alphabet) => {
    const wordsData = ingredientData.filter((ingredient) =>
      ingredient.igd_name.toUpperCase().startsWith(alphabet)
    );
    setFilteredIngredientData(wordsData);
  };

  function startsWithNumber(word) {
    const firstCharacter = word.charAt(0);
    return !isNaN(parseInt(firstCharacter, 10));
  }

  const numberClicked = () => {
    const wordsData = ingredientData.filter((ingredient) =>
      startsWithNumber(ingredient.igd_name)
    );
    setFilteredIngredientData(wordsData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllIngredients();
        console.log(response);
        setIngredientData(response.data);
        setFilteredIngredientData(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    };
    fetchData();
  }, []);

  const [userInput, setUserInput] = useState("");

  const getInputValue = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const inputRef = useRef();

  const searchClick = async () => {
    // navigate(`/ingredients?search=${userInput}`);
    const response = await getIngredientSearch(userInput);
    console.log(response);
    setIngredientData(response.data);
    inputRef.current.value = "";
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      searchClick();
    }
  };

  return (
    <Wrapper>
      <Nav></Nav>

      <Top>
        <Left>INCIpedia</Left>
      </Top>

      <Section>
        <Center>
          <FilterLists>
            <Text style={{ marginBottom: "5px" }}>Search By Name</Text>
            <Search>
              <SearchBar>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search Ingredient"
                  style={{
                    border: "none",
                    height: "1.2rem",
                    outline: "none",
                    width: "100%",
                  }}
                  onChange={getInputValue}
                  onKeyDown={activeEnter}
                ></input>
                <SearchButton src={searchIcon} onClick={searchClick} />
              </SearchBar>
            </Search>
            <Filter style={{ paddingBottom: "5px" }}>
              <Text style={{ marginTop: "10px", marginBottom: "8px" }}>
                Cautious Ingredients Only
              </Text>
              <Item>
                <Button onClick={changeCheck}>
                  <img src={onOff()} alt="checkbox"></img>
                </Button>
              </Item>
            </Filter>
            <Filter>
              <Text>Go To...</Text>
              <Alphabets>
                <Alp onClick={numberClicked}>#</Alp>
                {alphabets.map((alphabet) => (
                  <Alp onClick={() => alphabetClicked(alphabet)}>
                    {alphabet}
                  </Alp>
                ))}
                <Alp
                  onClick={() => {
                    setFilteredIngredientData(ingredientData);
                  }}
                >
                  All
                </Alp>
              </Alphabets>
            </Filter>
          </FilterLists>

          <Contents>
            <IngredientDataSection
              ingredientData={filteredIngredientData}
            ></IngredientDataSection>
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
  margin-bottom: 40px;
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
  margin-top: 0;
  border-bottom: green solid 2px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  color: #000;
  text-align: justify;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
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
  margin: 8px 0;
`;
const Alp = styled.div`
  width: 10%;
  cursor: pointer;
  font-family: Pretendard;
`;
const Item = styled.div`
  display: flex;
  margin: 7px 8px 8px 4px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  width: 13px;
  height: 13px;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 1rem;
`;
