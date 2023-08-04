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
  height: 45vh;
  width: 100vw;
  background-color: #154a39;
  color: white;
`;

export const FooterStyle = styled.div`
  margin-left: 6%;
`;

export const Logo = styled.div`
  position: absolute;
  left: 6%;
  top: 20%;
  color: #010d09;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavCosmetic = styled.div`
  position: absolute;
  left: 30%;
  top: 30%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #010d09;
`;

export const NavINCIpedia = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #010d09;
`;
