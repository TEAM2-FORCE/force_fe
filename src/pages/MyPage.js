import React from 'react'
import { Wrapper } from '../components/layout/common'
import { Footer, FooterStyle, Logo, Nav, NavCosmetic, NavINCIpedia, Section } from '../components/layout/Layout'
import { styled } from 'styled-components'
import setting from '../img/settings.png'
import profile from '../img/profile.png'
import ItemCard from '../components/ItemCard'
import IngredientCard from '../components/IngredientCard'

const MyPage = () => {
  const setProfile = () => {
  }

  const moreWishList = () => {

  }

  const moreBookMark = () => {

  }

  return (
    <Wrapper>
      <Nav>
        <Logo>VEBE</Logo>
        <NavCosmetic>All Category</NavCosmetic>
        <NavINCIpedia>INCIpedia</NavINCIpedia>
      </Nav>
      <Section>

        <Profile>
          <Up>
            <Left>
              MyPage
            </Left>
            <Right onClick={setProfile}>
              <RightText>
                Edit
              </RightText>
              <IconStyled src={setting} alt="Icon"></IconStyled>
            </Right>
          </Up>
          <ProfileContent>
            <PictureStyled src={profile}></PictureStyled>
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
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
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
        <FooterStyle>
          <h3>Contact Us</h3>
          <div>Tel : 02-1234-5678</div>
          <div>
            Mail : ouremail@gmail.com
            <br />
            <br />
          </div>
          <h3>Copyright</h3>
          <div>Image by valuavitaly on Freepik</div>
        </FooterStyle>
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
flex-direction: center;
padding-left: 5%;
padding-right: 5%;
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
font-weight: 700;
line-height: normal;
`

const PictureStyled = styled.img`
width: 10rem;
height: 10rem;
margin: 5px;
`