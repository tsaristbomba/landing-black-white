import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  SocialsWrapper,
  SocialLink,
} from "./Footer.styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>
          Growee.io ⓒ {new Date().getFullYear()} all rights reserved.
        </FooterLogo>
        <SocialsWrapper>
          <SocialLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialLink>
        </SocialsWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
