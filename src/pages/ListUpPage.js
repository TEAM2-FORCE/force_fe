import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import { Section } from "../components/layout/Layout";
import ItemDataSection from "../components/ItemDataSection";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import SearchTop from "../components/layout/SearchTop";
import FilterLists from "../components/search/FilterLists";
import { getMostWishListed } from "../apis/Item";
import { useLocation } from "react-router-dom";

const ListUpPage = () => {
  const { state } = useLocation();
  const cg_id = state;
  const [productData, setProductData] = useState([]);
  const whichPage = () => {
    if (cg_id === 0) return "all";
    else if (cg_id === "1") return "Make Up";
    else if (cg_id === "2") return "Skin Care";
    else if (cg_id === "3") return "Sun Care";
    else if (cg_id === "4") return "Masks";
  };

  //초기 데이터 - MostWishListed
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMostWishListed(cg_id);
        setProductData(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    };
    fetchData();
  });

  return (
    <Wrapper>
      <Nav />

      <Top>
        <SearchTop
          cg_id={cg_id}
          which={whichPage(cg_id)}
          setProductData={setProductData}
        />
      </Top>

      <Section>
        <Center>
          <FilterLists />
          <Contents>
            <ItemDataSection productData={productData}/>
          </Contents>
        </Center>
      </Section>
      <Footer />
    </Wrapper>
  );
};

export default ListUpPage;

const Top = styled.div`
  top: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  float: top;
  margin-top: 2%;
  margin-bottom: 1%;
`;
const Center = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
`;
const Contents = styled.div`
  width: 83%;
  height: 100%;
  margin-top: 20px;
`;
