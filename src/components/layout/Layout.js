import styled from "styled-components";

export const Nav = styled.div`
  display: flex;

  width: 100vw;
  height: 10vh;
  background: #fdfffd;

  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 150vh;
  width: 100vw;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 35vh;
  width: 100vw;
  background-color: #154a39;
  color: white;
`;
