import React from "react";
import { FooterContainer, FooterStyle } from "./Layout";
import { getPriceHighToLow } from "../../apis/Item";

const Footer = () => {
  const example = async () => {
    const response = await getPriceHighToLow(2);
    console.log(response);
  };
  return (
    <FooterContainer onClick={example}>
      <FooterStyle>
        <h3>Contact Us</h3>
        <div>Tel : 02-1234-5678</div>
        <div>
          Mail : ouremail@gmail.com
          <br />
          <br />
        </div>
        <h3>Copyright</h3>
        <div>Image by valuavitaly on Freepik</div>
      </FooterStyle>
    </FooterContainer>
  );
};

export default Footer;
