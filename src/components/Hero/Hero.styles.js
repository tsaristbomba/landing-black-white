import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary, secondary, tertiary, light } from "../../data";

export const HeroContainer = styled.div`
  padding: 0 24px;
  background: linear-gradient(120deg, ${secondary} 0%, ${primary} 20%);

  @media screen and (max-width: 480px) {
    padding-top: 24px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  min-height: 700px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 96px;
    padding-bottom: 96px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 1rem;
    padding-bottom: 0;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr) minmax(auto, 0.6fr);
  grid-template-areas: "col1 col2";
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    padding: 48px 0 48px 0;
    grid-gap: 1rem;
  }
`;

export const HeroRow1 = styled.div`
  grid-area: col1;
  /* padding: 0 15px; */
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin: 0 auto 24px auto;
    padding: 0;
  }
`;

export const HeroRow2 = styled.div`
  grid-area: col2;
  /* padding: 0 15px; */
  /* max-width: 500px; */

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

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

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    max-width: 250px;
  }
`;

export const HeroP = styled.p`
  color: ${light};
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    /* text-align: justify; */
  }
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
  margin-right: 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-right: 0 5px;
    /* width: 100%; */
  }
`;

export const HeroBox2 = styled.div`
  background: ${tertiary};
  grid-area: col2;
  margin-right: 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-right: 0 5px;
    /* width: 100%; */
  }
`;

export const HeroBox3 = styled.div`
  background: ${tertiary};
  grid-area: col3;
  margin-right: 10px;
  padding: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-right: 0 5px;
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
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    /* margin: 0 auto 24px auto; */
    /* max-width: 400px; */
    max-height: auto;
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
