import React from 'react'
import CheckItem from './CheckItem'
import { styled } from 'styled-components';

const CheckItemList = () => {
  return (
    <CheckItems>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    <CheckItem></CheckItem>
    </CheckItems>
  )
}

export default CheckItemList;

const CheckItems = styled.div`
height: 150px;
overflow: auto; //박스 넘어가면 스크롤바
`