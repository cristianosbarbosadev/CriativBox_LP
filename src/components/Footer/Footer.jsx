import React from 'react';
import {
  FaInstagram
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  LogoCriativBox,
} from './FooterElements';
import logo from '../../images/Logo_final.png';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <LogoCriativBox src={logo} alt="Logo" />
            <SocialLogo to="/">CriativBox</SocialLogo>
            <SocialIconLink
              href="https://www.instagram.com/criativboxmi"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
