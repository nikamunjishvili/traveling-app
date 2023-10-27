import React from "react";
import { Container, NavItem, NavList, StyledLink } from "../../styles/header";
import ContactSection from "./ContactSection";

const Footer: React.FC = () => {
  return (
    <Container>
      <NavList open={false}>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/shop">Shop</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/profile">Profile</StyledLink>
        </NavItem>
      </NavList>
      <ContactSection />
    </Container>
  );
};

export default Footer;
