import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const postLogin = async (code)=>{
  try{
    const response = await axios.post(`${baseURL}/accounts/google/callback/`, {code});
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

export const getUserName = () => {
  const url = `${baseURL}/accounts/google/username/`;
  const response = axios.get(url, {
    headers: {
      Authorization : `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response);
  return response;
}