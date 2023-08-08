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
width: 100%;
max-height: 100%;
flex-wrap: wrap;
overflow-y: scroll;
`
