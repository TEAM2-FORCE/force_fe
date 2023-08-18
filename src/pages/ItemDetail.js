import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Layout";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Modal from "./Modal";
import { useLocation, useNavigate } from "react-router-dom";
import WishlistClick from "../components/items/WishlistClick";
import { getMarket } from "../apis/Item";
import { getVeganCertification } from "../apis/Item";

import 올리브영 from "../img/SiteImage/ShoppingSite/올리브영.png";
import 세포라 from "../img/SiteImage/ShoppingSite/sephora.png";
import 신세계 from "../img/SiteImage/ShoppingSite/신세계.png";
import 쿠팡 from "../img/SiteImage/ShoppingSite/쿠팡.png";
import 위메프 from "../img/SiteImage/ShoppingSite/위메프.png";
import 롯데온 from "../img/SiteImage/ShoppingSite/롯데온.png";
import gmarket from "../img/SiteImage/ShoppingSite/gmarket.png";

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
import dAlba from "../img/SiteImage/Brand/dAlba.png";
import efilow from "../img/SiteImage/Brand/efilow.png";
import haruharuWonder from "../img/SiteImage/Brand/haruharuWonder.png";
import innisfree from "../img/SiteImage/Brand/innisfree.png";
import jayjun from "../img/SiteImage/Brand/jayjun.png";
import manyo from "../img/SiteImage/Brand/manyo.png";
import ongredients from "../img/SiteImage/Brand/ongredients.png";
import defaultImage from "../img/Common/checked.png";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state.product;

  const [modal, setModal] = useState(false);
  const [selectedVeganMark, setSelectedVeganMark] = useState(null);

  const [marketData, setMarketData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);

  const showModal = (mark) => {
    setModal(true);
    setSelectedVeganMark(veganMarkInformation(mark));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketResponse = await getMarket(product.pd_id);
        setMarketData(marketResponse.data);
        const VeganCertificationResponse = await getVeganCertification(
          product.pd_id
        );
        setCertificationData(VeganCertificationResponse.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
      }
    };
    fetchData();
  }, []);

  const veganMarkArray = [
    {
      id: 1,
      image: "/img/VeganMark/KoreaVeganMark.png",
      title: "Korea Agency of Vegan Certification and Services",
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No animal-derived
					raw materials.`,
        },
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: "No animal testing",
        },
        {
          icon: "/img/MarkInModal/NoContamination.png",
          text: "No cross-contamination",
        },
      ],
    },
    {
      id: 2,
      image: "/img/VeganMark/FranceVeganMark.png",
      title: "EXPERTISE VEGAN EUROPE",
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No raw material and
					manufacturing aids of animal origin`,
        },
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: `No animal testing`,
        },
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No animal-derived materials
					in packaging`,
        },
      ],
    },
    {
      id: 3,
      image: "/img/VeganMark/ItaliaVeganMark.png",
      title: "V LABEL ITALIA s.r.l.",
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: `No animal${(<br />)}
					experiment and testing`,
        },
        {
          icon: "/img/MarkInModal/NoContamination.png",
          text: `No cross-contamination `,
        },
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No animal-derived
					raw materials and ingredients`,
        },
        {
          icon: "/img/MarkInModal/NoGeneticChange.png",
          text: `No Genetically
					Modified Organisms
					components`,
        },
      ],
    },
    {
      id: 4,
      image: "/img/VeganMark/VeganSocietyMark.png",
      title: "The Vegan Society",
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No animal-derived
					ingredients`,
        },
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: `No animal experiments`,
        },
        {
          icon: "/img/MarkInModal/NoGeneticChange.png",
          text: `No genetically
					modified creature`,
        },
        {
          icon: "/img/MarkInModal/NoContamination.png",
          text: `No cross-contamination$
					with No-Vegan `,
        },
      ],
    },
    {
      id: 5,
      image: "/img/VeganMark/PetaMark.png",
      title: `People for the Ethical Treatment of Animals
			-Animal Test Free`,
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: `No animal testing`,
        },
      ],
    },
    {
      id: 6,
      image: "/img/VeganMark/PetaVeganMark.png",
      title: `People for the Ethical Treatment of Animals
			-Animal Test Free and Vegan`,
      description: [
        {
          icon: "/img/MarkInModal/NoAnimalExperiment.png",
          text: `No animal testing`,
        },
        {
          icon: "/img/MarkInModal/NoAnimalMaterial.png",
          text: `No animal-derived
					ingredients`,
        },
      ],
    },
  ];

  // const [modal, setModal] = useState(false);

  // const handleClick = () => {
  //   setModal(true);
  // };

  const cardClicked = (ingredient) => {
    navigate("/ingredients/detail", { state: ingredient });
  };

  // const siteArray = [
  // 	{
  // 		image: 올리브영,
  // 		링크:
  // 	}
  // ]

  // 구매처 이미지 띄우는 로직
  const sellingSiteImage = (site) => {
    if (site === "oliveyoung") {
      return 올리브영;
    } else if (site === "sephora") {
      return 세포라;
    } else if (site === "lotte_on") {
      return 롯데온;
    } else if (site === "coupang") {
      return 쿠팡;
    } else if (site === "shinsegae") {
      return 신세계;
    } else if (site === "we_make_price") {
      return 위메프;
    } else if (site === "gmarket") {
      return gmarket;
    } else if (site === "cosnori") {
      return cosnori;
    } else if (site === "dasique") {
      return dasique;
    } else if (site === "espoir") {
      return espoir;
    } else if (site === "etude") {
      return etude;
    } else if (site === "peripera") {
      return peripera;
    } else if (site === "rom_nd") {
      return romND;
    } else if (site === "skinfood") {
      return skinfood;
    } else if (site === "the_saem") {
      return the_saem;
    } else if (site === "too_cool_for_school") {
      return too_cool_for_school;
    } else if (site === "wakemake") {
      return wakemake;
    } else if (site === "d_alba") {
      return dAlba;
    } else if (site === "efilow") {
      return efilow;
    } else if (site === "haruharu_wonder") {
      return haruharuWonder;
    } else if (site === "innisfree") {
      return innisfree;
    } else if (site === "jayjun") {
      return jayjun;
    } else if (site === "manyo") {
      return manyo;
    } else if (site === "ongredients") {
      return ongredients;
    } else {
      return null;
    }
  };

  // 비건 마크 띄우는 로직
  const veganMarkInformation = (veganMark) => {
    if (veganMark === "Korea agency of Vegan Certification and Services") {
      return veganMarkArray[0];
    } else if (veganMark === "Expertise Vegan Europe") {
      return veganMarkArray[1];
    } else if (veganMark === "V Label Italia srl") {
      return veganMarkArray[2];
    } else if (veganMark === "The Vegan Society") {
      return veganMarkArray[3];
    } else if (
      veganMark === "PETA Beauty without bunny - global animal test-free"
    ) {
      return veganMarkArray[4];
    } else if (
      veganMark ===
      "PETA Beauty without bunny - global animal test-free and vegan"
    ) {
      return veganMarkArray[5];
    } else {
      return null;
    }
  };

  // //이건 필요없는데 비건마크 안 써서 배포하려고! 나중에 비건마크 쓰면 지우기
  // console.log(veganMarkInformation);
  // console.log(product.vegan_cert);

  const priceMark = () => {
    const price = product.pd_price;
    if (product.pd_price >= 1000) {
      const formattedPrice = price.toLocaleString("en-US");
      return formattedPrice;
    }
    return price;
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
            <BrandText style={{ fontWeight: 500 }}>
              {product.pd_brand}
            </BrandText>
            <Container>
              <ProductName style={{ margin: 0 }}>{product.pd_name}</ProductName>
              <WishlistClick pd_id={product.pd_id} detail={true} />
            </Container>
            <Text style={{ fontWeight: 500 }}>{priceMark()} KRW</Text>
            <VeganMarkContainer>
              {certificationData.map((mark) => (
                <VeganMark
                  key={mark.vg_id}
                  src={
                    veganMarkInformation(mark.vg_company).image || defaultImage
                  }
                  onClick={() => {
                    showModal(mark.vg_company);
                  }}
                />
              ))}
            </VeganMarkContainer>
            <br />
            <br />
          </div>
          <div>
            {/* <ItemDescription> */}
            <h1>Ingredients</h1>
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
            {/* </ItemDescription> */}
            <br />
            <br />
            <br />
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1>Where To Buy</h1>
            {marketData.map((market) => (
              <SiteImage
                src={sellingSiteImage(market.mk_name)}
                onClick={() => {
                  window.open(market.mk_link);
                }}
                key={market.mk_id}
              />
            ))}
          </div>
        </ItemDescription>
      </Body>
      <Footer></Footer>
      {modal && selectedVeganMark && (
        <Modal
          veganMark={selectedVeganMark.image}
          title={selectedVeganMark.title}
          description={selectedVeganMark.description}
          setModal={setModal}
        />
      )}
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
  width: 40%;
  display: flex;
  justify-content: center;
  // background-color: yellow;
`;
const BrandText = styled.div`
  color: var(--light-grey, #919392);
  /* small text */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ProductName = styled.div`
  color: var(--black, #010d09);
  /* Mid Title */
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.div`
  color: var(--dark-gray, var(--dark-gray, #414241));
  /* Mid text */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 7px;
`;
const ItemImage = styled.img`
  width: 70%;
  object-fit: contain;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
`;

const VeganMarkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 2rem;
  gap: 0.75rem;
  margin-top: 10px;
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
  width: 90%;
  flex-wrap: wrap;
  overflow-y: scroll;
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

const SiteImage = styled.img`
  height: 36px;
  object-fit: contain;
  cursor: pointer;
  margin: 10px 0;
`;
