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
// background-color: green;
display: flex;
width: 100%;
height: 100%;
flex-wrap: wrap;
overflow-y: scroll;
`
