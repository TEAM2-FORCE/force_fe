import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const getAllItems = () => {
  const url = `${baseURL}/products/`;
  return axios.get(url); //json 파일 가져오는 것
};

export const getAllItemsInCategory = ({ cg_id }) => {
  const url = `${baseURL}/products/category/:${cg_id}/`;
  return axios.get(url);
};

export const getPriceLowToHigh = ({ cg_id }) => {
  const url = `${baseURL}/products/category/:${cg_id}/?sort=price/`;
  return axios.get(url);
};

export const getPriceHighToLow = ({ cg_id }) => {
  const url = `${baseURL}/products/category/:${cg_id}/?sort=-price/`;
  return axios.get(url);
};

export const getMostWishListed = ({ cg_id }) => {
  const url = `${baseURL}/products/category/:${cg_id}/`;
  return axios.get(url);
};

export const getItemDetail = ({ pd_id }) => {
  const url = `${baseURL}/products/:${pd_id}/`;
  return axios.get(url);
};
