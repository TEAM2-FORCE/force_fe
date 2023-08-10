import React from "react";
import styled from "styled-components";

import NoAnimalMaterial from "../img/NoMark/NoAnimalMaterial.png";
import NoAnimalExperiment from "../img/NoMark/NoAnimalExperiment.png";
import NoContamination from "../img/NoMark/NoContamination.png";
import CancelIcon from "../img/VeganMark/CancelIcon.png";

const Modal = ({ setModal }) => {
  const cancelModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <ModalBackground>
        <ModalBlock>
          <Header>
            <CancelButton src={CancelIcon} onClick={cancelModal} />
          </Header>
          <Body>
            <h2>
              Korea Agency of
              <br />
              Vegan Certification and Services
            </h2>
            <Wrapper>
              <Description>
                <img
                  src={NoAnimalMaterial}
                  alt="NOAnimalMaterial"
                  style={{ width: "5rem", height: "5rem" }}
                />
                <div>No use of animal-derived raw materials.</div>
              </Description>
              <Description>
                <img
                  src={NoAnimalExperiment}
                  alt="NoAnimalExperiment"
                  style={{ width: "5rem", height: "4.5rem" }}
                />
                <div>No Animal Testing</div>
              </Description>
              <Description>
                <img
                  src={NoContamination}
                  alt="NoContamination"
                  style={{ width: "5rem", height: "4.5rem" }}
                />
                <div>No cross-contamination during production process.</div>
              </Description>
            </Wrapper>
          </Body>
        </ModalBlock>
      </ModalBackground>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  position: absolute;
  background-color: white;
  width: 51.24rem;
  height: 30rem;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  position: relative;
  margin: 0;
  height: 10rem;
  width: 100%;
  background: var(--dark, #3c9075);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: white;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 33.33%;
`;

const CancelButton = styled.img`
  position: absolute;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  z-index: 100;
  top: 3rem;
  left: 90%;
  cursor: pointer;
`;
