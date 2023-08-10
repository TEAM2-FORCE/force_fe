import React from "react";
import styled from "styled-components";

const DropDown = ({ setDropDown }) => {
  return (
    <MenuContainer
      onMouseOver={() => setDropDown(true)}
      onMouseLeave={() => {
        setDropDown(false);
      }}
    >
      <div>All Products</div>
      <div>Makeup</div>
      <div>SkinCare</div>
      <div>Suncare</div>
      <div>Masks</div>
    </MenuContainer>
  );
};

export default DropDown;

const MenuContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 63.75rem;
  height: 15rem;
  border: solid black 1.3px;
  border-top: 0;
  z-index: 100;
`;
