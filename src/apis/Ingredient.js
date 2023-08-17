import axios from "axios";
import { isAuthenticated } from "./Googlelogin";

export const baseURL = "https://vebeserver.o-r.kr";

export const getAllIngredients = () => {
  //모든 성분 조회
  const url = `${baseURL}/ingredients/list/`;
  if(isAuthenticated()){
    const response = axios.get(url, {
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  }
  return axios.get(url);
};

export const getIngredientDetail = (igd_id) => {
  //상세 성분 조회
  const url = `${baseURL}/ingredients/${igd_id}/`;
  return axios.get(url);
};

export const getIngredientSearch = (text) => {
  //검색한 텍스트가 들어간 성분 조회
  const url = `${baseURL}/ingredients/?search=${text}`;
  return axios.get(url);
};

export const postIngredientBookmark = (igd_id) => {
  //성분 북마크 표시
  const url = `${baseURL}/ingredients/${igd_id}/bm/`;
  axios.post(url, {}, { // 데이터 부분을 빈 객체로 설정
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then(response => {
    console.log('응답:', response.data);
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const deleteIngredientBookmark = (igd_id) => {
  //성분 북마크 삭제
  const url = `${baseURL}/ingredients/${igd_id}/bm/`;
  axios.delete(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const getBookmarkIngredients = async () => {
  //북마크 성분 불러오기
  const url = `${baseURL}/ingredients/bm/`;
  const response = axios.get(url, {
    headers: {
      Authorization : `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
}

export const getFilteredIngredients = () => {
  const url = `${baseURL}/ingredients/filter/?igd_caution=false/`;
  return axios.get(url);
}