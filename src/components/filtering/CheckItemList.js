import React from "react";
import CheckItem from "./CheckItem";
import { styled } from "styled-components";

const CheckItemList = ({ingredients, check, setCheck, productData, clean, setClean, cg_id}) => {
  return (
    <CheckItems>
      {ingredients.map((ingredient)=>(
        <CheckItem 
        key={ingredient.igd_key} 
        ingredient={ingredient} 
        check={check} 
        setCheck={setCheck}
        productData={productData}
        clean={clean}
        setClean={setClean}
        cg_id={cg_id}
        />
      ))}
    </CheckItems>
  );
};

export default CheckItemList;

const CheckItems = styled.div`
  height: 150px;
  overflow: auto; //박스 넘어가면 스크롤바
  margin-bottom: 8px;
`;
