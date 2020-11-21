import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.styles";

const Navbar = ({ toggleHome, handleMenu }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Growee.io
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="service"
            >
              Service
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="process"
            >
              Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="about"
            >
              About Us
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
