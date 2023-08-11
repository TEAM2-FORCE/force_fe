import React from "react";
import styled from "styled-components";

import Makeup from "../../img/Nav/Makeup.png";
import Skincare from "../../img/Nav/Skincare.png";
import Suncare from "../../img/Nav/Suncare.png";
import Masks from "../../img/Nav/Masks.png";

const DropDown = ({ setDropDown }) => {
  const categories = [Makeup, Skincare, Suncare, Masks];

  return (
    <MenuContainer
      onMouseOver={() => setDropDown(true)}
      onMouseLeave={() => {
        setDropDown(false);
      }}
    >
      <Text>All Products</Text>
      <Container>
        {/* {categories.map((category) => {
          <Category>
            <CategoryImage src={category} />
            <CategoryText innerText={category}></CategoryText>
          </Category>;
        })} */}
        <Category>
          <CategoryImage src={Makeup} />
          <CategoryText>Makeup</CategoryText>
        </Category>
        <Category>
          <CategoryImage src={Skincare} />
          <CategoryText>Skincare</CategoryText>
        </Category>
        <Category>
          <CategoryImage src={Suncare} />
          <CategoryText>Suncare</CategoryText>
        </Category>
        <Category>
          <CategoryImage src={Masks} />
          <CategoryText>Masks</CategoryText>
        </Category>
      </Container>
    </MenuContainer>
  );
};

export default DropDown;

const MenuContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 5rem;
  padding: 2.34375rem 3.75rem 2.40625rem 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 63.75rem;
  height: 7rem;
  border-top: 1px solid #d0d0d0;
  background: var(--white, #fdfffd);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Category = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  display: flex;
  width: 7.5rem;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-left: 2px solid #2ebe8f;
`;

const CategoryText = styled.text`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;
