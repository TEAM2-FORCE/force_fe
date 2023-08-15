import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Modal from "./Modal";
import { useLocation, useNavigate } from "react-router-dom";
import WishlistClick from "../components/items/WishlistClick";

import KoreaVeganMark from "../img/VeganMark/KoreaVeganMark.png";
import VeganSocietyMark from "../img/VeganMark/VeganSocietyMark.png";
import FranceVeganMark from "../img/VeganMark/FranceVeganMark.png";
import ItaliaVeganMark from "../img/VeganMark/ItaliaVeganMark.png";
import PetaMark from "../img/VeganMark/PetaMark.png";
import PetaVeganMark from "../img/VeganMark/PetaVeganMark.png";

import NoAnimalMaterial from "../img/MarkInModal/NoAnimalMaterial.png";
import NoAnimalExperiment from "../img/MarkInModal/NoAnimalExperiment.png";
import NoContamination from "../img/MarkInModal/NoContamination.png";
import NoGenetiChange from "../img/MarkInModal/NoGeneticChange.png";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state.product;
  console.log(product);

  // const [modal, setModal] = useState(false);

  // const handleClick = () => {
  //   setModal(true);
  // };
  const cardClicked = (ingredient) => {
    navigate("/incipediadetail", { state: ingredient });
  };

  // 구매처 이미지 띄우는 로직
  // const sellingSiteImage = (site) => {
  // 	if (site === "Oliveyoung") {
  // 		return 올리브영 이미지
  // 	}
  // 	else if (site === "Sephora") {
  // 		return 세포라 이미지
  // 	}
  // 	else if (site) === "Etude" {
  // 		return 에뛰드 이미지
  // 	}
  // }

  const veganMarkArray = [
    {
      id: 1,
      image: KoreaVeganMark,
      title: "Korea Agency of Vegan Certification and Services",
      description: [
        {
          icon: NoAnimalMaterial,
          text: `No animal-derived 
					raw materials.`,
        },
        {
          icon: NoAnimalExperiment,
          text: "No animal testing",
        },
        {
          icon: NoContamination,
          text: "No cross-contamination",
        },
      ],
    },
    {
      id: 2,
      image: FranceVeganMark,
      title: "EXPERTISE VEGAN EUROPE",
      description: [
        {
          icon: NoAnimalMaterial,
          text: `No raw material and 
					manufacturing aids of animal origin`,
        },
        {
          icon: NoAnimalExperiment,
          text: `No animal testing`,
        },
        {
          icon: NoAnimalMaterial,
          text: `No animal-derived materials 
					in packaging`,
        },
      ],
    },
    {
      id: 3,
      image: ItaliaVeganMark,
      title: "V LABEL ITALIA s.r.l.",
      description: [
        {
          icon: NoAnimalExperiment,
          text: `No animal 
					experiment and testing`,
        },
        {
          icon: NoContamination,
          text: `No cross-contamination `,
        },
        {
          icon: NoAnimalMaterial,
          text: `No animal-derived 
					raw materials and ingredients`,
        },
        {
          icon: NoGenetiChange,
          text: `No Genetically 
					Modified Organisms 
					components`,
        },
      ],
    },
    {
      id: 4,
      image: VeganSocietyMark,
      title: "The Vegan Society",
      description: [
        {
          icon: NoAnimalMaterial,
          text: `No animal-derived 
					ingredients`,
        },
        {
          icon: NoAnimalExperiment,
          text: `No animal experiments`,
        },
        {
          icon: NoGenetiChange,
          text: `No genetically
					modified creature`,
        },
        {
          icon: NoContamination,
          text: `No cross-contamination 
					with No-Vegan `,
        },
      ],
    },
    {
      id: 5,
      image: PetaMark,
      title: `People for the Ethical Treatment of Animals
			-Animal Test Free`,
      description: [
        {
          icon: NoAnimalExperiment,
          text: `No animal testing`,
        },
      ],
    },
    {
      id: 6,
      image: PetaVeganMark,
      title: `People for the Ethical Treatment of Animals
			-Animal Test Free and Vegan`,
      description: [
        {
          icon: NoAnimalExperiment,
          text: `No animal testing`,
        },
        {
          icon: NoAnimalMaterial,
          text: `No animal-derived 
					ingredients`,
        },
      ],
    },
  ];

  // 비건 마크 띄우는 로직
  const veganMarkImage = (veganMark) => {
    if (veganMark === "KoreaVeganmark") {
      return veganMarkArray[0];
    } else if (veganMark === "FranceVeganMark") {
      return veganMarkArray[1];
    } else if (veganMark === "ItaliaVeganMark") {
      return veganMarkArray[2];
    } else if (veganMark === "VeganSocietyMark") {
      return veganMarkArray[3];
    } else if (veganMark === "PetaMark") {
      return veganMarkArray[4];
    } else if (veganMark === "PetaVeganMark") {
      return veganMarkArray[5];
    } else {
      return null;
    }
  };

  return (
    <Wrapper>
      <Nav></Nav>
      <Body>
        <ImageContainer>
          <ItemImage src={product.pd_image} />
        </ImageContainer>
        <ItemDescription>
          <div style={{ width: "95%" }}>
            <Container>
              <h1 style={{ margin: 0 }}>{product.pd_name}</h1>
              <WishlistClick pd_id={product.pd_id} detail={true} />
            </Container>
            <h3 style={{ fontWeight: 500, marginTop: "0.5rem" }}>
              {product.pd_brand}
            </h3>
            <VeganMarkContainer>
              {product.veganmark.map((mark) => {
                <VeganMark
                  key={mark.id}
                  src={mark.image}
                  onClick={
                    <Modal title={mark.title} description={mark.description} />
                  }
                />;
              })}
            </VeganMarkContainer>
            <br />
            <br />
          </div>
          <div>
            <h3>Ingredients</h3>
            <IngredientContainer style={{ marginTop: "0.8rem" }}>
              {product.ingredients &&
                product.ingredients.map((ingredient, index) => (
                  <IngredientText
                    key={index}
                    onClick={() => cardClicked(ingredient)}
                  >
                    {ingredient.igd_name}
                    {index < product.ingredients.length - 1 && ", "}
                  </IngredientText>
                ))}
            </IngredientContainer>
            <br />
            <br />
            <br />
          </div>
          <div style={{ width: "95%" }}>
            <h3>Where To Buy</h3>
            {/* {product.sellingSite.map((site, i)=>{
								<Image src={sellingSiteImage} key={i} 클릭하면 그 페이지로 링크/>
								사이트마다 키가 있는건 아니라서 인덱스로 키를 대신함
							})} */}
          </div>
        </ItemDescription>
      </Body>
      <Footer></Footer>
      {/* {modal && (
        <Modal
          setModal={setModal}
        />
      )} */}
      {/* 모달에 비건마크 아이디 번호에 따라 다르게 세팅, 비건마크 이미지 프롭스 넘겨줘야함
			e.target.id에 따른 다른 비건마크와 설명이 나오게! */}
    </Wrapper>
  );
};

export default ItemDetail;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ItemImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin-top: 3%;
  margin-left: 15%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
  margin-left: 10%;
`;

const VeganMarkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 2rem;
  gap: 0.75rem;
  margin-top: 0;
`;
const VeganMark = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientText = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
