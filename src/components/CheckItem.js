import React, { useState } from 'react'
import { styled } from 'styled-components';
import fullHeart from '../img/fullHeart.png'

const CheckItem = () => {
  const [check, setCheck] = useState(false);
  const [wish, setWish] = useState(true);

  const changeCheck = () => {
    setCheck(!check);
  }

  const buttonColor = () => {
    if(check)return 'black';
    else return 'white';
  }

  return (
    <Item>
      <Button onClick={changeCheck} bgcolor={buttonColor()}></Button>
      <Text>checkContent</Text>
      <Right>
      {wish && <Image src={fullHeart} alt="wishList"></Image>}
      {/* HI */}
      </Right>
    </Item>
  )
}

export default CheckItem;

const Item = styled.div`
display: flex;
margin: 7px 5px 5px 15px;
align-items: center;

`

const Button = styled.button`
margin-right: 5px;
background-color: ${(props)=>props.bgcolor};
height: 15px;
width: 15px;
border-radius: 3px;
`

const Image = styled.img`
  width: 10px;
  height: 10px;
  object-fit: cover;
`;

const Text = styled.div`
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Right = styled.div`
margin-left: 5px;
`