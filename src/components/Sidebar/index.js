import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, handleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={handleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="service" offset={-80} onClick={handleMenu}>
            Service
          </SidebarLink>
          <SidebarLink to="process" offset={-80} onClick={handleMenu}>
            Project
          </SidebarLink>
          <SidebarLink to="about" offset={-80} onClick={handleMenu}>
            About Us
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
