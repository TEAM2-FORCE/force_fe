import React from "react";
import { styled } from "styled-components";
import google from "../img/LogIn/google.png";
import mainLogo from "../img/Logo/MainLogo.png";
import subLogo from "../img/Logo/SubLogo.png";
import loginText from "../img/LogIn/loginText.png";
const Login = () => {
  const onClick = () => {
    console.log(1);
  };

  return (
    <LoginWindow>
      <Container>
        <Left>
          <Text color="white" weight="400">
            VEBE is a team from LIKELION, year of 11th at <br />
            Chung-Ang University, Korea.
            <br />
            Our aim is to blah blah blah blah blah <br />
            VEBE is a team from LIKELION, year of 11th at <br />
            Chung-Ang University, Korea.
            <br />
            Our aim is to blah blah blah blah blah
          </Text>
        </Left>
        <Right>
          <Middle>
            <Logo src={mainLogo} alt="logo1" width={"100%"}></Logo>
            <Logo src={subLogo} alt="logo2" width={"50%"}></Logo>
          </Middle>
          <Bottom>
            <Button onClick={onClick}>
              <IconStyled src={google} alt="Icon"></IconStyled>
              <ButtonText>Log in with Google</ButtonText>
            </Button>
            <Text color="rgba(145, 147, 146, 1)" weight="700">
              Use without Log in
            </Text>
          </Bottom>
        </Right>
      </Container>
      <DesignText src={loginText} alt="designText"></DesignText>
    </LoginWindow>
  );
};

export default Login;

const LoginWindow = styled.div`
  display: flex;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 36.625rem;
  border-radius: 2.5rem 0rem 0rem 2.5rem;
  border-bottom: 4px solid rgba(60, 144, 117, 0.3);
  background-color: rgba(60, 144, 117, 0.7);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

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
  background-color: rgba(255, 255, 255, 0.7);
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${(props) => props.color};
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 40%;
`;
const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

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
`;

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
  background: var(--white, #fdfffd);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const ButtonText = styled.div`
  color: var(--dark, #3c9075);
  font-family: Pretendard;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const IconStyled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 8px;
  padding: 0;
`;

const DesignText = styled.img`
  position: absolute;
  display: inline-block;
  bottom: 0%;
  z-index: -1;
  width: 100%;
  height: 60%;
`;
