import React from 'react'
import ItemCard from './ItemCard'
import { styled } from 'styled-components';

const ItemDataSection = ({productData}) => {
  return (
    <Cards>
      {productData && productData.map((product, i)=><ItemCard key={i} product={product}/>)}    
    </Cards>
  )
}

export default ItemDataSection;

const Cards = styled.div`
display: flex;
width: 95%;
max-height: 1200px;
flex-wrap: wrap;
overflow-y: scroll;
margin-left: 5%;
`
