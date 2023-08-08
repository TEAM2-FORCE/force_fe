import React from 'react'
import { styled } from 'styled-components'
import google from '../img/google.png'
import logo1 from '../img/logo1.png';
const Login = () => {
  const onClick = () => {
    console.log(1);
  }

  return (
    <Container>
      <Left>
        <Text>
        VEBE is a team from LIKELION, year of 11th at <br/>
        Chung-Ang University, Korea.<br/>
        Our aim is to blah blah blah blah blah <br/>
        VEBE is a team from LIKELION, year of 11th at <br/>
        Chung-Ang University, Korea.<br/>
        Our aim is to blah blah blah blah blah 
        </Text>
      </Left>
      <Right>
        <Top>
          <Text>Hello! Welcome Back :)</Text>
        </Top>
        <Middle>
          <img src={logo1} alt="logo1"></img>
          {/* <LogoText>VEBE</LogoText> */}
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
      <DesignText>AllAbout Vegan Beauty</DesignText>
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
// background: var(--dark, #3C9075);
// background-color: grey;
background-color: rgba(60, 144, 117, 0.7);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35%;
height: 36.625rem;
border-radius: 0rem 2.5rem 2.5rem 0rem;
border-right: 4px solid rgba(60, 144, 117); 
border-bottom: 4px solid rgba(60, 144, 117);
flex-direction: column;
`

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;

color: white;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
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
width: 30%;
height: 40%;
`
// const LogoText = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;

// color: var(--black, #010D09);
// text-align: center;
// font-family: Caveat;
// font-size: 1.5rem;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
// `

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
z-index: 2;
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

const DesignText= styled.div`
position: absolute;
display: inline-block;
bottom: 0%;
z-index: 1;
color: rgba(21, 74, 57, 0.3);
font-family: Qwitcher Grypen;
font-size: 10rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`