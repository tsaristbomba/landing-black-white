import styled from "styled-components";
import { primary, light, secondary } from "../../data";

export const Info2Container = styled.div`
  background: ${primary};
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Info2Wrapper = styled.div`
  columns: 2 500px;
  column-gap: 2rem;
  height: 100%;
  padding: 96px 24px;
  max-width: 1100px;

  @media screen and (max-width: 1085px) {
    columns: 2 300px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 24px;
  }
`;
export const Column1 = styled.div`
  /* padding: 0 30px; */
  /* max-width: 500px; */
  /* height: 150px; */
  /* width: 100%; */

  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
export const Column2 = styled.div`
  /* padding: 0 30px; */
  /* max-width: 500px; */
  /* height: 450px; */
  /* width: 100%; */
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
export const Column3 = styled.div`
  /* padding: 0 30px; */
  /* max-width: 500px; */
  /* height: 400px; */
  /* width: 100%; */
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
export const Info2H1 = styled.h1`
  color: #fff;
  /* margin-bottom: 24px; */
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  font-weight: bolder;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const Info2P = styled.p`
  color: ${light};
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
`;
export const TextWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 20px;
  background: ${secondary};
  border-radius: 4px 4px 0 0;
  /* margin-top: 20px; */
`;
export const InfoNumber = styled.h3`
  color: #fff;
`;
export const InfoText = styled.h3`
  text-transform: uppercase;
  margin-left: auto;
  color: #fff;
`;
export const InfoImgLarge = styled.img`
  width: 100%;
  max-height: 360px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 0 0 4px 4px;
`;
export const InfoImgSmall = styled.img`
  width: 100%;
  max-height: 280px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 0 0 4px 4px;
`;
