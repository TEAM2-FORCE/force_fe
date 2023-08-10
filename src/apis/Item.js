import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const getAllItems = () => {
  const url = `${baseURL}/products/`;
  return axios.get(url); //json 파일 가져오는 것
};

export const getAllItemsInCategory = () => {
  const url = `${baseURL}/products/category/:cg_id/`;
  return axios.get(url);
};

export const getPriceLowToHigh = () => {
  const url = `${baseURL}/products/category/:cg_id/?sort=price/`;
  return axios.get(url);
};

export const getPriceHighToLow = () => {
  const url = `${baseURL}/products/category/:cg_id/?sort=-price/`;
  return axios.get(url);
};

export const getMostWishListed = () => {
  const url = `${baseURL}/products/category/:cg_id/`;
  return axios.get(url);
};

export const getItemDetail = () => {
  const url = `${baseURL}/products/:pd_id/`;
  return axios.get(url);
};
