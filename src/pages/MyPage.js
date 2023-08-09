import React from 'react'
import { Wrapper } from '../components/layout/common'
import { Section } from '../components/layout/Layout'
import { styled } from 'styled-components'
import logout from '../img/log-out.png'
import profile from '../img/profile.png'
import ItemCard from '../components/ItemCard'
import IngredientCard from '../components/IngredientCard'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

const MyPage = () => {
  const setLogOut = () => {
  }

  const moreWishList = () => {

  }

  const moreBookMark = () => {

  }

  return (
    <Wrapper>
      <Nav></Nav>
      <Section>

        <Profile>
          <Up>
            <Left>
              MyPage
            </Left>
            <Right onClick={setLogOut}>
              <RightText>
                Log Out
              </RightText>
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
            <Left>
              WishList
            </Left>
            <Right onClick={moreWishList}>
              view more
            </Right>
          </Up>
          <Contents>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
          </Contents>
        </WishList>

        <BookMark>
          <Up>
            <Left>
              BookMark
            </Left>
            <Right onClick={moreBookMark}>
              view more
            </Right>
          </Up>
          <Contents>
            <IngredientCard></IngredientCard>
            <IngredientCard></IngredientCard>
            <IngredientCard></IngredientCard>
          </Contents>
        </BookMark>

      </Section>
      <Footer>
      </Footer>
    </Wrapper>
  )
}

export default MyPage;

const Profile = styled.div`
margin-top: 20px;
width: 90%;
height: 33%;
flex-direction: column;
display: table;
`
const ProfileContent = styled.div`
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ProfileText = styled.div`
font-family: Pretendard;
font-size: 1.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
flex-direction: column;
`

const WishList = styled.div`
width: 90%;
height: 33%;
overflow: hidden;
`

const BookMark = styled.div`
width: 90%;
height: 33%;
margin-bottom: 5%;
`
const Up = styled.div`
top: 0%;
display: flex;
justify-content: space-between;
margin-top: 30px;
margin-bottom: 30px;
`

const Left = styled.div`
float: left;
font-family: Pretendard;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
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
`

const Contents = styled.div`
display: flex;
// flex-direction: center;
padding-left: 5%;
padding-right: 5%;
max-height: 50%;
`

const IconStyled = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-left: 8px;
padding: 0;
`

const RightText = styled.div`
color: var(--dark-gray, var(--dark-gray, #414241));
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const PictureStyled = styled.img`
width: 10rem;
height: 10rem;
margin: 5px;
`