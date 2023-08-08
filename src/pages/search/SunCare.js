import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/common";
import {
  Section
} from "../../components/layout/Layout";
import ItemDataSection from "../../components/ItemDataSection";
import Nav from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";
import SearchTop from "../../components/layout/SearchTop";
import FilterLists from "../../components/search/FilterLists";

const SunCare = () => {
  return (
    <Wrapper>
      <Nav/>

      <Top>
        <SearchTop which="SunCare"></SearchTop>
      </Top>
        
      <Section>
        <Center>
          <FilterLists/>
          <Contents>
            <ItemDataSection></ItemDataSection>
          </Contents>  
        </Center>
      </Section>
      
      <Footer/>
    </Wrapper>
  );
};

export default SunCare;

const Top = styled.div`
top: 0%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
float: top;
margin-top: 2%;
margin-bottom: 1%;
`
const Center = styled.div`
display: flex;
width: 90%;
height: 100%;
`
const Contents = styled.div`
width: 83%;
height: 100%;
margin-top: 20px;
`