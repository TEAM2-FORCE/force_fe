import styled from "styled-components";

export const NavContainer = styled.div`
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
  margin-bottom: 15%;
`;

export const FooterContainer = styled.div`
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
  cursor: pointer;
`;

export const NavCosmetic = styled.div`
  position: absolute;
  left: 25%;
  top: 30%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #010d09;
  &:active {
    opacity: 0.5;
  }
`;

export const NavINCIpedia = styled.div`
  position: absolute;
  left: 45%;
  top: 30%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #010d09;
  &:active {
    opacity: 0.5;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 15%;
  width: 18rem;
  height: 1.5rem;
  padding: 0.5rem 1.75rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  border: 1px solid var(--dark, #3c9075);
  left: 60%;
`;

export const SearchButton = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 40%;
  &:active {
    opacity: 0.5;
  }
`;

export const MyPageButton = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: 90%;
  top: 30%;
  &:active {
    opacity: 0.5;
  }
  cursor: pointer;
`;