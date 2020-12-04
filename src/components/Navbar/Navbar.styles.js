import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { primary } from "../../data";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? primary : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.2s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 134px;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 24px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    padding-right: 54px;
  }

  @media screen and (max-width: 480px) {
    padding-right: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  width: 300px;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 0 1rem; */
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: all 0.1s ease-in-out;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;
