import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000";

export const getAllIngredients = () => {
  //모든 성분 조회
  const url = `${baseURL}/ingredients/list`;
  return axios.get(url);
};

export const getIngredientDetail = (igd_id) => {
  //상세 성분 조회
  const url = `${baseURL}/ingredients/${igd_id}`;
  return axios.get(url);
};

export const getIngredientSearch = ({ text }) => {
  //검색한 텍스트가 들어간 성분 조회
  const url = `${baseURL}/ingredients/?search=${text}`;
  return axios.get(url);
};

export const postIngredientBookmark = (igd_id) => {
  //성분 북마크
  const url = `${baseURL}/ingredients/${igd_id}/bm`;
  return axios.post(url);
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const deleteIngredientBookmark = ({ igd_id }) => {
  //성분 북마크 삭제
  const url = `${baseURL}/ingredients/${igd_id}/bm`;
  return axios.delete(url);
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const getBookmarkIngredients = ()=>{
  const url = `${baseURL}/ingredients/bm/`;
  return axios.get(url);
}