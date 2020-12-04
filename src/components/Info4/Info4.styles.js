import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary, light } from "../../data";
import { FaArrowRight } from "react-icons/fa";

export const Info4Container = styled.div`
  background: ${primary};
  /* padding: 24px; */

  @media screen and (max-width: 768px) {
    padding: 34px 24px;
  }
`;
export const Info4Wrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const Info4Content = styled.div`
  /* padding: 24px; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  align-items: center;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
    padding: 0;
  }
`;
export const Info4Row1 = styled.div`
  grid-area: col1;
  /* padding: 0 15px; */
  max-width: 500px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 24px;
    padding: 0;
  }
`;
export const Info4Row2 = styled.div`
  grid-area: col2;
  /* padding: 0 15px; */
  max-width: 500px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const Info4H1 = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: bolder;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const Info4P = styled.p`
  color: ${light};
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
`;
export const Info4Button = styled(Link)`
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.1;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const IconBtn = styled(FaArrowRight)`
  margin-left: 5px;
`;
