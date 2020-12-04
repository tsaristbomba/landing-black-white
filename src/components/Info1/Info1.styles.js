import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary, light } from "../../data";

export const Info1Container = styled.div`
  background: ${primary};
  height: 600px;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 48px 0 48px 0;
  }
`;
export const Info1Wrapper = styled.div`
  display: grid;
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const Info1Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  /* padding: 0 30px; */
  max-width: 500px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto 34px 0;
  }
`;
export const Column2 = styled.div`
  grid-area: col2;
  /* padding: 0 30px; */
  max-width: 500px;

  @media screen and (max-width: 480px) {
    margin: 0 auto;
    padding: 0;
  }
`;
export const Info1Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  max-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 4px;
`;
export const Info1P = styled.p`
  color: ${light};
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
`;
export const Info1H1 = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: bolder;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const InfoButton = styled(Link)`
  background: #fff;
  padding: 16px 25px;
  border-radius: 4px;
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${light};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
