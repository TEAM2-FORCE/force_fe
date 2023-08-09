import React from "react";
import styled from "styled-components";

const Modal = ({ setModal }) => {
  const cancelModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <ModalBackground>
        <ModalBlock>
          <Header />
          <Body>
            <div>Korea Agency of Vegan Certification and Services</div>
            <Wrapper>
              <Description>
                <img />
                blah blah
              </Description>
              <Description>
                <img />
                blah blah
              </Description>
              <Description>
                <img />
                blah blah
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
  padding: 0;
  width: 51.24rem;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin: 0;
  height: 10rem;
  width: 100%;
  background: var(--dark, #3c9075);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  color: black;
`;

// const ButtonSection = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
//   border: none;
// `;

// const ModalButton = styled.button`
//   all: unset;
//   background-color: ${(props) => props.mode};
//   color: white;
//   padding: 10px;
//   border-radius: 24px;
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
