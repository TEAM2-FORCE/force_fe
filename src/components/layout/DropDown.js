import React from "react";
import styled from "styled-components";

import Makeup from "../../img/Nav/Makeup.png";
import Skincare from "../../img/Nav/Skincare.png";
import Suncare from "../../img/Nav/Suncare.png";
import Masks from "../../img/Nav/Masks.png";
import { useNavigate } from "react-router";

const DropDown = ({ setDropDown }) => {
  const categories = [
    {
      image: "",
      text: "All Products",
      category_id: 0,
    },
    {
      image: Makeup,
      text: "Makeup",
      category_id: 1,
    },
    {
      image: Skincare,
      text: "Skincare",
      category_id: 2,
    },
    {
      image: Suncare,
      text: "Suncare",
      category_id: 3,
    },
    {
      image: Masks,
      text: "Masks",
      category_id: 4,
    },
  ];

  const navigate = useNavigate();
  const onClickCategory = (num) => {
    navigate("/listuppage", { state: { cg_id: num } });
  };

  return (
    <MenuContainer
      onMouseOver={() => setDropDown(true)}
      onMouseLeave={() => {
        setDropDown(false);
      }}
    >
      <Text>All Category</Text>
      <Container>
        {categories.map((category, i) => (
          <Category
            key={category.category_id}
            onClick={() => onClickCategory(category.category_id)}
          >
            {category.image !== "" ? (
              <CategoryImage src={category.image} />
            ) : null}

            <CategoryText>{category.text}</CategoryText>
          </Category>
        ))}
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
  height: 9rem;
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
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  height: 55%;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  display: flex;
  width: 32%;
  padding-left: 0.5rem;
  justify-content: flex-start;
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
