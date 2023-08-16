import React, { useState } from 'react'
import { styled } from 'styled-components';
import Filter from './Filter';
import { getFilteredData } from '../../apis/Item';

const FilterLists = ({cg_id, setProductData}) => {
  const [include, setInclude] = useState([]);
  const [exclude, setExclude] = useState([]);
  const [veganLabel, setVeganLabel] = useState([]);
  const OKButtonClicked = async () => {
    // //확인용
    // console.log("include: "+include);
    // console.log("exclude: "+exclude);
    // console.log("veganlabel: "+veganLabel);

    const response = await getFilteredData(include, exclude, veganLabel);
    setProductData(response.data);


  }
  const CleanButtonClicked = () => {
    //새로고침 하는 코드
    window.location.reload();
  }
  return (
    <Container>
    <Filter text="Include" check={include} setCheck={setInclude}/>
    <Filter text="Exclude" check={exclude} setCheck ={setExclude}/>
    <Filter text="Vegan Label" check={veganLabel} setCheck={setVeganLabel}/>
    <Decision>
      <ClearButton onClick={CleanButtonClicked}>Clear All</ClearButton>
      <OKButton onClick={OKButtonClicked}>Apply</OKButton>
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