import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const postLogin = async (authorizationCode)=>{
  try{
    const response = await axios.post(`${baseURL}/accounts/google/login/`);
    return response.data;
  }catch(error){
    console.error("postLogin error", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "";
};