import React from "react";
import {
  Info1Container,
  Info1Wrapper,
  Info1Row,
  Column1,
  Column2,
  Info1Img,
  Info1P,
  Info1H1,
  InfoButton,
} from "./Info1.styles";

const Info1 = ({ id, imgSrc, imgAlt, sub, imgH1, img2Src, img2Alt }) => {
  return (
    <Info1Container id={id}>
      <Info1Wrapper>
        <Info1Row>
          <Column1>
            <Info1Img src={imgSrc} alt={imgAlt} />
            <Info1P>{sub}</Info1P>
            <InfoButton to="/contact-us">Contact Us</InfoButton>
          </Column1>
          <Column2>
            <Info1H1>{imgH1}</Info1H1>
            <Info1Img src={img2Src} alt={img2Alt} />
          </Column2>
        </Info1Row>
      </Info1Wrapper>
    </Info1Container>
  );
};

export default Info1;
