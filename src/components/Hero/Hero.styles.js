import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary, secondary, tertiary, light } from "../../data";

export const HeroContainer = styled.div`
  /* background: ${primary}; */
  /* display: flex; */
  /* justify-content: center; */
  align-items: flex-start;
  padding: 0 30px;
  position: relative;
  /* flex-direction: column; */
  /* z-index: 1; */

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(120deg, ${secondary} 0%, ${primary} 20%);
    z-index: 2;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    position: relative;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 3;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  justify-content: start;
  position: relative;

  @media screen and (max-width: 768px) {
    /* height: 550px; */
    height: 1000px;
    top: 80px;
    padding: 0;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr) minmax(auto, 0.6fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    /* grid-template-areas: "col1 col1" "col2 col2"; */
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const HeroRow1 = styled.div`
  grid-area: col1;
  padding: 0 15px;
  max-width: 500px;

  @media screen and (max-width: 480px) {
    margin: 0 auto 24px auto;
    padding: 0;
  }
`;

export const HeroRow2 = styled.div`
  grid-area: col2;
  padding: 0 15px;
  /* max-width: 500px; */

  @media screen and (max-width: 480px) {
    margin: 24px auto 24px auto;
    padding: 0;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  text-transform: uppercase;
  font-weight: bolder;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const HeroP = styled.p`
  color: ${light};
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
`;

export const HeroBoxes = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2 col3";
  justify-content: start;
`;

export const HeroBox1 = styled.div`
  background: ${tertiary};
  grid-area: col1;
  margin: 0 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin: 0 5px;
    /* width: 100%; */
  }
`;

export const HeroBox2 = styled.div`
  background: ${tertiary};
  grid-area: col2;
  margin: 0 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin: 0 5px;
    /* width: 100%; */
  }
`;

export const HeroBox3 = styled.div`
  background: ${tertiary};
  grid-area: col3;
  margin: 0 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin: 0 5px;
    /* width: 100%; */
  }
`;

export const HeroH5 = styled.h5`
  color: #fff;
  font-weight: bold;
`;

export const HeroSmall = styled.small`
  color: ${light};
`;

export const HeroImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  max-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 24px auto;
    max-width: 400px;
    display: flex;
    justify-content: center;
  }
`;

export const ImgButton = styled(Link)`
  background: #fff;
  padding: 16px 25px;
  border-radius: 4px;
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${light};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
