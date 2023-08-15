import React from "react";
import CheckItem from "./CheckItem";
import { styled } from "styled-components";

const CheckItemList = ({ingredients, check, setCheck}) => {
  return (
    <CheckItems>
      {ingredients.map((ingredient)=>(
        <CheckItem 
        key={ingredient.igd_key} 
        ingredient={ingredient} 
        check={check} 
        setCheck={setCheck}/>
      ))}
    </CheckItems>
  );
};

export default CheckItemList;

const CheckItems = styled.div`
  height: 150px;
  overflow: auto; //박스 넘어가면 스크롤바
  padding-bottom: 8px;
`;
