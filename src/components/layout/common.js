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

export const NavCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  left: 80px;
  top: 20px;
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

export const SearchBar = styled.div`
  display: flex;
`;

export const CosmeticImgList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 20px 21px;
`;
