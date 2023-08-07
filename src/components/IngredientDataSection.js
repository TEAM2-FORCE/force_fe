import React from 'react'
import { styled } from 'styled-components';
import IngredientCard from './IngredientCard';

const IngredientDataSection = () => {
  return (
    <Cards>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
        <IngredientCard></IngredientCard>
    </Cards>
  )
}

export default IngredientDataSection;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
overflow-y: scroll;

`
