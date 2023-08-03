import React from 'react'
import { styled } from 'styled-components'
import google from '../img/google.png'
const Login = () => {
  const onClick = () => {
    console.log(1);
  }

  return (
    <Container>
      <Left>
        <Text>
          Kisse is a team from LIKELION, year of 11th at<br/>
          Chung-Ang University, Korea.<br/>
          Our aim is to blah blah
        </Text>
      </Left>
      <Right>
        <Top>
          <Text>Hello! Welcome Back :)</Text>
        </Top>
        <Middle>
          <Text>LOGO</Text>
        </Middle>
        <Bottom>
          <Button onClick={onClick}>
            <IconStyled src={google} alt="Icon"></IconStyled>
            <ButtonText>
            Log in with Google
            </ButtonText>
          </Button>
          <Text>
            Use without Log in
          </Text>
        </Bottom>
      </Right>
    </Container>
  )
}

export default Login

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 100%;
`

const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35%;
height: 36.625rem;
border-radius: 2.5rem 0rem 0rem 2.5rem;
border-bottom: 4px solid rgba(60, 144, 117, 0.3); 
background-color: white;
`

const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35%;
height: 36.625rem;
border-radius: 0rem 2.5rem 2.5rem 0rem;
border-right: 4px solid rgba(60, 144, 117, 0.3); 
flex-direction: column;
background-color: rgba(168, 255, 221, 0.3)
`

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-family: Pretendard;
`

const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10%;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
color: var(--dark, #3C9075);
`

const Middle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40%;
`

const Bottom = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 30%;

color: var(--light-grey, #919392);
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Button = styled.button`
display: flex;
justify-content: left;
align-items: center;
background-color: white;
width: 70%;
height: 3.75rem;
gap: 0.625rem;
flex-shrink: 0;
cursor: pointer;
margin-bottom: 10px;

border: none;
border-radius: 0.625rem;
background: var(--white, #FDFFFD);
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`

const ButtonText = styled.div`
color: var(--dark, #3C9075);
font-family: Pretendard;
font-size: 1.1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
`

const IconStyled = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-left: 8px;
padding: 0;
`