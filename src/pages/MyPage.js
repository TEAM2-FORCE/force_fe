import React, { useEffect, useState } from "react";
import { Wrapper } from "../components/layout/Layout";
import { Section } from "../components/layout/Layout";
import { styled } from "styled-components";
import logout from "../img/MyPage/log-out.png";
import profile from "../img/MyPage/profile.png";
import ItemCard from "../components/items/ItemCard";
import IngredientCard from "../components/ingredients/IngredientCard";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { getBookmarkIngredients } from "../apis/Ingredient";
import { getWishlistItems } from "../apis/Item";

const MyPage = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const navigate = useNavigate();
  const setLogOut = () => {};

  const moreWishList = () => {
    navigate("/wishlist", { state: wishlistData });
  };
  const moreBookMark = () => {
    navigate("/bookmark", { state: bookmarkData });
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("북마크");
      const responseWishlist = await getWishlistItems();
      setWishlistData(responseWishlist.data);
      const responseBookmark = await getBookmarkIngredients();
      console.log(responseBookmark);
      setBookmarkData(responseBookmark.data);
    };
    fetchData();
  },[]);

  return (
    <Wrapper>
      <Nav></Nav>
      <Section>
        <Profile>
          <Up>
            <Left>MyPage</Left>
            <Right onClick={setLogOut}>
              <RightText>Log Out</RightText>
              <IconStyled src={logout} alt="Icon"></IconStyled>
            </Right>
          </Up>
          <ProfileContent>
            <PictureStyled src={profile} alt="profile"></PictureStyled>
            <ProfileText>Gildong Hong</ProfileText>
          </ProfileContent>
        </Profile>

        <WishList>
          <Up>
            <Left>WishList</Left>
            <Right onClick={moreWishList}>view more</Right>
          </Up>
          <Contents>
            {wishlistData &&
              wishlistData
                .slice(0, 4)
                .map((wishlist) => (
                  <ItemCard key={wishlist.pd_id} product={wishlist} />
                ))}
          </Contents>
        </WishList>

        <BookMark>
          <Up>
            <Left>BookMark</Left>
            <Right onClick={moreBookMark}>view more</Right>
          </Up>
          <Contents>
            {bookmarkData &&
              bookmarkData
                .slice(0, 4)
                .map((bookmark) => (
                  <IngredientCard key={bookmark.pd_id} ingredient={bookmark} />
                ))}
          </Contents>
        </BookMark>
      </Section>
      <Footer></Footer>
    </Wrapper>
  );
};

export default MyPage;

const Profile = styled.div`
  margin-top: 20px;
  width: 90%;
  height: 33%;
  flex-direction: column;
  display: table;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileText = styled.div`
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-direction: column;
`;

const WishList = styled.div`
  width: 90%;
  height: 33%;
  overflow: hidden;
`;

const BookMark = styled.div`
  width: 90%;
  height: 33%;
  margin-bottom: 5%;
`;
const Up = styled.div`
  top: 0%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Left = styled.div`
  float: left;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Right = styled.button`
  float: right;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
`;

const Contents = styled.div`
  display: flex;
  // flex-direction: center;
  padding-left: 5%;
  padding-right: 5%;
  max-height: 50%;
`;

const IconStyled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 8px;
  padding: 0;
`;

const RightText = styled.div`
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PictureStyled = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 5px;
`;
