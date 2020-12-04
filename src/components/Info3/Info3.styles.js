import styled from "styled-components";
import { primary, light } from "../../data";

export const Info3Container = styled.div`
  background: ${primary};
  /* height: 100vh; */

  @media screen and (max-width: 850px) {
    height: 100%;
  }
`;
export const Info3Wrapper = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 96px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const Info3Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 24px;

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 24px; */

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Info3P = styled.p`
  color: ${light};
  font-size: 16px;
  line-height: 24px;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Info3H1 = styled.h1`
  color: #fff;
  font-size: 35px;
  line-height: 1.1;
  font-weight: bolder;
  text-transform: uppercase;
  width: 50%;
  align-self: center;
  text-align: end;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
export const PicWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 1rem;
  }
`;
export const Info3Img = styled.img`
  max-width: 200px;
  margin: 0 0 10px 0;
  max-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    max-height: 100%;
  }
`;
export const Info3H3 = styled.h3`
  text-transform: uppercase;
  color: #fff;
`;
