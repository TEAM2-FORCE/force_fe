import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import CheckItemList from "./CheckItemList";
import { getBookmarkIngredients } from "../../apis/Ingredient";
import includeIngredients from "../../Json/includeIngredients.json"
import excludeIngredientsData from "../../Json/excludeIngredients.json"
import veganLabelData from "../../Json/veganLabelIngredients.json"
import { isAuthenticated } from "../../apis/Googlelogin";

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
  
  const fetchData = async()=>{
    try{
      let sourceData;
      if(text === "Include")sourceData = (includeIngredients);
      else if(text === "Exclude") sourceData = (excludeIngredientsData);
      else if(text === "Vegan Label")sourceData = (veganLabelData);
      console.log(sourceData);
      //// 북마크인거 true로 바꾸기
      if(isAuthenticated()){
        const response = await getBookmarkIngredients();
        const bookmarkIngredients = response.data;
        console.log("북마크");
        // console.log(bookmarkIngredients);        
        const ingredientNames = bookmarkIngredients.map((bookmark)=>bookmark.ingredient_contents.igd_name);
        console.log(ingredientNames);
        const newIngredients = sourceData.map((ingredient)=>{
        const isBookmarked = (ingredientNames.length > 0) ? ingredientNames.includes(ingredient.igd_name) : false;

        return {
          ...ingredient,
          igd_isBookmarked: isBookmarked,
          };
        });
        setIngredients(newIngredients);
      }
      else{
        setIngredients(sourceData);
      }
      

    }catch(error){
      console.error("북마크 성분 불러오기 실패", error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);
  
  // useEffect(()=>{
  //   const fetchData = useCallback(async () => {
  //     try{
  //       let sourceData;
  //       if(text === "Include")sourceData = (includeIngredients);
  //       else if(text === "Exclude") sourceData = (excludeIngredientsData);
  //       else if(text === "Vegan Label")sourceData = (veganLabelData);
  //       console.log(sourceData);
  //       //// 북마크인거 true로 바꾸기
  //       if(isAuthenticated()){
  //         const response = await getBookmarkIngredients();
  //         const bookmarkIngredients = response.data;
  //         console.log("북마크");
  //         console.log(bookmarkIngredients);
          
  //         const ingredientNames = bookmarkIngredients.map((bookmark)=>bookmark.igd_name);
  //         const newIngredients = sourceData.map((ingredient)=>{
  //         const isBookmarked = (ingredientNames.length > 0) ? ingredientNames.includes(ingredient.igd_name) : false;

  //         return {
  //           ...ingredient,
  //           igd_isBookmarked: isBookmarked,
  //           };
  //         });
  //         setIngredients(newIngredients);
  //       }
  //       else{
  //         setIngredients(sourceData);
  //       }
        

  //     }catch(error){
  //       console.error("북마크 성분 불러오기 실패", error);
  //     }
  //   });
  //   fetchData();
  // },[text, ingredients]);
  
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
