import React from "react";
import styled from "styled-components";
import { Section, Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import BookmarkDataSection from "../components/ingredients/BookmarkDataSection";
import { useLocation } from "react-router-dom";

const BookmarkPage = () => {
  const { state } = useLocation();
  const bookmarkData = state;
  console.log(bookmarkData);
  return (
    <Wrapper>
      <Nav />

      <Top>
        <Left>Bookmark</Left>
      </Top>

      <Section>
        <Center>
          <Contents>
            <BookmarkDataSection bookmarkData={bookmarkData} />
          </Contents>
        </Center>
      </Section>
      <Footer />
    </Wrapper>
  );
};

export default BookmarkPage;

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
const Left = styled.div`
  float: left;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5%;
`;
const Center = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
