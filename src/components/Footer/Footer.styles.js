import styled from "styled-components";
import { secondary } from "../../data";

export const FooterContainer = styled.div`
  background: ${secondary};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterWrapper = styled.div`
  /* padding: 0 120px; */
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 134px;
  }

  @media screen and (max-width: 480px) {
    /* padding: 0 24px; */
  }
`;
export const FooterLogo = styled.p`
  font-size: 16px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const SocialsWrapper = styled.div`
  width: 180px;
  display: inline-flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 150px;
  }
`;
export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
