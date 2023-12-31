import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #fdfffd;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 45vh;
  width: 100%;
  background-color: #154a39;
  color: white;
  margin-top: 7%;
`;

export const FooterStyle = styled.div`
  margin-left: 6%;
  font-family: Pretendard;
`;

export const Logo = styled.img`
  position: relative;
  height: 80%;
  object-fit: contain;
  left: 3%;
  cursor: pointer;
`;

export const NavCategory = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  height: 100%;
  display: flex;
  color: #010d09;
  &:active {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SearchBar = styled.div`
  width: 90%;
  display: flex;
  padding: 0.5rem 1.75rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  border: 1px solid var(--dark, #010D09);
  margin-right: 3%;
`;

export const SearchButton = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  // margin-left: 40%;
  &:active {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export const MyPageButton = styled.img`
  position: relative;
  height: 1.5rem;
  margin-right: 0.5rem;
  top: 30%;
  &:active {
    opacity: 0.5;
  }
  cursor: pointer;
`;
