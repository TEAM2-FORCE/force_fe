import React from 'react'
import { styled } from 'styled-components';
import BookmarkIngredient from './BookmarkIngredient';

const BookmarkDataSection = () => {
  return (
    <Cards>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>
        <BookmarkIngredient/>      
    </Cards>
  )
}

export default BookmarkDataSection;

const Cards = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 800px;
max-height: 800px;
flex-wrap: wrap;
overflow-y: scroll;
`
