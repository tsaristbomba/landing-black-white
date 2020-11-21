import React from "react";
import PropTypes from "prop-types";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBoxes,
  HeroBox1,
  HeroBox2,
  HeroBox3,
  HeroH5,
  HeroSmall,
  HeroImg,
  ImgButton,
  HeroWrapper,
  HeroRow1,
  HeroRow2,
} from "./Hero.styles";

const Hero = ({ homeTitle, homeSub, imgSub, imgSrc, imgAlt }) => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <HeroRow1>
            <HeroH1>{homeTitle}</HeroH1>
            <HeroP>{homeSub}</HeroP>
            <HeroBoxes>
              <HeroBox1>
                <HeroH5>Product Designer</HeroH5>
                <HeroSmall>12 projects</HeroSmall>
              </HeroBox1>
              <HeroBox2>
                <HeroH5>Branding Designer</HeroH5>
                <HeroSmall>8 projects</HeroSmall>
              </HeroBox2>
              <HeroBox3>
                <HeroH5>Fullstack Developer</HeroH5>
                <HeroSmall>27 projects</HeroSmall>
              </HeroBox3>
            </HeroBoxes>
          </HeroRow1>
          <HeroRow2>
            <HeroImg src={imgSrc} alt={imgAlt} />
            <HeroP>{imgSub}</HeroP>
            <ImgButton to="/contact-us">Contact Us</ImgButton>
          </HeroRow2>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

Hero.propTypes = {
  homeTitle: PropTypes.string,
  homeSub: PropTypes.string,
  imgSub: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Hero;
