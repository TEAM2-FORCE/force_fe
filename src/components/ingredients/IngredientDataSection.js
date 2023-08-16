import React from "react";
import { styled } from "styled-components";
import IngredientCard from "./IngredientCard";

const IngredientDataSection = ({ ingredientData }) => {
  return (
    <Cards>
      {ingredientData &&
        ingredientData.map((ingredient) => (
          <IngredientCard igd_id={ingredient.igd_id} ingredient={ingredient} />
        ))}
    </Cards>
  );
};

export default IngredientDataSection;

const Cards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  min-height: 800px;
  max-height: 800px;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
