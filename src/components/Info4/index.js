import React from "react";
import {
  Info4Container,
  Info4Wrapper,
  Info4Content,
  Info4Row1,
  Info4Row2,
  Info4H1,
  Info4P,
  Info4Button,
  IconBtn,
} from "./Info4.styles";

const Info4 = ({ title, sub1, sub2 }) => {
  return (
    <Info4Container>
      <Info4Wrapper>
        <Info4Content>
          <Info4Row1>
            <Info4H1>{title}</Info4H1>
            <Info4Button to="/contact-us">
              Contact us <IconBtn />
            </Info4Button>
          </Info4Row1>
          <Info4Row2>
            <Info4P>{sub1}</Info4P>
            <Info4P>{sub2}</Info4P>
          </Info4Row2>
        </Info4Content>
      </Info4Wrapper>
    </Info4Container>
  );
};

export default Info4;
