import React from 'react'
import { FooterContainer, FooterStyle } from './Layout'

const Footer = () => {
  return (
    <FooterContainer>
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
  )
}

export default Footer