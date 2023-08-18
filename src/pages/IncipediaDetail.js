import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import ItemCard from "../components/items/ItemCard";
import { useLocation } from "react-router-dom";
import BookmarkClick from "../components/ingredients/BookmarkClick";
import { getAllItemsInCategory } from "../apis/Item";

const IncipediaDetail = () => {
  const { state } = useLocation();
  const ingredient = state;
  console.log(ingredient);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItemsInCategory(0);
        console.log("상품");
        console.log(response);
        setProductData(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    };
    fetchData();
  }, []);

  const dataAvailability = (data) => {
    if (data === 1) {
      return "none";
    } else if (data === 2) {
      return "limited";
    } else if (data === 3) {
      return "fair";
    } else if (data === 4) {
      return "good";
    } else if (data === 5) {
      return "robust";
    }
  };

  const hazardScore = (hazard) => {
    if (hazard == 1) {
      return "none";
    } else if (hazard == 2) {
      return "low";
    } else if (hazard == 3) {
      return "moderate";
    } else if (hazard == 4) {
      return "high";
    }
  };

  const gradeImage = () => {
    if (ingredient.igd_ewg_harzard_no == "1") {
      return "/img/EWGgrade/1.png";
    } else if (ingredient.igd_ewg_harzard_no == "2") {
      return "/img/EWGgrade/2.png";
    } else if (ingredient.igd_ewg_harzard_no == "3") {
      return "/img/EWGgrade/3.png";
    } else if (ingredient.igd_ewg_harzard_no == "4") {
      return "/img/EWGgrade/4.png";
    } else if (ingredient.igd_ewg_harzard_no == "5") {
      return "/img/EWGgrade/5.png";
    } else if (ingredient.igd_ewg_harzard_no == "6") {
      return "/img/EWGgrade/6.png";
    } else if (ingredient.igd_ewg_harzard_no == "7") {
      return "/img/EWGgrade/7.png";
    } else if (ingredient.igd_ewg_harzard_no == "8") {
      return "/img/EWGgrade/8.png";
    } else if (ingredient.igd_ewg_harzard_no == "9") {
      return "/img/EWGgrade/9.png";
    } else if (ingredient.igd_ewg_harzard_no == "10") {
      return "/img/EWGgrade/10.png";
    } else if (ingredient.igd_ewg_harzard_no == "1-2") {
      return "/img/EWGgrade/1to2.png";
    } else if (ingredient.igd_ewg_harzard_no == "1-3") {
      return "/img/EWGgrade/1to3.png";
    } else if (ingredient.igd_ewg_harzard_no == "2-4") {
      return "/img/EWGgrade/2to4.png";
    } else if (ingredient.igd_ewg_harzard_no == "2-5") {
      return "/img/EWGgrade/2to5.png";
    } else if (ingredient.igd_ewg_harzard_no == "3-8") {
      return "/img/EWGgrade/3to8.png";
    } else if (ingredient.igd_ewg_harzard_no == "4-6") {
      return "/img/EWGgrade/4to6.png";
    } else if (ingredient.igd_ewg_harzard_no == "5-6") {
      return "/img/EWGgrade/5to6.png";
    } else if (ingredient.igd_ewg_harzard_no == "7-8") {
      return "/img/EWGgrade/7to8.png";
    }
  };

  return (
    <Wrapper>
      <Nav />
      <Body>
        <BodySection>
          <Container>
            <h1>{ingredient.igd_name}</h1>
            {/* <IconImage
              src={whichStar()}
              alt="favorite"
              onClick={favoriteClick}
            ></IconImage> */}
            <BookmarkClick
              igd_id={ingredient.igd_id}
              detail={true}
              isBookmarked={ingredient.bookmarked_igd}
            ></BookmarkClick>
          </Container>
          <EWGWrapper>
            <InformationWrapper>
              <TitleText>Data Availability</TitleText>
              <TitleText>Hazard Score</TitleText>
              <TitleText>About Ingredients</TitleText>
            </InformationWrapper>
            <InformationWrapper style={{ marginLeft: "20px" }}>
              <InformationText>
                {dataAvailability(ingredient.igd_ewg_data)}
              </InformationText>
              <InformationText>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <GradeText>
                    {hazardScore(ingredient.igd_ewg_harzard)}
                  </GradeText>
                  <img
                    src={gradeImage(ingredient.igd_ewg_harzard_no)}
                    style={{ marginLeft: "10px", marginBottom: "10px" }}
                  />
                </div>
              </InformationText>
              <InformationText>{ingredient.igd_info}</InformationText>
            </InformationWrapper>
          </EWGWrapper>
          <div style={{ fontSize: "1.5rem" }}>{ingredient.igd_main_ftn}</div>
          <br />
          <br />
          <br />
          <br />
          <Container2>
            <h2>Products Including</h2>
          </Container2>
          <ProductContainer>
            {productData
              .slice(0, 5)
              .filter((product) => ingredient.products.includes(product.pd_id))
              .map((filteredProduct) => (
                <ItemCard product={filteredProduct} />
              ))}
            {/* {wishlistData &&
              wishlistData
                .slice(0, 4)
                .map((wishlist) => (
                  <ItemCard key={wishlist.pd_id} product={wishlist.products_contents} /> */}
          </ProductContainer>
        </BodySection>
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default IncipediaDetail;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BodySection = styled.div`
  width: 88%;
`;
const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;

const EWGWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

const TitleText = styled.div`
  color: var(--black, #010d09);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: justify;
`;

const InformationText = styled.div`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GradeText = styled.div`
  color: #31ae4d;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
