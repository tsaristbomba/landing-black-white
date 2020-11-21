import React from "react";
import {
  Info2Container,
  Info2Wrapper,
  Column1,
  Info2H1,
  Info2P,
  Column2,
  TextWrapper,
  InfoNumber,
  InfoText,
  InfoImgLarge,
  Column3,
  InfoImgSmall,
} from "./Info2.styles";

const Info2 = ({
  id,
  title,
  sub,
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
  imgSrc3,
  imgAlt3,
  imgSrc4,
  imgAlt4,
}) => {
  return (
    <Info2Container id={id}>
      <Info2Wrapper>
        <Column1>
          <Info2H1>{title}</Info2H1>
          <Info2P>{sub}</Info2P>
        </Column1>
        <Column3>
          <TextWrapper>
            <InfoNumber>01</InfoNumber>
            <InfoText>Analyze</InfoText>
          </TextWrapper>
          <InfoImgSmall src={imgSrc2} alt={imgAlt2} />
        </Column3>
        <Column3>
          <TextWrapper>
            <InfoNumber>03</InfoNumber>
            <InfoText>Concept</InfoText>
          </TextWrapper>
          <InfoImgSmall src={imgSrc4} alt={imgAlt4} />
        </Column3>
        <Column2>
          <TextWrapper>
            <InfoNumber>02</InfoNumber>
            <InfoText>Goals</InfoText>
          </TextWrapper>
          <InfoImgLarge src={imgSrc1} alt={imgAlt1} />
        </Column2>
        <Column2>
          <TextWrapper>
            <InfoNumber>04</InfoNumber>
            <InfoText>Digitalize</InfoText>
          </TextWrapper>
          <InfoImgLarge src={imgSrc3} alt={imgAlt3} />
        </Column2>
      </Info2Wrapper>
    </Info2Container>
  );
};

export default Info2;
