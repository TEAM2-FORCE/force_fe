import React from "react";
import { styled } from "styled-components";
import loginText from "../img/LogIn/loginText.png";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();

  const googleLogin = () => {
    window.location.href ="https://accounts.google.com/o/oauth2/auth?" +
    `client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&`+
    `redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&`+
    "response_type=code&"+
    "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  }
  const unLogin = () => {
    window.localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <LoginWindow>
      <Container>
        {/* <Left> */}
          <Top>Welcome to VEBE ;)</Top>
          <Middle color="white" weight="400">
            Now you are a Member of VEBE.<br />
            Please Log in again<br />
            to start your fulfilling experience at VEBE :)<br />
          </Middle>

          <Bottom>
            <Button onClick={googleLogin}>
            <ButtonText>Start by Logging in</ButtonText>
            </Button>
            <BottomText onClick={unLogin}>
              Start without Log in
            </BottomText>
          </Bottom>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 30rem;
  border-radius: 2.5rem;
  // border-bottom: 4px solid rgba(60, 144, 117, 0.3);
  background-color: white;
  box-shadow: 5px 8px 19px 0px rgba(0, 0, 0, 0.13);
`;
const Top = styled.div`
  color: var(--dark, #3C9075);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-color: #414241;

  color: var(--dark-gray, var(--dark-gray, #414241));
  font-weight: 400;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
  margin: 2.2rem;
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

const DesignText = styled.img`
  position: absolute;
  display: inline-block;
  bottom: 0%;
  z-index: -1;
  width: 100%;
  height: 60%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 37%;
  height: 3rem;
  gap: 0.625rem;
  flex-shrink: 0;
  cursor: pointer;
  margin-bottom: 1rem;

  border: none;
  border-radius: 0.625rem;
  background: var(--white, #fdfffd);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const BottomText = styled.div`
color: var(--light-grey, #919392);
text-align: center;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`