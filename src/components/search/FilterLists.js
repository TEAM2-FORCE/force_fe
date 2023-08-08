import React from 'react'
import { styled } from 'styled-components';
import Filter from './Filter';

const FilterLists = () => {
  const OKButtonClicked = () => {

  }
  const CleanButtonClicked = () => {

  }
  return (
    <Container>
    <Filter text="Type"/>
    <Filter text="Main Functions"/>
    <Filter text="Include"/>
    <Filter text="Exclude"/>
    <Filter text="Vegan Label"/>
    <Decision>
      <ClearButton onClick={CleanButtonClicked}>Clear All</ClearButton>
      <OKButton onClick={OKButtonClicked}>OK</OKButton>
    </Decision>
    </Container>
  )
}

export default FilterLists;
const Container = styled.div`
float: left;
width: 17%;
height: 100%;
margin-right: 0.5%;
`
const Decision = styled.div`
top: 0%;
width: 100%;
display: flex;
justify-content: space-between;
`
const ClearButton = styled.button`
color: var(--light-grey, #919392);
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: white;
border: none;
cursor: pointer;
`
const OKButton = styled.button`
border-radius: 0.25rem;
border: 1px solid var(--dark-gray, #414241);
display: flex;
padding: 0.25rem 0.5rem;
align-items: flex-start;
gap: 0.25rem;
background-color: white;

font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;

cursor: pointer;
`