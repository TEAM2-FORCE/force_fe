import React from "react";
// import { useEffect, useState } from "react";
import { styled } from "styled-components";
import CheckItemList from "./CheckItemList";
// import { getAllIngredients } from "../../apis/Ingredient";

const Filter = ({ text, check, setCheck }) => {
  ////백엔드에서 api 불러올 수 있으면 ingredients 이걸로 바꾸기!
  // const [ingredients, setIngredients] = useState([]);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       //이 함수 아님 !!! 추후 수정
  //       if(text ==="Include"){
  //         const response = await getAllIngredients();
  //         setIngredients(response.data);
  //       }
  //       else if(text === "Exclude"){
  //         const response = await getAllIngredients();
  //         setIngredients(response.data);
  //       }
  //       else if(text === "Vegan Label"){
  //         const response = await getAllIngredients();
  //         setIngredients(response.data);
  //       }
  //     }catch(error){
  //       console.error("필터링 성분 불러오기 실패", error);
  //     }
  //   };
  //   fetchData();
  // })

  const ingredients = ["ingredient1", "ingredient2", "ingredient3"];
  return (
    <Container>
      <Text>{text}</Text>
      <CheckItemList ingredients = {ingredients} check = {check}setCheck={setCheck}/>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
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
