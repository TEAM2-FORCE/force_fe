import axios from "axios";
import { isAuthenticated } from "./Googlelogin";

export const baseURL = "http://vebeserver.kro.kr:8000/";

export const getAllItemsInCategory = (cg_id) => {
  if (cg_id === 0) {
    console.log("모든상품");
    const url = `${baseURL}/products/`;
    if (isAuthenticated()) {
      const response = axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response;
    }
    return axios.get(url);
  } else {
    const url = `${baseURL}/products/category/${cg_id}/`;
    if (isAuthenticated()) {
      const response = axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response;
    }
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
  //상품 위시 추가
  const url = `${baseURL}/products/${pd_id}/wish/`;
  axios
    .post(
      url,
      {},
      {
        // 데이터 부분을 빈 객체로 설정
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log("응답:", response.data);
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const deleteItemWishlist = (pd_id) => {
  //상품 위시 삭제
  console.log("삭제" + pd_id);
  const url = `${baseURL}/products/${pd_id}/wish/`;
  axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log("응답:", response.data);
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}; //권한 필요, 로그인할 때 발급된 액세스 토큰

export const getWishlistItems = () => {
  //상품 위시리스트 목록 불러오기
  const url = `${baseURL}/products/wish/`;
  const response = axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getItemSearch = (text) => {
  //검색한 텍스트가 들어간 상품 조회
  const url = `${baseURL}/products/search/?search=${text}`;
  return axios.get(url);
};

export const getFilteredData = (include, exclude, veganLabel) => {
  const includeStr = include.join(",");
  const excludeStr = exclude.join(",");
  const veganLabelStr = veganLabel.join(",");

  let url = `${baseURL}/products/filter/`;

  const queryParams = [];

  if (includeStr) queryParams.push(`include_ingredients=${includeStr}`);
  if (excludeStr) queryParams.push(`exclude_ingredients=${excludeStr}`);
  if (veganLabelStr) queryParams.push(`vg_company=${veganLabelStr}`);
  if (queryParams.length > 0) url = `${url}?${queryParams.join("&")}`;

  // const url = `${baseURL}/products/filter/?include_ingredients=${includeStr}&exclude_ingredients=${excludeStr}&vg_company=${veganLabelStr}`;
  console.log(url);
  return axios.get(url);
};

export const getMarket = (pd_id) => {
  const url = `${baseURL}/products/${pd_id}/market/`;
  return axios.get(url);
};

export const getVeganCertification = (pd_id) => {
  const url = `${baseURL}/products/${pd_id}/vegan/`;
  return axios.get(url);
};
