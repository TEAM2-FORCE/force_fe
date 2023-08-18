import axios from "axios";

export const baseURL = "https://vebeserver.o-r.kr";

export const postLogin = async () => {
  // try {
  //   const response = await axios.post(
  //     `${baseURL}/accounts/google/callback`,
  //     { code },
  //     { withCredentials: true }
  //   );
  //   return response.data;
  // } catch (error) {
  //   console.error("postLogin error", error);
  //   throw error;
  // }
  console.log("버튼클릭");
  try {
    const token = await axios.get(
      `${baseURL}/accounts/google/login/`);
    console.log("토큰");
    console.log(token);
    localStorage.setItem("token", token.data.access_token);
    //   navigate('/');
    // if(typeof token == 'undefined'){
    //   navigate('/relogin');
    // }
    // else{
      

    // }
    
    return token;
  }catch(error){
    console.error("postLogin error", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "";
};

export const getUserName = () => {
  const url = `${baseURL}/accounts/google/username/`;
  const response = axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response);
  return response;
};
