import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const Button = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 20px;
`;
