import axios from "axios";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const getAllItemsInCategory = (cg_id) => {
  if (cg_id === 0) {
    const url = `${baseURL}/products/`;
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/`;
    return axios.get(url);
  }
};

export const getPriceLowToHigh = (cg_id) => {
  if (cg_id === 0) {
    const url = `${baseURL}/products/?sort=price/`;
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/?sort=price/`;
    return axios.get(url);
  }
};

export const getPriceHighToLow = (cg_id) => {
  if (cg_id === 0) {
    const url = `${baseURL}/products/?sort=-price/`;
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/?sort=-price/`;
    return axios.get(url);
  }
};

export const getMostWishListed = (cg_id) => {
  if (cg_id === 0) {
    const url = `${baseURL}/products/`;
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/`;
    return axios.get(url);
  }
};

export const getABC = (cg_id) => {
  if (cg_id === 0) {
    const url = `${baseURL}/products/?sort=name/`;
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/?sort=name/`;
    return axios.get(url);
  }
};

export const getItemDetail = (pd_id) => {
  const url = `${baseURL}/products/${pd_id}/`;
  return axios.get(url);
};

export const postItemWishlist = (pd_id) => {
  //상품 위시
  const url = `${baseURL}/products/${pd_id}/bm`;
  return axios.post(url);
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const deleteItemWishlist = (pd_id) => {
  //상품 위시 삭제
  const url = `${baseURL}/products/${pd_id}/bm`;
  return axios.delete(url);
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const getWishlistItems = () => {
  //이 url 아님 !!! 이거 고쳐야 함
  const url = `${baseURL}/products/bm/`;
  return axios.get(url);
};

export const getItemSearch = (text) => {
  //검색한 텍스트가 들어간 상품 조회
  const url = `${baseURL}/products/search/?search=${text}`;
  return axios.get(url);
};
