import axios from "axios";

export const baseURL = "https://vebeserver.o-r.kr";

export const postLogin = async (code) => {
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
  try {
    const response = await axios.post(
      `${baseURL}/accounts/google/login/`,
      {},{ withCredentials: true }
    );
    console.log(response);
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
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response);
  return response;
};
