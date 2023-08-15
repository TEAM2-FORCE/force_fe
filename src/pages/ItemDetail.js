import React from "react";
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

import 올리브영 from "../img/SiteImage/ShoppingSite/올리브영.png";
import 세포라 from "../img/SiteImage/ShoppingSite/sephora.png";
import 신세계 from "../img/SiteImage/ShoppingSite/신세계.png";
import 쿠팡 from "../img/SiteImage/ShoppingSite/쿠팡.png";
import 위메프 from "../img/SiteImage/ShoppingSite/위메프.png";
import 롯데온 from "../img/SiteImage/ShoppingSite/롯데온.png";

import cosnori from "../img/SiteImage/Brand/cosnori.png";
import dasique from "../img/SiteImage/Brand/dasique.png";
import espoir from "../img/SiteImage/Brand/espoir.png";
import etude from "../img/SiteImage/Brand/etude.png";
import peripera from "../img/SiteImage/Brand/peripera.png";
import romND from "../img/SiteImage/Brand/rom&nd.png";
import skinfood from "../img/SiteImage/Brand/skinfood.png";
import the_saem from "../img/SiteImage/Brand/the_saem.png";
import too_cool_for_school from "../img/SiteImage/Brand/too_cool_for_school.png";
import wakemake from "../img/SiteImage/Brand/wakemake.png";

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

  // const siteArray = [
  // 	{
  // 		image: 올리브영,
  // 		링크:
  // 	}
  // ]

  // 구매처 이미지 띄우는 로직
  const sellingSiteImage = (site) => {
    if (site === "Oliveyoung") {
      return 올리브영;
    } else if (site === "Sephora") {
      return 세포라;
    } else if (site === "LotteOn") {
      return 롯데온;
    } else if (site === "Coupang") {
      return 쿠팡;
    } else if (site === "Shinsegae") {
      return 신세계;
    } else if (site === "위메프") {
      return 위메프;
    } else if (site === "Cosnori") {
      return cosnori;
    } else if (site === "Dasique") {
      return dasique;
    } else if (site === "Espoir") {
      return espoir;
    } else if (site === "Etude") {
      return etude;
    } else if (site === "Peripera") {
      return peripera;
    } else if (site === "Rom&nd") {
      return romND;
    } else if (site === "Skinfood") {
      return skinfood;
    } else if (site === "The_saem") {
      return the_saem;
    } else if (site === "too_cool_for_school") {
      return too_cool_for_school;
    } else if (site === "wakemake") {
      return wakemake;
    } else {
      return null;
    }
  };

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

  //이건 필요없는데 비건마크 안 써서 배포하려고! 나중에 비건마크 쓰면 지우기
  console.log(veganMarkImage);

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
              {product.veganmark.map((mark) => (
                <VeganMark
                  key={mark.id}
                  src={mark.image}
                  onClick={
                    <Modal title={mark.title} description={mark.description} />
                  }
                />
              ))}
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
            {product.sellingSite.map((site, i) => (
              <image src={() => sellingSiteImage(site)} key={i} />
            ))}
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
