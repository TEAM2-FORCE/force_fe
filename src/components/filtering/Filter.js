import React from "react";
import { styled } from "styled-components";
import CheckItemList from "./CheckItemList";

const Filter = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <CheckItemList></CheckItemList>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  border-bottom: green solid 2px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  color: var(--dark-gray, var(--dark-gray, #414241));
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 10px 10px 0px;
`;
