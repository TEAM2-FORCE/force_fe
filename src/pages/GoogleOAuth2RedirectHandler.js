import { useEffect } from "react";

import queryString from "query-string";
import { useNavigate } from "react-router";
// import { postLogin } from "../apis/Googlelogin";

const GoogleOAuth2RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const googleLogin = async()=>{
      const {code} = queryString.parse(window.location.search);
      
      if(code){
        console.log(code);
        // const response = await postLogin(code);
    
        // //서버에서 받은 토콘을 저장하고 로그인 처리
        // const token = response.data.token;
        // localStorage.setItem("token", token);
        navigate('/');
      }
      else{
        console.error("인증 코드가 유효하지 않습니다.");
        navigate("/login");
      }
    };
    googleLogin();
  }, [navigate]);

  //컴포넌트가 렌더링하는 간단한 메시지 반환
  return <div>구글 로그인 중...</div>
}

export default GoogleOAuth2RedirectHandler;