import React from 'react'
import ItemCard from './ItemCard'
import { styled } from 'styled-components';

const ItemDataSection = () => {
  return (
    <Cards>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
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
