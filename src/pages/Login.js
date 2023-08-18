import React from "react";
import { styled } from "styled-components";
import mainLogo from "../img/Logo/MainLogo.png";
import subLogo from "../img/Logo/SubLogo.png";
import loginText from "../img/LogIn/loginText.png";
import google from "../img/LogIn/google.png";
import { useNavigate } from "react-router";
import { postLogin } from "../apis/Googlelogin";

const Login = () => {
  const navigate = useNavigate();
  const googleLogin = async () => {
    const response = await postLogin();
    console.log(response);
    
    
    // window.location.href ="https://accounts.google.com/o/oauth2/auth?" +
    // `client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&`+
    // `redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&`+
    // "response_type=code&"+
    // "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  }
  const gotoHome = () => {
    navigate('/');
  }

  return (
    <LoginWindow>
      <Container>
        <Left>
          <Text>
          VEBE is a Vegan Beauty Service.<br />
          We take the first step to enhance you experience<br />
          on Vegan Beauty Products.<br />
          Make choices that best fit your values<br />
          through informations we provide.
          </Text>
        </Left>
        <Right>
          <Middle>
            <Logo src={mainLogo} alt="logo1" width={"100%"}></Logo>
            <Logo src={subLogo} alt="logo2" width={"50%"}></Logo>
          </Middle>
          <Bottom>
            {/* <GoogleLogin></GoogleLogin> */}
            <Button onClick={googleLogin}>
            <IconStyled src={google} alt="Icon"></IconStyled>
            <ButtonText>Log in with Google</ButtonText>
            </Button>
            <BottomText onClick={gotoHome}>
              Use without Log in
            </BottomText>
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
color: var(--white, #FDFFFD);
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
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

const BottomText = styled.div`
color: var(--light-grey, #919392);
text-align: center;
/* small em */
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`