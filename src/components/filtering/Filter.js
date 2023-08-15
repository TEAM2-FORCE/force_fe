import React from "react";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import CheckItemList from "./CheckItemList";
import { getBookmarkIngredients } from "../../apis/Ingredient";
import includeIngredients from "../../Json/includeIngredients.json"
import excludeIngredientsData from "../../Json/excludeIngredients.json"
import veganLabelData from "../../Json/veganLabelIngredients.json"

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
  const [ingredients, setIngredients] = useState([]);
  

  // const [bookmark, setBookmark] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        if(text === "Include")await setIngredients(includeIngredients);
        else if(text === "Exclude")await setIngredients(excludeIngredientsData);
        else if(text === "Vegan Label")await setIngredients(veganLabelData);

        //// 북마크인거 true로 바꾸기
        const bookmarkIngredients = await getBookmarkIngredients();
        // console.log(bookmarkIngredients);

        // const updatedIngredients = includeIngredients.map((ingredient)=>{
        // const isBookmarked = bookmarkIngredients.some((bookmark)=>bookmark.igd_name === ingredient.igd_name);
          
        // return {
        //   ...ingredient,
        //   igd_isBookmarked: isBookmarked,
        // }
        // });

        ingredients.forEach(ingredient => {
          const ingredientNames = bookmarkIngredients.map(bookmark => bookmark.igd_name);
          ingredient.isBookmarked = !ingredientNames.includes(ingredient.igd_name);
        });
      }catch(error){
        console.error("북마크 성분 불러오기 실패", error);
      }
    };
    fetchData();
  },);
  
  return (
    <Container>
      <Text>{text}</Text>
      <CheckItemList ingredients = {ingredients} check = {check} setCheck={setCheck}/>
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
