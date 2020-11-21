import React from "react";
import {
  Info3Container,
  Info3Wrapper,
  Info3Row,
  TextWrapper,
  Info3P,
  Info3H1,
  PicWrapper,
  Info3Img,
  Info3H3,
} from "./Info3.styles";

const Info3 = ({
  id,
  sub,
  title,
  img1,
  alt1,
  name1,
  description1,
  img2,
  alt2,
  name2,
  description2,
  img3,
  alt3,
  name3,
  description3,
}) => {
  return (
    <Info3Container id={id}>
      <Info3Wrapper>
        <Info3Row>
          <TextWrapper>
            <Info3P>{sub}</Info3P>
            <Info3H1>{title}</Info3H1>
          </TextWrapper>
        </Info3Row>
        <Info3Row>
          <PicWrapper>
            <Info3Img src={img1} alt={alt1} />
            <Info3H3>{name1}</Info3H3>
            <Info3P>{description1}</Info3P>
          </PicWrapper>
          <PicWrapper>
            <Info3Img src={img2} alt={alt2} />
            <Info3H3>{name2}</Info3H3>
            <Info3P>{description2}</Info3P>
          </PicWrapper>
          <PicWrapper>
            <Info3Img src={img3} alt={alt3} />
            <Info3H3>{name3}</Info3H3>
            <Info3P>{description3}</Info3P>
          </PicWrapper>
        </Info3Row>
      </Info3Wrapper>
    </Info3Container>
  );
};

export default Info3;
