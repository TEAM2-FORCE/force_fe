import React from 'react'
import { styled } from 'styled-components';
import IngredientCard from './IngredientCard';
// import { getMostWishListed } from '../apis/Item';

const IngredientDataSection = ({cg_id}) => {
  // const data = getMostWishListed(cg_id);
  // const print = () => {
  //   console.log(data);
  // }
  return (
    <Cards>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>
        <IngredientCard isMypage={false}/>      
        
    </Cards>
  )
}

export default IngredientDataSection;

const Cards = styled.div`
display: flex;
width: 100%;
min-height: 800px;
max-height: 800px;
flex-wrap: wrap;
overflow-y: scroll;
`
